from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import User


class UserAdmin(BaseUserAdmin):
    ordering = ["email"]  # Sort users by email
    add_form = CustomUserCreationForm  # Use your custom form for creating users
    form = CustomUserChangeForm  # Use your custom form for changing users
    model = User  # Specify the model to manage
    list_display = (  # Fields to display in the admin list view
        "email",
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "is_staff",
        "is_superuser",
        "is_active",
        "date_joined",
    )
    list_display_links = ["email"]  # Make the email clickable
    list_filter = [
        "email",
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "is_staff",
        "is_superuser",
    ]  # Fields to include in the admin filter view
    search_fields = [
        "email",
        "first_name",
        "last_name",
        "phone_number",
    ]  # Fields to include in search

    # Add this to customize the fieldsets
    # Fieldsets for viewing and editing user information
    fieldsets = (
        (
            _("Login Credentials"),
            {
                "fields": (
                    "email",
                    "password",
                )
            },
        ),
        (
            _("Personal Information"),
            {
                "fields": (
                    "first_name",
                    "last_name",
                )
            },
        ),
        (
            _("Permissions and Groups"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        (
            _("Important Dates"),
            {"fields": ("last_login",)},
        ),
    )

    # Fieldsets for creating a new user
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "first_name",
                    "last_name",
                    "password1",
                    "password2",
                    "is_staff",
                    "is_active",
                ),
            },
        ),
    )


# Register the User model with the CustomUser admin class
admin.site.register(User, UserAdmin)
