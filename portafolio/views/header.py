import reflex as rx

from portafolio.styles.styles import Size

def header() -> rx.component:
    return rx.vstack(
        rx.heading(),
        rx.flex(
            rx.avatar(size="full"),
            rx.box(
                rx.text("Lorem impsum dolor sit aemet"),
                rx.text("Lorem impsum dolor sit aemet"),
            ),
        ),
    rx.icon(tag="chevron_down"),
    )