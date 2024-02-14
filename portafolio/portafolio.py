import reflex as rx
import portafolio.styles.styles as styles #importa el script de estilos
from portafolio.views.navbar import navbar
from portafolio.views.header import header

def index() -> rx.component:
    return rx.box(
        navbar(),
        header(),
    )


app = rx.App(
    stylesheets=styles.STYLESHEETS, #añades los estilos a la app
    style=styles.BASE_STYLE
)
app.add_page(
    index,
    title="Iván Sevilla, software developer",
    description="Prueba"
)
