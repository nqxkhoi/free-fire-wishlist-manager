/* ============================================================
   app.js — Vexra Wishlist Manager
   EN / VI / ZH · GFF fonts · Auto version update
   ============================================================ */

const APP_VERSION = "1.0.1";
const GITHUB_RAW   = "https://raw.githubusercontent.com/KingofGames02/FFWM-app/main";
const API_BASE     = "/api/wishlist/account";
const LIB_RAW      = "https://raw.githubusercontent.com/KingofGames02/Free-Fire-Items-Library/main";
const ICONS_BASE   = LIB_RAW + "/ff-icons";

/* ── Version auto-update (check remote every 6 h) ─────── */
(function () {
  const INTERVAL = 6 * 60 * 60 * 1000;
  const saved    = localStorage.getItem("wm_version");
  const lastTs   = parseInt(localStorage.getItem("wm_version_ts") || "0", 10);
  const now      = Date.now();

  if (saved !== APP_VERSION) {
    localStorage.setItem("wm_version", APP_VERSION);
    localStorage.setItem("wm_version_ts", String(now));
    if ("caches" in window) caches.keys().then(ns => ns.forEach(k => caches.delete(k)));
    if (saved !== null) window.location.reload();
    return;
  }

  if (now - lastTs > INTERVAL) {
    localStorage.setItem("wm_version_ts", String(now));
    fetch(GITHUB_RAW + "/index.html", { cache: "no-store" })
      .then(r => r.text())
      .then(html => {
        const m = html.match(/APP_VERSION\s*=\s*["']([^"']+)["']/);
        if (m && m[1] !== APP_VERSION) {
          showUpdateModal(APP_VERSION, m[1]);
        }
      })
      .catch(() => {});
  }
})();

/* ── Translations ──────────────────────────────────────── */
const tr = {
  en: {
    /* Loader */
    loaderSub: "Wishlist Manager",
    /* Navbar */
    settingsNav: "Settings",
    langChip: "EN",
    /* Drawer */
    drawerTitle: "Vexra",
    navBrowse: "Items Library",
    dSecNav: "Navigation",
    dSecLang: "Language",
    dSecSocial: "Follow Vexra",
    /* Page header */
    pageTitle: "Wishlist Manager",
    /* Login */
    labelDat: ".DAT FILE",
    labelManual: "MANUAL",
    uploadLabel: "UPLOAD GUEST100067.DAT",
    chooseFile: "Choose File",
    noFile: "No file chosen",
    uidLabel: "GUEST UID",
    uidPh: "Enter your Guest UID",
    pwdLabel: "GUEST PASSWORD",
    pwdPh: "Enter your Password",
    btnLoginDat: "LOGIN WITH .DAT FILE",
    btnLoginCred: "LOGIN WITH CREDENTIALS",
    sessionInfo: "Your credentials are saved securely to keep you logged in.",
    /* Dashboard */
    loggedInAs: "LOGGED IN AS",
    itemsLibrary: "ITEMS LIBRARY",
    searchAccount: "SEARCH ACCOUNT",
    itemIdLabel: "ITEM ID (COMMA SEPARATED FOR MULTIPLE)",
    itemIdPh: "Enter item IDs",
    btnAdd: "ADD",
    btnRemove: "REMOVE",
    btnCancelRemove: "CANCEL REMOVE",
    btnConfirmRemove: "CONFIRM REMOVE",
    myWishlist: "MY WISHLIST",
    btnRemoveAll: "REMOVE ALL ITEMS",
    corruptWarn: "Corrupted items detected in your wishlist! Please select and remove them.",
    instRemove: "Select items to remove, then click CONFIRM REMOVE",
    /* Search */
    backBtn: "← BACK",
    searchLabel: "SEARCH BY ID OR NICKNAME",
    searchPh: "Enter Player Name or ID",
    btnSearchNow: "SEARCH NOW",
    playerWishlist: "PLAYER'S WISHLIST",
    btnSelectAdd: "SELECT ITEMS TO ADD",
    btnCancelAdd: "CANCEL ADD",
    btnConfirmAdd: "CONFIRM ADD",
    btnAddAll: "ADD ALL ITEMS",
    instAdd: "Select items to add, then click CONFIRM ADD",
    searchCorruptWarn: "Corrupted items detected in this player's wishlist!",
    /* Search results */
    searchResultsTitle: "Search Results:",
    noAccounts: "No matching accounts found.",
    serverFailSearch: "Server failed to process search.",
    fetchFail: "Could not fetch this account's wishlist.",
    errorSearch: "An error occurred during search.",
    /* Notifications */
    alreadyIn: "Already in Wishlist",
    limitReached: "Wishlist capacity reached.",
    emptyWishlist: "Wishlist is already empty.",
    allAdded: "All items are already in your wishlist.",
    /* Progress */
    adding: "ADDING",
    removing: "REMOVING",
    completed: "COMPLETED",
    addedSuccess: "item(s) added successfully",
    removedSuccess: "item(s) removed",
    /* Loading */
    processing: "PROCESSING...",
    loggingIn: "LOGGING IN...",
    loading: "LOADING...",
    syncing: "SYNCING WISHLIST...",
    /* Modal confirm */
    confirmTitle: "ARE YOU SURE?",
    confirmText: "This will remove ALL items from your wishlist. This action cannot be undone.",
    btnCancel: "CANCEL",
    btnConfirm: "CONFIRM",
    /* Item modal */
    modalItemId: "Item ID",
    modalIconId: "Icon ID",
    modalDesc: "Description",
    addToWishlist: "ADD TO WISHLIST",
    removeItem: "REMOVE ITEM",
    btnClose: "CLOSE",
    noName: "No name available.",
    noDesc: "No description available.",
    /* Update modal */
    updateTitle: "UPDATE AVAILABLE",
    updateText: "A new version of the app is available. Please refresh to get the latest features and fixes.",
    updateCurrent: "Current",
    updateNew: "New",
    btnRefresh: "REFRESH NOW",
    btnLater: "LATER",
    /* Settings */
    settingsTitle: "Settings",
    langSetting: "Language",
    /* Errors */
    noFileErr: "Please select a file first.",
    wrongFileErr: "Please select a .dat file only.",
    noCredsErr: "Please enter required credentials.",
    invalidIds: "Invalid IDs:",
    cannotAdd: "Cannot add",
    itemsLimit: "items. Limit is 100",
    addFailed: "Failed to add item (invalid item).",
    addFailedPartial: "Completed with errors: failed to add",
    addFailedItems: "item(s).",
  },
  vi: {
    loaderSub: "Quản Lý Danh Sách",
    settingsNav: "Cài đặt",
    langChip: "VI",
    drawerTitle: "Vexra",
    navBrowse: "Thư viện vật phẩm",
    dSecNav: "Điều hướng",
    dSecLang: "Ngôn ngữ",
    dSecSocial: "Theo dõi Vexra",
    pageTitle: "Quản Lý Danh Sách",
    labelDat: "TẬP TIN .DAT",
    labelManual: "THỦ CÔNG",
    uploadLabel: "TẢI LÊN GUEST100067.DAT",
    chooseFile: "Chọn tệp",
    noFile: "Chưa chọn tệp",
    uidLabel: "GUEST UID",
    uidPh: "Nhập Guest UID của bạn",
    pwdLabel: "MẬT KHẨU GUEST",
    pwdPh: "Nhập mật khẩu của bạn",
    btnLoginDat: "ĐĂNG NHẬP BẰNG .DAT",
    btnLoginCred: "ĐĂNG NHẬP BẰNG THÔNG TIN",
    sessionInfo: "Thông tin của bạn được lưu an toàn để tự động đăng nhập.",
    loggedInAs: "ĐANG ĐĂNG NHẬP",
    itemsLibrary: "THƯ VIỆN",
    searchAccount: "TÌM TÀI KHOẢN",
    itemIdLabel: "MÃ VẬT PHẨM (NGĂN CÁCH BẰNG DẤU PHẨY)",
    itemIdPh: "Nhập mã vật phẩm",
    btnAdd: "THÊM",
    btnRemove: "XÓA",
    btnCancelRemove: "HỦY XÓA",
    btnConfirmRemove: "XÁC NHẬN XÓA",
    myWishlist: "DANH SÁCH CỦA TÔI",
    btnRemoveAll: "XÓA TẤT CẢ",
    corruptWarn: "Phát hiện vật phẩm lỗi trong danh sách! Vui lòng chọn và xóa chúng.",
    instRemove: "Chọn vật phẩm cần xóa, sau đó nhấn XÁC NHẬN XÓA",
    backBtn: "← QUAY LẠI",
    searchLabel: "TÌM THEO ID HOẶC TÊN",
    searchPh: "Nhập tên hoặc ID người chơi",
    btnSearchNow: "TÌM KIẾM",
    playerWishlist: "DANH SÁCH CỦA NGƯỜI CHƠI",
    btnSelectAdd: "CHỌN VẬT PHẨM ĐỂ THÊM",
    btnCancelAdd: "HỦY THÊM",
    btnConfirmAdd: "XÁC NHẬN THÊM",
    btnAddAll: "THÊM TẤT CẢ",
    instAdd: "Chọn vật phẩm cần thêm, sau đó nhấn XÁC NHẬN THÊM",
    searchCorruptWarn: "Phát hiện vật phẩm lỗi trong danh sách của người chơi này!",
    searchResultsTitle: "Kết quả tìm kiếm:",
    noAccounts: "Không tìm thấy tài khoản phù hợp.",
    serverFailSearch: "Máy chủ không thể xử lý tìm kiếm.",
    fetchFail: "Không thể tải danh sách của tài khoản này.",
    errorSearch: "Đã xảy ra lỗi khi tìm kiếm.",
    alreadyIn: "Đã có trong danh sách",
    limitReached: "Danh sách đã đầy.",
    emptyWishlist: "Danh sách đang trống.",
    allAdded: "Tất cả vật phẩm đã có trong danh sách của bạn.",
    adding: "ĐANG THÊM",
    removing: "ĐANG XÓA",
    completed: "HOÀN THÀNH",
    addedSuccess: "vật phẩm đã thêm thành công",
    removedSuccess: "vật phẩm đã xóa",
    processing: "ĐANG XỬ LÝ...",
    loggingIn: "ĐANG ĐĂNG NHẬP...",
    loading: "ĐANG TẢI...",
    syncing: "ĐANG ĐỒNG BỘ...",
    confirmTitle: "BẠN CÓ CHẮC KHÔNG?",
    confirmText: "Thao tác này sẽ xóa TẤT CẢ vật phẩm trong danh sách của bạn. Không thể hoàn tác.",
    btnCancel: "HỦY",
    btnConfirm: "XÁC NHẬN",
    modalItemId: "Mã vật phẩm",
    modalIconId: "Mã icon",
    modalDesc: "Mô tả",
    addToWishlist: "THÊM VÀO DANH SÁCH",
    removeItem: "XÓA VẬT PHẨM",
    btnClose: "ĐÓNG",
    noName: "Không có tên.",
    noDesc: "Không có mô tả.",
    updateTitle: "CÓ CẬP NHẬT MỚI",
    updateText: "Đã có phiên bản mới. Vui lòng làm mới trang để nhận các tính năng và bản sửa lỗi mới nhất.",
    updateCurrent: "Hiện tại",
    updateNew: "Mới",
    btnRefresh: "LÀM MỚI NGAY",
    btnLater: "ĐỂ SAU",
    settingsTitle: "Cài đặt",
    langSetting: "Ngôn ngữ",
    noFileErr: "Vui lòng chọn tệp trước.",
    wrongFileErr: "Vui lòng chỉ chọn tệp .dat.",
    noCredsErr: "Vui lòng nhập thông tin đăng nhập.",
    invalidIds: "Mã không hợp lệ:",
    cannotAdd: "Không thể thêm",
    itemsLimit: "vật phẩm. Giới hạn là 100",
    addFailed: "Thêm vật phẩm thất bại (vật phẩm không hợp lệ).",
    addFailedPartial: "Hoàn thành với lỗi: không thêm được",
    addFailedItems: "vật phẩm.",
  },
  zh: {
    loaderSub: "願望清單管理器",
    settingsNav: "設定",
    langChip: "ZH",
    drawerTitle: "Vexra",
    navBrowse: "物品庫",
    dSecNav: "導航",
    dSecLang: "語言",
    dSecSocial: "關注 Vexra",
    pageTitle: "願望清單管理器",
    labelDat: ".DAT 檔案",
    labelManual: "手動",
    uploadLabel: "上傳 GUEST100067.DAT",
    chooseFile: "選擇檔案",
    noFile: "未選擇檔案",
    uidLabel: "訪客 UID",
    uidPh: "輸入您的訪客 UID",
    pwdLabel: "訪客密碼",
    pwdPh: "輸入您的密碼",
    btnLoginDat: "使用 .DAT 登入",
    btnLoginCred: "使用憑證登入",
    sessionInfo: "您的資訊已安全保存以自動登入。",
    loggedInAs: "已登入",
    itemsLibrary: "物品庫",
    searchAccount: "搜尋帳號",
    itemIdLabel: "物品 ID（多個用逗號分隔）",
    itemIdPh: "輸入物品 ID",
    btnAdd: "新增",
    btnRemove: "移除",
    btnCancelRemove: "取消移除",
    btnConfirmRemove: "確認移除",
    myWishlist: "我的願望清單",
    btnRemoveAll: "移除所有物品",
    corruptWarn: "偵測到您的願望清單中有損壞的物品！請選擇並移除它們。",
    instRemove: "選擇要移除的物品，然後點擊確認移除",
    backBtn: "← 返回",
    searchLabel: "按 ID 或暱稱搜尋",
    searchPh: "輸入玩家名稱或 ID",
    btnSearchNow: "立即搜尋",
    playerWishlist: "玩家的願望清單",
    btnSelectAdd: "選擇物品加入",
    btnCancelAdd: "取消新增",
    btnConfirmAdd: "確認新增",
    btnAddAll: "全部加入",
    instAdd: "選擇要加入的物品，然後點擊確認新增",
    searchCorruptWarn: "偵測到此玩家願望清單中有損壞的物品！",
    searchResultsTitle: "搜尋結果：",
    noAccounts: "未找到匹配的帳號。",
    serverFailSearch: "伺服器無法處理搜尋。",
    fetchFail: "無法獲取此帳號的願望清單。",
    errorSearch: "搜尋時發生錯誤。",
    alreadyIn: "已在願望清單中",
    limitReached: "願望清單已達上限。",
    emptyWishlist: "願望清單已為空。",
    allAdded: "所有物品已在您的清單中。",
    adding: "新增中",
    removing: "移除中",
    completed: "完成",
    addedSuccess: "個物品新增成功",
    removedSuccess: "個物品已移除",
    processing: "處理中...",
    loggingIn: "登入中...",
    loading: "載入中...",
    syncing: "同步中...",
    confirmTitle: "您確定嗎？",
    confirmText: "這將移除您願望清單中的所有物品。此操作無法撤銷。",
    btnCancel: "取消",
    btnConfirm: "確認",
    modalItemId: "物品 ID",
    modalIconId: "圖示 ID",
    modalDesc: "描述",
    addToWishlist: "加入願望清單",
    removeItem: "移除物品",
    btnClose: "關閉",
    noName: "沒有名稱。",
    noDesc: "沒有描述。",
    updateTitle: "有可用更新",
    updateText: "有新版本可用。請重新整理頁面以獲取最新功能和修復。",
    updateCurrent: "目前",
    updateNew: "新版",
    btnRefresh: "立即重新整理",
    btnLater: "稍後",
    settingsTitle: "設定",
    langSetting: "語言",
    noFileErr: "請先選擇檔案。",
    wrongFileErr: "請只選擇 .dat 檔案。",
    noCredsErr: "請輸入所需憑證。",
    invalidIds: "無效的 ID：",
    cannotAdd: "無法新增",
    itemsLimit: "個物品。上限為 100",
    addFailed: "新增物品失敗（無效物品）。",
    addFailedPartial: "完成但有錯誤：無法新增",
    addFailedItems: "個物品。",
  }
};

const rarityMap = {
  "White": "COMMON", "Green": "UNCOMMON", "Blue": "RARE",
  "Purple": "EPIC", "Orange": "MYTHIC", "Red": "ARTIFACT",
  "Purple_Plus": "EPIC++", "Orange_Plus": "MYTHIC++",
  "NONE": "NONE", "Card": "Card"
};

/* ── State ─────────────────────────────────────────────── */
let lang            = "en";
let libraryData     = {};
let collectionBanners = [];
let myWishlistIds   = [];
let updatedIconsSet = new Set();
let isRemoveMode    = false;
let selectedRemove  = new Set();
let isSearchAddMode = false;
let selectedAdd     = new Set();
let currentSearchedUid = null;
let isActionRunning = false;
let loadingTimer    = null;

/* ── Helpers ────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const _t = key => (tr[lang] || tr.en)[key] || key;

function detectLang() {
  const p = new URLSearchParams(window.location.search);
  const l = p.get("lang");
  if (l === "vi" || l === "zh") lang = l;
  else lang = "en";
}

function syncLangBtns() {
  ["En","Vi","Zh"].forEach(l => {
    const lower = l.toLowerCase();
    const dBtn = $("dLang" + l);
    const sBtn = $("smLang" + l);
    if (dBtn) dBtn.classList.toggle("active", lang === lower);
    if (sBtn) sBtn.classList.toggle("on",     lang === lower);
  });
  const chip = $("hdrLangChip");
  if (chip) chip.textContent = _t("langChip");
}

function setLang(l) {
  if (isActionRunning) return;
  const p = new URLSearchParams(window.location.search);
  p.set("lang", l);
  window.location.search = p.toString();
}

/* ── Apply all UI translations ──────────────────────────── */
function applyUI() {
  const t = tr[lang] || tr.en;

  /* Loader */
  const lSub = $("loaderSub"); if (lSub) lSub.textContent = t.loaderSub;

  /* Navbar */
  const settNav = $("txtSettingsNav"); if (settNav) settNav.textContent = t.settingsNav;
  const navSub  = $("loaderSubNav");  if (navSub)  navSub.textContent  = t.pageTitle;

  /* Drawer */
  const dTitle = $("drawerTitle"); if (dTitle) dTitle.textContent = t.drawerTitle;
  const dBrowse = $("dNavBrowseTxt"); if (dBrowse) dBrowse.textContent = t.navBrowse;
  const dSecNav = $("dSecNav"); if (dSecNav) dSecNav.textContent = t.dSecNav;
  const dSecLang = $("dSecLang"); if (dSecLang) dSecLang.textContent = t.dSecLang;
  const dSecSocial = $("dSecSocial"); if (dSecSocial) dSecSocial.textContent = t.dSecSocial;

  /* Page header */
  const pTitle = $("pageTitle"); if (pTitle) pTitle.textContent = t.pageTitle;
  document.title = "Vexra — " + t.pageTitle;

  /* Login */
  const lblDat    = $("labelDat");    if (lblDat)    lblDat.textContent    = t.labelDat;
  const lblManual = $("labelManual"); if (lblManual) lblManual.textContent = t.labelManual;
  const uploadLbl = $("uploadLabel"); if (uploadLbl) uploadLbl.textContent = t.uploadLabel;
  const choosBtn  = $("btnChooseFile"); if (choosBtn) choosBtn.textContent = t.chooseFile;
  const fileLabel = $("fileLabel");   if (fileLabel && fileLabel.textContent === tr.en.noFile) fileLabel.textContent = t.noFile;
  const uidLbl    = $("uidLabel");    if (uidLbl)    uidLbl.textContent    = t.uidLabel;
  const uidInput  = $("manualUid");   if (uidInput)  uidInput.placeholder  = t.uidPh;
  const pwdLbl    = $("pwdLabel");    if (pwdLbl)    pwdLbl.textContent    = t.pwdLabel;
  const pwdInput  = $("manualPassword"); if (pwdInput) pwdInput.placeholder = t.pwdPh;
  const btnDat    = $("btnLoginDat");  if (btnDat)   btnDat.textContent    = t.btnLoginDat;
  const btnCred   = $("btnLoginCred"); if (btnCred)  btnCred.textContent   = t.btnLoginCred;
  const sesInfo   = $("sessionInfo"); if (sesInfo)   sesInfo.textContent   = t.sessionInfo;

  /* Dashboard */
  const loggedAs  = $("loggedInAsLabel"); if (loggedAs) loggedAs.textContent = t.loggedInAs;
  const libBtn    = $("btnItemsLibrary"); if (libBtn)  libBtn.querySelector("span") && (libBtn.querySelector("span").textContent = t.itemsLibrary);
  const srchBtn   = $("btnSearchAccount"); if (srchBtn) srchBtn.querySelector("span") && (srchBtn.querySelector("span").textContent = t.searchAccount);
  const idLbl     = $("itemIdLabel"); if (idLbl)  idLbl.textContent   = t.itemIdLabel;
  const idInput   = $("targetIds");   if (idInput) idInput.placeholder = t.itemIdPh;
  const addBtn    = $("btnAddMain");  if (addBtn)  addBtn.querySelector("span") && (addBtn.querySelector("span").textContent = t.btnAdd);
  const dashTitle = $("dashboardTitle"); if (dashTitle) dashTitle.textContent = t.myWishlist;
  const removeAllBtn = $("btnRemoveAll"); if (removeAllBtn) removeAllBtn.querySelector("span") && (removeAllBtn.querySelector("span").textContent = t.btnRemoveAll);

  /* Search */
  const backBtnEl  = $("backBtn");         if (backBtnEl)  backBtnEl.textContent    = t.backBtn;
  const searchLbl  = $("searchLabel");     if (searchLbl)  searchLbl.textContent    = t.searchLabel;
  const searchInp  = $("searchInput");     if (searchInp)  searchInp.placeholder    = t.searchPh;
  const searchNow  = $("btnSearchNow");    if (searchNow)  searchNow.querySelector("span") && (searchNow.querySelector("span").textContent = t.btnSearchNow);
  const addAllBtn  = $("btnAddAllSearch"); if (addAllBtn)  addAllBtn.querySelector("span") && (addAllBtn.querySelector("span").textContent = t.btnAddAll);

  /* Settings */
  const smTitle   = $("settingsTitle"); if (smTitle)  smTitle.textContent  = t.settingsTitle;
  const langSett  = $("txtLangSetting"); if (langSett) langSett.textContent = t.langSetting;

  /* Update UI buttons that depend on mode state */
  updateRemoveBtnText();
  updateSearchAddBtnText();

  syncLangBtns();
}

/* ── Loader ─────────────────────────────────────────────── */
function showLoading(on, msgKey = "processing") {
  const bar = $("loaderEl");
  if (!bar) return;
  if (on) {
    clearTimeout(loadingTimer);
    const sub = $("loaderSub"); if (sub) sub.textContent = _t(msgKey);
    bar.style.opacity = "1";
    bar.style.pointerEvents = "all";
  } else {
    bar.style.opacity = "0";
    bar.style.pointerEvents = "none";
  }
}

/* Intro progress bar */
(function () {
  const bar = $("introBar");
  const pct = $("introPct");
  if (!bar || !pct) return;

  let p = 0, tick = 0, dataReady = false;
  const iv = setInterval(() => {
    tick++;
    p = tick <= 50 ? (tick / 50) * 80
      : tick <= 75 ? 80 + ((tick - 50) / 25) * 19
      : 99;
    bar.style.width  = p.toFixed(1) + "%";
    pct.textContent  = Math.round(p) + "%";
    if (tick >= 75 && dataReady) _done();
  }, 40);

  function _done() {
    clearInterval(iv);
    bar.style.transition = "width .25s ease";
    bar.style.width  = "100%";
    pct.textContent  = "100%";
    setTimeout(() => {
      const el = $("loaderEl");
      if (el) { el.style.opacity = "0"; el.style.pointerEvents = "none"; }
    }, 320);
  }

  window._loaderFinish = () => { dataReady = true; if (tick >= 75) _done(); };
})();

/* ── Notification system ────────────────────────────────── */
function showNotif(msg, type = "error", context = "dashboard") {
  const ids = {
    dashboard: "dashNotif",
    login:     "loginNotif",
    search:    "searchNotif"
  };
  const boxId = ids[context] || "dashNotif";
  const box   = $(boxId);
  if (!box) return;

  box.className = "notif-box " + type;
  const iconMap = {
    success: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2.5" style="width:18px;height:18px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    error:   `<svg viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2.5" style="width:18px;height:18px;"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    warning: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2.5" style="width:18px;height:18px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
  };
  box.innerHTML = `${iconMap[type] || iconMap.error}<span class="notif-text">${msg}</span>`;
  box.classList.remove("hidden");

  clearTimeout(box._timer);
  box._timer = setTimeout(() => box.classList.add("hidden"), 5000);
}

/* ── Instruction box ────────────────────────────────────── */
function showInst(boxId, text) {
  const el = $(boxId); if (!el) return;
  const span = el.querySelector(".inst-text"); if (span) span.textContent = text;
  el.classList.remove("hidden");
}
function hideInst(boxId) { const el = $(boxId); if (el) el.classList.add("hidden"); }

/* ── Drawers & overlays ─────────────────────────────────── */
function openDrawer()  { $("drawer").classList.add("open"); $("overlay").classList.add("open"); }
function closeDrawer() { $("drawer").classList.remove("open"); $("overlay").classList.remove("open"); }

/* ── Modals ─────────────────────────────────────────────── */
function openModal(id)  {
  const el = $(id); if (!el) return;
  el.classList.add("open");
}
function closeModal(id) {
  const el = $(id); if (!el) return;
  el.classList.remove("open");
}

/* ── Update modal ───────────────────────────────────────── */
function showUpdateModal(current, next) {
  const t = tr[lang] || tr.en;
  const el = $("updateModal"); if (!el) return;
  const titleEl = $("updateTitle"); if (titleEl) titleEl.textContent = t.updateTitle;
  const textEl  = $("updateText");  if (textEl)  textEl.textContent  = t.updateText;
  const oldEl   = $("updateOld");   if (oldEl)   oldEl.textContent   = current;
  const newEl   = $("updateNew");   if (newEl)   newEl.textContent   = next;
  const refreshBtn = $("btnRefresh"); if (refreshBtn) refreshBtn.querySelector("span") && (refreshBtn.querySelector("span").textContent = t.btnRefresh);
  const laterBtn   = $("btnLater");   if (laterBtn)   laterBtn.querySelector("span")   && (laterBtn.querySelector("span").textContent   = t.btnLater);
  const badge = $("navVersionBadge"); if (badge) badge.classList.add("has-update");
  openModal("updateModal");
}

/* ── Icon fallback chain ────────────────────────────────── */
function setupIcon(imgEl, id) {
  const item   = libraryData[id] || {};
  const ids    = String(id);
  const iconS  = item.Icon ? String(item.Icon) : null;
  const urls   = [];
  if (updatedIconsSet.has(ids))   urls.push(`${ICONS_BASE}/${ids}_2.png`);
  urls.push(`${ICONS_BASE}/${ids}.png`);
  if (iconS) {
    if (updatedIconsSet.has(iconS)) urls.push(`${ICONS_BASE}/${iconS}_2.png`);
    urls.push(`${ICONS_BASE}/${iconS}.png`);
  }
  urls.push(`${LIB_RAW}/RareBG_Quality/UNKNOWN.png`);

  let idx = 0;
  imgEl.onerror = function () {
    idx++;
    if (idx < urls.length) this.src = urls[idx];
    else { this.onerror = null; this.style.opacity = "1"; removeShimmer(this); }
  };
  imgEl.onload = function () { this.style.opacity = "1"; removeShimmer(this); checkTilt(this); };
  imgEl.src = urls[0];
}

function removeShimmer(imgEl) {
  const p = imgEl.closest(".is-loading");
  if (p) p.classList.remove("is-loading");
}

function checkTilt(imgEl) {
  if (imgEl.naturalWidth === 300 && imgEl.naturalHeight === 90) imgEl.classList.add("tilt");
}

function getRarityBg(rare) {
  const m = rarityMap[rare] || rare;
  if (!m || m === "NONE" || m === "Card") return `${LIB_RAW}/RareBG_Quality/COMMON.png`;
  const valid = ["ARTIFACT","MYTHIC++","MYTHIC","EPIC++","EPIC","RARE","UNCOMMON","COMMON"];
  if (!valid.includes(m)) return `${LIB_RAW}/RareBG_Quality/UNKNOWN.png`;
  return `${LIB_RAW}/RareBG_Quality/${m}.png`;
}

/* ── Section switching ──────────────────────────────────── */
function showSection(id) {
  ["loginSection","dashSection","searchSection"].forEach(s => {
    const el = $(s);
    if (el) el.classList.toggle("hidden", s !== id);
  });
  /* Hide lang toggle on dashboard / search */
  const lBtn = $("headerLangBtn");
  if (lBtn) lBtn.classList.toggle("hidden", id !== "loginSection");
}

/* ── Login ──────────────────────────────────────────────── */
function toggleLoginMode() {
  const isManual = $("modeSwitch").checked;
  $("formDat").classList.toggle("hidden", isManual);
  $("formManual").classList.toggle("hidden", !isManual);
  $("labelDat").classList.toggle("active", !isManual);
  $("labelManual").classList.toggle("active", isManual);
}

function updateFileLabel() {
  const f = $("guestFile").files[0];
  $("fileLabel").textContent = f ? f.name : _t("noFile");
}

function logout() {
  sessionStorage.clear();
  ["ff_auto_type","ff_auto_uid","ff_auto_pwd","ff_auto_dat"].forEach(k => localStorage.removeItem(k));
  location.reload();
}

function handleSessionExpiry() { location.reload(); }

async function handleLogin(type) {
  showLoading(true, "processing");
  let body, headers = {};
  let datContent = null, uidSave = null, pwdSave = null;

  if (type === "file") {
    const file = $("guestFile").files[0];
    if (!file) { showLoading(false); showNotif(_t("noFileErr"), "warning", "login"); return; }
    if (!file.name.toLowerCase().endsWith(".dat")) {
      showLoading(false);
      $("guestFile").value = "";
      $("fileLabel").textContent = _t("noFile");
      showNotif(_t("wrongFileErr"), "warning", "login");
      return;
    }
    datContent = await file.text();
    body = new FormData(); body.append("file", file);
  } else {
    const uid = $("manualUid").value.trim();
    const pwd = $("manualPassword").value;
    if (!uid || !pwd) { showLoading(false); showNotif(_t("noCredsErr"), "warning", "login"); return; }
    uidSave = uid; pwdSave = pwd;
    body = JSON.stringify({ uid, password: pwd });
    headers = { "Content-Type": "application/json" };
  }

  try {
    const res  = await fetch(`${API_BASE}/login`, { method: "POST", headers, body });
    const data = await res.json();
    if (res.ok) {
      Object.keys(data).forEach(k => sessionStorage.setItem(k, data[k]));
      localStorage.setItem("ff_auto_type", type);
      if (type === "file") localStorage.setItem("ff_auto_dat", datContent);
      else { localStorage.setItem("ff_auto_uid", uidSave); localStorage.setItem("ff_auto_pwd", pwdSave); }
      showSection("dashSection");
      updateUserInfo();
      await fetchWishlist();
    } else {
      showNotif("Error: " + (data.error || "Login failed"), "error", "login");
    }
  } catch { showNotif("Server connection failed.", "error", "login"); }
  showLoading(false);
}

async function performAutoLogin() {
  const type = localStorage.getItem("ff_auto_type");
  if (!type) return false;
  let body, headers = {};
  if (type === "file") {
    const dat = localStorage.getItem("ff_auto_dat");
    if (!dat) return false;
    const file = new File([dat], "GUEST100067.DAT", { type: "text/plain" });
    body = new FormData(); body.append("file", file);
  } else {
    const uid = localStorage.getItem("ff_auto_uid");
    const pwd = localStorage.getItem("ff_auto_pwd");
    if (!uid || !pwd) return false;
    body = JSON.stringify({ uid, password: pwd });
    headers = { "Content-Type": "application/json" };
  }
  showLoading(true, "loggingIn");
  try {
    const res  = await fetch(`${API_BASE}/login`, { method: "POST", headers, body });
    const data = await res.json();
    if (res.ok) {
      Object.keys(data).forEach(k => sessionStorage.setItem(k, data[k]));
      showSection("dashSection");
      updateUserInfo();
      await fetchWishlist();
      showLoading(false);
      return true;
    }
    logout(); return false;
  } catch { return false; }
}

/* ── Dashboard ──────────────────────────────────────────── */
function updateUserInfo() {
  const uidEl = $("displayUid"); if (uidEl) uidEl.textContent = sessionStorage.getItem("uid") || "";
  const regEl = $("displayRegion"); if (regEl) regEl.textContent = sessionStorage.getItem("lockRegion") || "ME";
}

function copyUid() {
  navigator.clipboard.writeText(sessionStorage.getItem("uid") || "").then(() => {
    const btn = $("btnCopyUid"); if (!btn) return;
    const orig = btn.innerHTML;
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:18px;height:18px;"><polyline points="20 6 9 17 4 12"/></svg>`;
    setTimeout(() => btn.innerHTML = orig, 2000);
  });
}

async function fetchWishlist() {
  try {
    const res = await fetch(`${API_BASE}/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": sessionStorage.getItem("token"),
        "Server-Url":    sessionStorage.getItem("server_url")
      },
      body: JSON.stringify({ account_id: sessionStorage.getItem("uid") })
    });
    if (res.status === 401 || res.status === 403) return handleSessionExpiry();
    const data = await res.json();
    if (res.ok) {
      myWishlistIds = (data.items || []).map(i => i.id);
      updateWishlistStats();
      renderGrid(myWishlistIds, "wishlistGrid", "dashboard");
      const banner = $("corruptedBanner");
      if (banner) banner.classList.toggle("hidden", !(data.has_corrupted_item || data.has_corrupted_items));
    }
  } catch { /* silent */ }
}

function updateWishlistStats() {
  const count = myWishlistIds.length;
  const curr  = $("countCurrent"); if (curr) curr.textContent = count;
  const max   = $("countMax");     if (max)  max.textContent  = "/100";
  const fill  = $("progressFill");
  if (fill) {
    fill.style.width = `${(count / 100) * 100}%`;
    fill.style.background = "linear-gradient(to right, var(--accent), var(--green))";
    fill.classList.toggle("full", count >= 100);
  }
}

/* ── Item grid rendering ────────────────────────────────── */
function renderGrid(ids, containerId, context) {
  const grid = $(containerId); if (!grid) return;
  grid.innerHTML = "";
  ids.forEach(id => {
    const item   = libraryData[id] || {};
    const mapped = rarityMap[item.Rare] || item.Rare;
    const rare   = (!mapped || mapped === "NONE" || mapped === "Card") ? "COMMON" : mapped.toUpperCase();
    const bgUrl  = getRarityBg(item.Rare);

    const card = document.createElement("div");
    card.className = "item-card";
    card.setAttribute("data-id", id);
    if (context === "dashboard" && isRemoveMode  && selectedRemove.has(id)) card.classList.add("sel-remove");
    if (context === "search"    && isSearchAddMode && selectedAdd.has(id))  card.classList.add("sel-add");
    card.addEventListener("click", function () { handleCardClick(id, context, this); });

    const imgWrap = document.createElement("div");
    imgWrap.className = "item-img-wrap is-loading";
    imgWrap.style.backgroundImage = `url('${bgUrl}')`;

    const img = document.createElement("img");
    img.className = "item-img";
    img.loading   = "lazy";
    img.style.opacity = "0";
    img.style.transition = "opacity .3s";
    img.alt = "";
    setupIcon(img, id);

    const label = document.createElement("div");
    label.className = "item-label";
    label.innerHTML = `<span>${id}</span>`;

    imgWrap.appendChild(img);
    card.appendChild(imgWrap);
    card.appendChild(label);
    grid.appendChild(card);
  });
}

function handleCardClick(id, context, el) {
  if (isActionRunning) return;
  if (context === "dashboard") {
    if (isRemoveMode) {
      if (selectedRemove.has(id)) { selectedRemove.delete(id); el.classList.remove("sel-remove"); }
      else                        { selectedRemove.add(id);    el.classList.add("sel-remove");    }
      updateRemoveBtnText();
    } else { showItemDetail(id, "dashboard"); }
  } else if (context === "search") {
    if (isSearchAddMode) {
      if (myWishlistIds.includes(parseInt(id))) { showNotif(_t("alreadyIn"), "warning", "search"); return; }
      if (selectedAdd.has(id)) { selectedAdd.delete(id); el.classList.remove("sel-add"); }
      else {
        if (myWishlistIds.length + selectedAdd.size >= 100) { showNotif(_t("limitReached"), "error", "search"); return; }
        selectedAdd.add(id); el.classList.add("sel-add");
      }
      updateSearchAddBtnText();
    } else { showItemDetail(id, "search"); }
  }
}

/* ── Remove mode ────────────────────────────────────────── */
function updateRemoveBtnText() {
  const btn = $("btnRemoveMain"); if (!btn) return;
  const span = btn.querySelector("span"); if (!span) return;
  if (isRemoveMode) {
    span.textContent = selectedRemove.size === 0
      ? _t("btnCancelRemove")
      : `${_t("btnConfirmRemove")} (${selectedRemove.size})`;
    showInst("dashInst", _t("instRemove"));
  } else {
    span.textContent = _t("btnRemove");
    hideInst("dashInst");
  }
}

function toggleRemoveMode() {
  if (isActionRunning) return;
  if (!isRemoveMode) {
    isRemoveMode = true; selectedRemove.clear(); updateRemoveBtnText();
  } else {
    if (selectedRemove.size > 0) {
      const ids = Array.from(selectedRemove);
      executeModify("remove", ids, "dashboard").then(() => {
        isRemoveMode = false; selectedRemove.clear(); updateRemoveBtnText();
      });
    } else {
      isRemoveMode = false; selectedRemove.clear(); updateRemoveBtnText();
      document.querySelectorAll("#wishlistGrid .sel-remove").forEach(el => el.classList.remove("sel-remove"));
    }
  }
}

/* ── Add from input ─────────────────────────────────────── */
async function processAddInput() {
  if (isActionRunning) return;
  const val = $("targetIds").value;
  const ids = val.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  if (!ids.length) return;

  const invalid = ids.filter(id => !libraryData[id]);
  if (invalid.length) { showNotif(`${_t("invalidIds")} ${invalid.join(", ")}`, "error", "dashboard"); return; }
  if (myWishlistIds.length + ids.length > 100) {
    showNotif(`${_t("cannotAdd")} ${ids.length} ${_t("itemsLimit")}`, "error", "dashboard");
    return;
  }
  await executeModify("add", ids, "dashboard");
  $("targetIds").value = "";
}

/* ── Clear all ──────────────────────────────────────────── */
function promptClearAll() {
  if (isActionRunning) return;
  if (myWishlistIds.length === 0) { showNotif(_t("emptyWishlist"), "warning", "dashboard"); return; }
  const t = $("confirmTitle");   if (t) t.textContent = _t("confirmTitle");
  const p = $("confirmText");    if (p) p.textContent = _t("confirmText");
  const bc = $("btnConfirmClear"); if (bc) bc.querySelector("span") && (bc.querySelector("span").textContent = _t("btnConfirm"));
  const cc = $("btnCancelClear");  if (cc) cc.querySelector("span") && (cc.querySelector("span").textContent = _t("btnCancel"));
  openModal("confirmModal");
}

function executeClearAll() {
  closeModal("confirmModal");
  executeModify("remove", myWishlistIds.slice(), "dashboard", true);
}

/* ── Core modify wishlist ───────────────────────────────── */
async function executeModify(action, ids, context, instant = false) {
  if (!ids.length || isActionRunning) return;
  isActionRunning = true;
  let successCount = 0, failCount = 0;

  try {
    const isBulk = ids.length > 1;
    const gridId = context === "dashboard" ? "wishlistGrid" : "searchedGrid";
    const grid   = $(gridId);

    /* Instant parallel remove (clear all) */
    if (instant && action === "remove") {
      showLoading(true, "loading");
      await Promise.all(ids.map(id =>
        fetch(`${API_BASE}/wishlist/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": sessionStorage.getItem("token"),
            "Server-Url":    sessionStorage.getItem("server_url")
          },
          body: JSON.stringify({ add_ids:[], del_ids:[id], add_src:[], del_src:["WishList"] })
        }).then(r => {
          if (r.status === 401 || r.status === 403) handleSessionExpiry();
          const el = grid?.querySelector(`[data-id="${id}"]`); if (el) el.remove();
        }).catch(() => {})
      ));
      myWishlistIds = myWishlistIds.filter(id => !ids.includes(id));
      showLoading(true, "syncing");
      await fetchWishlist();
      return;
    }

    /* Bulk — show progress in title */
    if (isBulk) showContextProgress(true, context, action, 0, ids.length);
    else         showLoading(true, context === "search" ? "loading" : "processing");

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      if (isBulk) updateContextProgress(context, action, i + 1, ids.length);
      try {
        const res = await fetch(`${API_BASE}/wishlist/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": sessionStorage.getItem("token"),
            "Server-Url":    sessionStorage.getItem("server_url")
          },
          body: JSON.stringify({
            add_ids: action === "add"    ? [id] : [],
            del_ids: action === "remove" ? [id] : [],
            add_src: action === "add"    ? ["WishList"] : [],
            del_src: action === "remove" ? ["WishList"] : []
          })
        });
        if (res.status === 401 || res.status === 403) return handleSessionExpiry();
        if (res.ok) {
          successCount++;
          if (action === "add") {
            if (!myWishlistIds.includes(id)) myWishlistIds.push(id);
            if (context === "dashboard") {
              const newCard = buildItemCard(id, "dashboard");
              if (grid) grid.appendChild(newCard);
            }
          } else {
            if (context === "dashboard") {
              const el = grid?.querySelector(`[data-id="${id}"]`); if (el) el.remove();
              myWishlistIds = myWishlistIds.filter(x => x !== id);
            }
          }
          if (context === "dashboard" && !isBulk) updateWishlistStats();
        } else { failCount++; }
      } catch { failCount++; }

      if (isBulk && i < ids.length - 1)
        await new Promise(r => setTimeout(r, action === "add" ? 300 : 10));
    }

    if (isBulk) {
      showContextProgressDone(context, action, successCount, failCount);
      await new Promise(r => setTimeout(r, 1500));
      showContextProgress(false, context);
    }

    showLoading(true, "syncing");
    await fetchWishlist();

    if (action === "add" && failCount > 0) {
      const msg = isBulk
        ? `${_t("addFailedPartial")} ${failCount} ${_t("addFailedItems")}`
        : _t("addFailed");
      showNotif(msg, "warning", context);
    }
  } finally {
    showLoading(false);
    isActionRunning = false;
  }
}

/* Build a single card element (for live append) */
function buildItemCard(id, context) {
  const item   = libraryData[id] || {};
  const bgUrl  = getRarityBg(item.Rare);
  const card   = document.createElement("div");
  card.className = "item-card";
  card.setAttribute("data-id", id);
  card.addEventListener("click", function () { handleCardClick(id, context, this); });

  const imgWrap = document.createElement("div");
  imgWrap.className = "item-img-wrap is-loading";
  imgWrap.style.backgroundImage = `url('${bgUrl}')`;

  const img = document.createElement("img");
  img.className = "item-img"; img.loading = "lazy";
  img.style.opacity = "0"; img.style.transition = "opacity .3s"; img.alt = "";
  setupIcon(img, id);

  const label = document.createElement("div");
  label.className = "item-label";
  label.innerHTML = `<span>${id}</span>`;

  imgWrap.appendChild(img); card.appendChild(imgWrap); card.appendChild(label);
  return card;
}

/* ── Bulk progress indicators ───────────────────────────── */
function showContextProgress(on, context, action, current, total) {
  if (context === "dashboard") {
    const title = $("dashboardTitle");
    const fill  = $("progressFill");
    if (!on) {
      if (title) { title.textContent = _t("myWishlist"); title.style.color = ""; }
      updateWishlistStats(); return;
    }
    if (fill) { fill.classList.remove("full"); fill.style.background = action === "add" ? "var(--green)" : "var(--red)"; fill.style.width = "0%"; }
    if (title) { title.textContent = action === "add" ? _t("adding") : _t("removing"); title.style.color = "#fff"; }
    const curr = $("countCurrent"); if (curr) curr.textContent = current;
    const max  = $("countMax");     if (max)  max.textContent  = " / " + total;
  } else if (context === "search") {
    const box = $("searchBulkBox");
    if (box) box.classList.toggle("hidden", !on);
  }
}

function updateContextProgress(context, action, current, total) {
  if (context === "dashboard") {
    const curr = $("countCurrent"); if (curr) curr.textContent = current;
    const fill = $("progressFill"); if (fill) fill.style.width = `${(current / total) * 100}%`;
  } else if (context === "search") {
    const status = $("bulkStatus"); if (status) status.textContent = `${action === "add" ? _t("adding") : _t("removing")} ${current} / ${total}...`;
    const fill   = $("bulkFill");   if (fill)   fill.style.width = `${(current / total) * 100}%`;
    const count  = $("bulkCount");  if (count)  { count.textContent = `${current} / ${total}`; count.style.color = action === "add" ? "var(--green)" : "var(--red)"; }
    if (fill)  fill.style.background = action === "add" ? "var(--green)" : "var(--red)";
  }
}

function showContextProgressDone(context, action, ok, fail) {
  const color = action === "add" ? "var(--green)" : "var(--red)";
  const text  = fail === 0
    ? `${ok} ${action === "add" ? _t("addedSuccess") : _t("removedSuccess")}`
    : `${_t("adding")}: ${ok} | ✕: ${fail}`;
  if (context === "dashboard") {
    const title = $("dashboardTitle"); if (title) { title.textContent = text; title.style.color = color; }
    const curr  = $("countCurrent");   if (curr)  curr.textContent = ok;
  } else if (context === "search") {
    const status = $("bulkStatus"); if (status) status.innerHTML = `<span style="color:${color};">${text}</span>`;
    const label  = $("bulkLabel");  if (label)  label.textContent = _t("completed");
  }
}

/* ── Search ─────────────────────────────────────────────── */
function showSearchSection() {
  if (isActionRunning) return;
  showSection("searchSection");
  $("searchResults").innerHTML = "";
  $("searchedUserSection").classList.add("hidden");
}

function backToDashboard() {
  if (isActionRunning) return;
  isRemoveMode = false; selectedRemove.clear(); updateRemoveBtnText();
  renderGrid(myWishlistIds, "wishlistGrid", "dashboard");
  showSection("dashSection");
}

async function performSearch() {
  if (isActionRunning) return;
  const q = $("searchInput").value.trim();
  if (!q) return;

  showLoading(true, "loading");
  $("searchResults").innerHTML = "";
  $("searchedUserSection").classList.add("hidden");

  if (!isNaN(q)) {
    try {
      const pRes = await fetch(`${API_BASE}/player`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": sessionStorage.getItem("token"),
          "Server-Url":    sessionStorage.getItem("server_url")
        },
        body: JSON.stringify({ account_id: q })
      });
      const pData = await pRes.json();
      let nick = "Unknown", region = "Unknown";
      if (pData.status === "success" && pData.data) {
        const nm = pData.data.match(/nickname:\s*"([^"]+)"/);
        const rm = pData.data.match(/region:\s*"([^"]+)"/);
        if (nm) nick   = nm[1].replace(/\\t|\\n|\t|\n/g, "").trim();
        if (rm) region = rm[1].trim();
      }
      await fetchExternalWishlist(q, nick, region);
    } catch { await fetchExternalWishlist(q, "Unknown", "Unknown"); }
  } else {
    try {
      const res  = await fetch(`${API_BASE}/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": sessionStorage.getItem("token"),
          "Server-Url":    sessionStorage.getItem("server_url")
        },
        body: JSON.stringify({ keyword: q })
      });
      const data = await res.json();
      if (data.status === "success" && data.data) {
        const container = $("searchResults");
        container.innerHTML = `<p style="color:var(--text-3);font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;">${_t("searchResultsTitle")}</p>`;
        const re = /accountid:\s*(\d+)[\s\S]*?nickname:\s*"([^"]+)"(?:[\s\S]*?region:\s*"([^"]+)")?/gi;
        let m, found = false;
        while ((m = re.exec(data.data)) !== null) {
          found = true;
          const [, accId, nick, region = "Unknown"] = m;
          const cleanNick = nick.replace(/\\t|\\n|\t|\n/g, "").trim();
          const div = document.createElement("div");
          div.className = "search-result-item";
          div.innerHTML = `<span class="result-nick">${cleanNick}</span><span class="result-id">${accId}</span>`;
          div.addEventListener("click", () => fetchExternalWishlist(accId, cleanNick, region.trim()));
          container.appendChild(div);
        }
        if (!found) container.innerHTML += `<p style="color:var(--red);font-weight:700;text-align:center;">${_t("noAccounts")}</p>`;
      } else {
        $("searchResults").innerHTML = `<p style="color:var(--red);font-weight:700;text-align:center;">${_t("serverFailSearch")}</p>`;
      }
    } catch { showNotif(_t("errorSearch"), "error", "search"); }
    showLoading(false);
  }
}

async function fetchExternalWishlist(targetUid, nick, region) {
  if (isActionRunning) return;
  showLoading(true, "loading");
  try {
    const res  = await fetch(`${API_BASE}/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": sessionStorage.getItem("token"),
        "Server-Url":    sessionStorage.getItem("server_url")
      },
      body: JSON.stringify({ account_id: parseInt(targetUid) })
    });
    if (res.status === 401 || res.status === 403) return handleSessionExpiry();
    const data = await res.json();
    if (res.ok) {
      currentSearchedUid = targetUid;
      $("searchResults").innerHTML = "";
      const items = (data.items || []).map(i => i.id);

      const searchNick = $("searchNick"); if (searchNick) searchNick.textContent = nick;
      const searchUid  = $("searchUid");  if (searchUid)  searchUid.textContent  = targetUid;
      const searchReg  = $("searchRegion"); if (searchReg) searchReg.textContent = region;
      const searchCnt  = $("searchCountCurrent"); if (searchCnt) searchCnt.textContent = items.length;
      $("searchedUserSection").classList.remove("hidden");

      const scb = $("searchCorruptedBanner");
      if (scb) scb.classList.toggle("hidden", !(data.has_corrupted_item || data.has_corrupted_items));

      isSearchAddMode = false; selectedAdd.clear(); updateSearchAddBtnText();
      renderGrid(items, "searchedGrid", "search");
    } else { showNotif(_t("fetchFail"), "error", "search"); }
  } catch { showNotif(_t("errorSearch"), "error", "search"); }
  showLoading(false);
}

/* ── Search add mode ────────────────────────────────────── */
function updateSearchAddBtnText() {
  const btn = $("btnSearchAdd"); if (!btn) return;
  const span = btn.querySelector("span"); if (!span) return;
  if (isSearchAddMode) {
    span.textContent = selectedAdd.size === 0
      ? _t("btnCancelAdd")
      : `${_t("btnConfirmAdd")} (${selectedAdd.size})`;
    showInst("searchInst", _t("instAdd"));
  } else {
    span.textContent = _t("btnSelectAdd");
    hideInst("searchInst");
  }
}

function toggleSearchAddMode() {
  if (isActionRunning) return;
  if (!isSearchAddMode) {
    isSearchAddMode = true; selectedAdd.clear(); updateSearchAddBtnText();
  } else {
    if (selectedAdd.size > 0) {
      executeSearchBulkAdd(); return;
    }
    isSearchAddMode = false; selectedAdd.clear(); updateSearchAddBtnText();
    document.querySelectorAll("#searchedGrid .sel-add").forEach(el => el.classList.remove("sel-add"));
  }
}

async function executeSearchBulkAdd() {
  if (isActionRunning || selectedAdd.size === 0) return;
  const ids = Array.from(selectedAdd);
  if (myWishlistIds.length + ids.length > 100) { showNotif(_t("limitReached"), "error", "search"); return; }
  await executeModify("add", ids, "search");
  isSearchAddMode = false; selectedAdd.clear(); updateSearchAddBtnText();
  document.querySelectorAll("#searchedGrid .sel-add").forEach(el => el.classList.remove("sel-add"));
}

async function addAllSearchItems() {
  if (isActionRunning) return;
  const nodes  = document.querySelectorAll("#searchedGrid .item-card");
  const allIds = Array.from(nodes).map(n => parseInt(n.getAttribute("data-id"))).filter(id => !myWishlistIds.includes(id));
  if (!allIds.length) { showNotif(_t("allAdded"), "warning", "search"); return; }
  if (myWishlistIds.length + allIds.length > 100) { showNotif(_t("limitReached"), "error", "search"); return; }
  await executeModify("add", allIds, "search");
  isSearchAddMode = false; selectedAdd.clear(); updateSearchAddBtnText();
}

/* ── Item detail modal ──────────────────────────────────── */
function showItemDetail(id, context) {
  if (isActionRunning) return;
  const item      = libraryData[id] || {};
  const bnrObj    = collectionBanners.find(b => b.itemID === parseInt(id));
  const isBnr     = !!bnrObj;
  const bannerIco = (isBnr && bnrObj.icon) ? String(bnrObj.icon).toLowerCase() : null;

  const wrap  = $("imImgWrap"); if (wrap) { wrap.classList.add("loading"); }
  const imgEl = $("itemModalIcon");
  if (imgEl) {
    imgEl.style.opacity    = "0";
    imgEl.style.transition = "none";
    imgEl.className        = "im-img";
    imgEl.onload  = function () { this.style.opacity = "1"; removeShimmer(this); checkTilt(this); };
    imgEl.onerror = null;

    const srcs  = [];
    const ids   = String(id);
    if (isBnr && bannerIco) {
      if (updatedIconsSet.has(bannerIco)) srcs.push(`${ICONS_BASE}/${bannerIco}_2.png`);
      srcs.push(`${ICONS_BASE}/${bannerIco}.png`);
    } else {
      if (updatedIconsSet.has(ids))       srcs.push(`${ICONS_BASE}/${ids}_2.png`);
      srcs.push(`${ICONS_BASE}/${ids}.png`);
      if (item.Icon) {
        const ic = String(item.Icon);
        if (updatedIconsSet.has(ic))      srcs.push(`${ICONS_BASE}/${ic}_2.png`);
        srcs.push(`${ICONS_BASE}/${ic}.png`);
      }
    }
    srcs.push(`${LIB_RAW}/RareBG_Quality/UNKNOWN.png`);
    let si = 0;
    imgEl.onerror = function () { si++; if (si < srcs.length) this.src = srcs[si]; else { this.onerror = null; if (wrap) wrap.classList.remove("loading"); } };
    imgEl.src = srcs[0];
  }

  const nameEl = $("modalName"); if (nameEl) nameEl.textContent = (item.Name && item.Name.trim()) ? item.Name : _t("noName");
  const idEl   = $("modalItemId"); if (idEl) idEl.textContent = id;
  const icoEl  = $("modalIconId"); if (icoEl) icoEl.textContent = bannerIco || item.Icon || "N/A";
  const descEl = $("modalDesc");   if (descEl) descEl.textContent = (item.Desc && item.Desc.trim()) ? item.Desc : _t("noDesc");

  const actArea = $("modalActionArea"); if (actArea) {
    if (context === "search") {
      if (myWishlistIds.includes(parseInt(id))) {
        actArea.innerHTML = `<p style="color:var(--green);font-weight:800;font-size:.86rem;text-align:center;padding:12px 0;">${_t("alreadyIn")}</p>`;
      } else {
        actArea.innerHTML = `<button class="btn btn-green btn-full" onclick="modifySingle('add',${id},'itemModal','search')"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg><span>${_t("addToWishlist")}</span></button>`;
      }
    } else {
      actArea.innerHTML = `<button class="btn btn-red btn-full" onclick="modifySingle('remove',${id},'itemModal','dashboard')"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13H5v-2h14v2z"/></svg><span>${_t("removeItem")}</span></button>`;
    }
  }
  const closeBtn = $("modalCloseBtn"); if (closeBtn) closeBtn.querySelector("span") && (closeBtn.querySelector("span").textContent = _t("btnClose"));
  openModal("itemModal");
}

async function modifySingle(action, id, modalId, context) {
  if (isActionRunning) return;
  if (action === "add" && myWishlistIds.length >= 100) { showNotif(_t("limitReached"), "error", context); return; }
  closeModal(modalId);
  showLoading(true, "processing");
  await executeModify(action, [id], context);
}

/* ── Settings modal ─────────────────────────────────────── */
function openSettings() { openModal("settingsModal"); }
function closeSettings() { closeModal("settingsModal"); }

/* ── Data initialisation ────────────────────────────────── */
async function init() {
  detectLang();
  applyUI();

  /* Load library data */
  try {
    const dataFile = lang === "vi" ? "ItemsData_vn.json" : lang === "zh" ? "ItemsData_zh.json" : "ItemsData_en.json";
    const [resData, resUpdated, resBanner] = await Promise.all([
      fetch(`${LIB_RAW}/${dataFile}?v=${APP_VERSION}`),
      fetch(`${LIB_RAW}/updated_icons.json?v=${APP_VERSION}`),
      fetch(`${LIB_RAW}/CollectionBanner.json?v=${APP_VERSION}`)
    ]);
    if (resData.ok) {
      const arr = await resData.json();
      libraryData = arr.reduce((acc, it) => { acc[it.Id] = it; return acc; }, {});
    }
    if (resUpdated.ok) { const u = await resUpdated.json(); updatedIconsSet = new Set(u); }
    if (resBanner.ok)  { const b = await resBanner.json();  collectionBanners = Array.isArray(b) ? b : Object.values(b); }
  } catch { /* silent */ }

  if (window._loaderFinish) window._loaderFinish();

  if (sessionStorage.getItem("token")) {
    showSection("dashSection"); updateUserInfo(); await fetchWishlist(); showLoading(false);
  } else if (localStorage.getItem("ff_auto_type")) {
    const ok = await performAutoLogin();
    if (!ok) showLoading(false);
  } else {
    showLoading(false);
  }
}

/* ── Event wiring (runs after DOM is ready) ─────────────── */
document.addEventListener("DOMContentLoaded", () => {
  /* Overlay / drawer */
  $("overlay")?.addEventListener("click", closeDrawer);
  $("drawerClose")?.addEventListener("click", closeDrawer);
  $("mobileMenuBtn")?.addEventListener("click", openDrawer);

  /* Language buttons */
  $("hdrLangBtn")?.addEventListener("click", () => setLang(lang === "en" ? "vi" : lang === "vi" ? "zh" : "en"));
  $("dLangEn")?.addEventListener("click",  () => setLang("en"));
  $("dLangVi")?.addEventListener("click",  () => setLang("vi"));
  $("dLangZh")?.addEventListener("click",  () => setLang("zh"));
  $("smLangEn")?.addEventListener("click", () => setLang("en"));
  $("smLangVi")?.addEventListener("click", () => setLang("vi"));
  $("smLangZh")?.addEventListener("click", () => setLang("zh"));

  /* Settings */
  $("hdrSettingsBtn")?.addEventListener("click", openSettings);
  $("settingsModal")?.addEventListener("click", e => { if (e.target === $("settingsModal")) closeSettings(); });
  $("settingsCloseBtn")?.addEventListener("click", closeSettings);

  /* Modals close on backdrop */
  ["itemModal","confirmModal","updateModal"].forEach(id => {
    $(id)?.addEventListener("click", e => { if (e.target === $(id)) closeModal(id); });
  });

  /* Update modal buttons */
  $("btnRefresh")?.addEventListener("click", () => { if ("caches" in window) caches.keys().then(ns => ns.forEach(k => caches.delete(k))); window.location.reload(true); });
  $("btnLater")?.addEventListener("click", () => closeModal("updateModal"));
  $("navVersionBadge")?.addEventListener("click", () => openModal("updateModal"));

  /* Login form */
  $("modeSwitch")?.addEventListener("change", toggleLoginMode);
  $("guestFile")?.addEventListener("change", updateFileLabel);
  $("btnLoginDat")?.addEventListener("click", () => handleLogin("file"));
  $("btnLoginCred")?.addEventListener("click", () => handleLogin("manual"));

  /* Dashboard */
  $("btnCopyUid")?.addEventListener("click", copyUid);
  $("btnLogout")?.addEventListener("click", logout);
  $("btnSearchAccount")?.addEventListener("click", showSearchSection);
  $("btnAddMain")?.addEventListener("click", processAddInput);
  $("btnRemoveMain")?.addEventListener("click", toggleRemoveMode);
  $("btnRemoveAll")?.addEventListener("click", promptClearAll);
  $("btnConfirmClear")?.addEventListener("click", executeClearAll);
  $("btnCancelClear")?.addEventListener("click", () => closeModal("confirmModal"));
  $("modalCloseBtn")?.addEventListener("click", () => closeModal("itemModal"));

  /* Search */
  $("backBtn")?.addEventListener("click", backToDashboard);
  $("btnSearchNow")?.addEventListener("click", performSearch);
  $("searchInput")?.addEventListener("keydown", e => { if (e.key === "Enter") performSearch(); });
  $("btnSearchAdd")?.addEventListener("click", toggleSearchAddMode);
  $("btnAddAllSearch")?.addEventListener("click", addAllSearchItems);

  init();
});
