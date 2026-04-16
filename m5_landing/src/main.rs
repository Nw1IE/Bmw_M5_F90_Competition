use axum::{
    extract::State,
    response::Html,
    routing::get,
    Router,
};
use std::net::SocketAddr;
use std::sync::Arc;
use tera::{Context, Tera};
use ax_um::{routing::get, Router};
use tower_http::services::ServeDir; // Для статики
use std::net::SocketAddr;

// Структура для хранения 
struct AppState {
    templates: Tera,
}

#[tokio::main]
async fn main() {
    let mut tera = Tera::default();
    tera.add_raw_template("index.html", include_str!("../templates/index.html")).unwrap();

    let app = Router::new()
        // Раздаем папку static по пути /static
        .nest_service("/static", ServeDir::new("static"))
        .route("/", get(render_index));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}


// Обработчик страницы
async fn render_index(State(state): State<Arc<AppState>>) -> Html<String> {
    let mut ctx = Context::new();
    
    // Передача данные в шаблон
    ctx.insert("model_name", "BMW M5");
    ctx.insert("spec_name", "Competition");
    ctx.insert("hp", "625");
    ctx.insert("accel", "3.3");
    ctx.insert("engine", "V8 M TwinPower Turbo");

    let rendered = state.templates.render("index.html", &ctx).unwrap();
    Html(rendered)
}