# استفاده از تصویر پایه python
FROM python:3.12.8-slim

# تنظیم دایرکتوری کار
WORKDIR /app

# کپی فایل requirements.txt
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# کپی تمام فایل های پروژه 
COPY . .

# مهاجرت دیتابیس
RUN python manage.py migrate

# ایجاد کاربر غیر root
RUN adduser -D appuser
USER appuser

EXPOSE 8000

# دستور اجرا
CMD ["gunicorn", "--bind", "0.0.0.0:8000","core.wsgi"]