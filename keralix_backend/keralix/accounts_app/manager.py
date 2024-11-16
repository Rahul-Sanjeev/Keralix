from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):

    def email_validator(self, email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError(_("Invalid email address"))

    # User
    def create_user(
        self, first_name, last_name, email, phone_number, password=None, **extra_fields
    ):

        if not first_name:
            raise ValueError(_("First name must be provided"))
        if not last_name:
            raise ValueError(_("Last name must be provided"))
        if not phone_number:
            raise ValueError(_("Phone number must be provided"))

        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(_("Email must be provided"))

        user = self.model(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone_number=phone_number,
            **extra_fields
        )

        user.set_password(password)
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)

        user.save()

        return user

    # Superuser
    def create_superuser(
        self, first_name, last_name, email, phone_number, password=None, **extra_fields
    ):

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser = True"))

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff = True"))

        if not password:
            raise ValueError(_("Admin User: Password must be provided"))

        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(_("Admin User: Email must be provided"))

        superUser = self.create_user(
            first_name=first_name or "",
            last_name=last_name or "",
            email=email,
            phone_number=phone_number,
            password=password,
            **extra_fields
        )

        superUser.save()

        return superUser
