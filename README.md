# Vexra — Wishlist Manager

> **Developed by King of Games · Designed by Vexra Entertainment**

[English](#english) | [Tiếng Việt](#tiếng-việt) | [中文](#中文)

---

<a name="english"></a>
## 🇬🇧 English

### Description
**Vexra Wishlist Manager** is a high-performance web tool for Free Fire players to manage their in-game wishlists with precision and ease. Secure login via `.dat` session files or manual credentials, real-time bulk operations, and a full player-search feature — all wrapped in the premium Vexra design system.

### ✨ Features
- **Flexible Login** — Upload your `GUEST100067.DAT` file or enter UID + Password manually. Credentials are saved locally for auto-login on return visits.
- **Wishlist Management** — Add or remove items individually or in bulk (up to 100 items). Live progress bar tracks every operation.
- **Player Search** — Find any player by UID or Nickname, browse their wishlist, and copy items directly to your own list with one click.
- **Items Library Link** — Quick access to the Free Fire Items Library for browsing item IDs and rarities.
- **Corrupted Item Detection** — Automatically warns you when invalid/corrupted items are found in a wishlist.
- **Auto Version Update** — The app checks the latest version from GitHub every 6 hours and notifies you with an update prompt if a new release is available — no breaking changes to the UI.
- **3 Languages** — Full support for English, Vietnamese (VI), and Chinese (ZH), switchable in-app via the language button or Settings modal.
- **Vexra Design System** — Sticky navbar with accent stripe, slide-in drawer, GFF font family, animated loader, item grid with rarity backgrounds, and a branded footer. Fully responsive across mobile, tablet, and desktop.

### 📸 Screenshots
| Login Screen (EN) | Dashboard (EN) |
|---|---|
| ![Login EN](./Screenshots/login-en.jpg) | ![Dashboard EN](./Screenshots/dashboard-en.jpg) |

### 📁 Project Structure
```
Vexra_Wishlist/
├── index.html              # Main HTML — no inline CSS or JS
├── icon.png                # App icon / brand mark
├── manifest.json           # PWA manifest
├── src/
│   ├── css/
│   │   └── theme.css       # Full dark theme — GFF fonts, all components
│   ├── fonts/
│   │   ├── GFF-Latin-Regular.ttf
│   │   ├── GFF-Latin-Light.ttf
│   │   ├── gff_latin_bold.ttf
│   │   ├── GFF-LATIN-EXTRABOLD-1-1-SVN.ttf
│   │   ├── GFF-Latin-CdMedium.ttf
│   │   └── GFF-VN-Black.ttf
│   └── js/
│       └── app.js          # All logic — login, dashboard, search, i18n, version check
└── Screenshots/
    ├── login-en.jpg
    ├── login-ar.jpg
    ├── dashboard-en.jpg
    └── dashboard-ar.jpg
```

### 🛠 Tech Stack
- **Frontend:** HTML5, CSS3 (GFF font system), Vanilla JavaScript
- **Hosting:** GitHub Pages
- **Backend:** Python (Flask) deployed on Vercel
- **Protocol:** Protobuf for secure game data communication
- **Data:** Free Fire Items Library (GitHub Raw)

---

<a name="tiếng-việt"></a>
## 🇻🇳 Tiếng Việt

### Mô tả
**Vexra Wishlist Manager** là công cụ web hiệu suất cao dành cho người chơi Free Fire, giúp quản lý danh sách mong muốn trong game một cách chính xác và dễ dàng. Đăng nhập an toàn qua tệp `.dat` hoặc thông tin thủ công, thao tác hàng loạt theo thời gian thực, và tính năng tìm kiếm người chơi đầy đủ — tất cả được bọc trong hệ thống thiết kế Vexra cao cấp.

### ✨ Tính năng
- **Đăng nhập linh hoạt** — Tải lên tệp `GUEST100067.DAT` hoặc nhập UID + Mật khẩu thủ công. Thông tin đăng nhập được lưu cục bộ để tự động đăng nhập trong các lần truy cập tiếp theo.
- **Quản lý danh sách** — Thêm hoặc xóa từng vật phẩm hoặc hàng loạt (tối đa 100 vật phẩm). Thanh tiến trình theo dõi mọi thao tác theo thời gian thực.
- **Tìm kiếm người chơi** — Tìm bất kỳ người chơi nào theo UID hoặc Biệt danh, duyệt danh sách mong muốn của họ và sao chép vật phẩm trực tiếp vào danh sách của bạn chỉ với một cú nhấp.
- **Liên kết Thư viện vật phẩm** — Truy cập nhanh vào Thư viện vật phẩm Free Fire để duyệt ID và độ hiếm của vật phẩm.
- **Phát hiện vật phẩm lỗi** — Tự động cảnh báo khi phát hiện vật phẩm không hợp lệ/lỗi trong danh sách.
- **Tự động cập nhật phiên bản** — Ứng dụng kiểm tra phiên bản mới nhất từ GitHub mỗi 6 giờ và thông báo nếu có bản phát hành mới — không phá vỡ giao diện.
- **3 Ngôn ngữ** — Hỗ trợ đầy đủ Tiếng Anh, Tiếng Việt (VI) và Tiếng Trung (ZH), có thể chuyển đổi trong ứng dụng qua nút ngôn ngữ hoặc modal Cài đặt.
- **Hệ thống thiết kế Vexra** — Navbar cố định với sọc accent, drawer trượt vào, bộ phông GFF, loader hoạt ảnh, lưới vật phẩm với nền độ hiếm và footer có thương hiệu. Hoàn toàn responsive trên di động, máy tính bảng và máy tính để bàn.

### 📸 Ảnh chụp màn hình
| Màn hình đăng nhập (VI) | Dashboard (VI) |
|---|---|
| ![Login VI](./Screenshots/login-en.jpg) | ![Dashboard VI](./Screenshots/dashboard-en.jpg) |

### � Cấu trúc dự án
```
Vexra_Wishlist/
├── index.html              # HTML chính — không có CSS hoặc JS nội tuyến
├── icon.png                # Biểu tượng ứng dụng / thương hiệu
├── manifest.json           # PWA manifest
├── src/
│   ├── css/
│   │   └── theme.css       # Chủ đề tối đầy đủ — phông GFF, tất cả thành phần
│   ├── fonts/
│   │   └── [Các tệp phông GFF...]
│   └── js/
│       └── app.js          # Toàn bộ logic — đăng nhập, dashboard, tìm kiếm, i18n, kiểm tra phiên bản
└── Screenshots/
```

### 🛠 Công nghệ sử dụng
- **Frontend:** HTML5, CSS3 (hệ thống phông GFF), Vanilla JavaScript
- **Hosting:** GitHub Pages
- **Backend:** Python (Flask) triển khai trên Vercel
- **Giao thức:** Protobuf để xử lý giao tiếp dữ liệu game an toàn
- **Dữ liệu:** Free Fire Items Library (GitHub Raw)

---

<a name="中文"></a>
## 🇨🇳 中文

### 描述
**Vexra Wishlist Manager** 是一款為 Free Fire 玩家設計的高效能網頁工具，可精確輕鬆地管理遊戲內的願望清單。透過 `.dat` 會話文件或手動憑證安全登入、即時批量操作，以及完整的玩家搜尋功能 — 全部包裝在高端 Vexra 設計系統中。

### ✨ 功能
- **靈活登入** — 上傳您的 `GUEST100067.DAT` 文件或手動輸入 UID + 密碼。憑證會本地保存，以便返回時自動登入。
- **願望清單管理** — 單個或批量添加/移除物品（最多 100 個）。即時進度條追蹤每項操作。
- **玩家搜尋** — 通過 UID 或暱稱找到任何玩家，瀏覽他們的願望清單，並一鍵將物品直接複製到您自己的清單中。
- **物品庫連結** — 快速訪問 Free Fire 物品庫，瀏覽物品 ID 和稀有度。
- **損壞物品檢測** — 當在願望清單中發現無效/損壞的物品時自動警告。
- **自動版本更新** — 應用程式每 6 小時從 GitHub 檢查最新版本，如有新版本發布則通知您 — 不破壞界面。
- **3 種語言** — 完整支援英文、越南文 (VI) 和中文 (ZH)，可透過語言按鈕或設定模態框在應用程式內切換。
- **Vexra 設計系統** — 帶有強調色條紋的黏性導航欄、滑入式抽屜、GFF 字體系列、動畫加載器、帶稀有度背景的物品網格和品牌頁腳。在手機、平板和桌面上完全響應式。

### 📸 截圖
| 登入畫面 | 控制台 |
|---|---|
| ![Login ZH](./Screenshots/login-en.jpg) | ![Dashboard ZH](./Screenshots/dashboard-en.jpg) |

### 📁 專案結構
```
Vexra_Wishlist/
├── index.html              # 主 HTML — 無內聯 CSS 或 JS
├── icon.png                # 應用圖示 / 品牌標誌
├── manifest.json           # PWA manifest
├── src/
│   ├── css/
│   │   └── theme.css       # 完整深色主題 — GFF 字體、所有組件
│   ├── fonts/
│   │   └── [GFF 字體文件...]
│   └── js/
│       └── app.js          # 所有邏輯 — 登入、控制台、搜尋、i18n、版本檢查
└── Screenshots/
```

### 🛠 技術棧
- **前端：** HTML5、CSS3（GFF 字體系統）、原生 JavaScript
- **託管：** GitHub Pages
- **後端：** Python (Flask) 部署在 Vercel
- **協議：** Protobuf 用於安全遊戲數據通信
- **數據：** Free Fire 物品庫（GitHub Raw）

---

## Bản quyền

```
Copyright © 2026 Vexra Entertainment. All rights reserved.

The design, user interface, source code, and branding of this project
are the exclusive intellectual property of Vexra Entertainment.
Unauthorized reproduction, distribution, or modification of any part
of this project — in whole or in part — is strictly prohibited without
prior written permission from Vexra Entertainment.

Item data and game assets belong to their respective owners (Garena / Sea Limited).
This project is not affiliated with or endorsed by Garena or Sea Limited.
```
