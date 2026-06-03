# Masrivi Website

موقع Masrivi للتواصل - يربط نموذج الاتصال مع بوت Telegram.

## المتطلبات

لتعمل الإرسال،你需要:

1. **إنشاء بوت على Telegram:**
   - اذهب إلى @BotFather
   - أرسل /newbot
   - احصل على Bot Token

2. **الحصول على Chat ID:**
   - أضف بوتك إلى المحادثة
   - زر https://api.telegram.org/bot<TOKEN>/getUpdates
   - ابحث عن "chat":{"id":

3. **تحديث الكود:**
   - افتح index.html
   - استبدل `YOUR_BOT_TOKEN` و `YOUR_CHAT_ID`

## النشر

الموقع منشور بالفعل على:
https://elymedsalem740-bot.github.io/masrivi/

## الخطوات التالية

- [ ] إضافة تكامل Facebook
- [ ] إضافة نموذج اتصال أكثر تفصيلاً
- [ ] إضافة التحقق من صحة البيانات
