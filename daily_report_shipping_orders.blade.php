
@extends('layouts.dashboard.app')
@push('css')
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-rc.0/css/select2.min.css" rel="stylesheet" />
<link rel="stylesheet" href="{{ asset('dashboard_files/select2/select2.min.css') }}">
<link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap"
/>
<style>
      /* heading */
      .heading {
        margin-bottom: 2rem;
        text-align: right;
      }

      .heading h1 {
        font-size: 24px;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 24px;
        margin-top: 0px;
      }

      .heading p {
        font-size: 0.875rem;
        color: #6b7280;
      }

      /* Filter Bar */
      .filter-bar {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }

      /* Search Input */
      .search-input-wrapper {
        position: relative;
      }

      .search-input {
        background-color: #f3f4f6;
        padding: 0.625rem 1rem;
        border-radius: 8px !important;
        border: none;
        color: #374151;
        font-size: 14px;
        width: 16rem;
        height: 36px;
        font-family: "Cairo", sans-serif;
      }

      .search-input:focus {
        outline: none;
        background-color: #e5e7eb;
      }

      .search-input::placeholder {
        color: #9ca3af;
      }

      /* Select Dropdown */
      .select-wrapper {
        position: relative;
        height: 36px;
      }

      .select-input {
        background-color: #f3f4f6;
        padding: 0.625rem 2.5rem 0.625rem 1rem;
        border-radius: 8px !important;
        border: none;
        color: #374151;
        font-size: 14px;
        width: 170px;
        height: 100%;
        font-family: "Cairo", sans-serif;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
      }

      .select-input:focus {
        outline: none;
        background-color: #e5e7eb;
      }

      .chevron-icon {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        color: #6b7280;
        pointer-events: none;
        width: 18px;
        height: 18px;
      }

      /* Date Input */
      .date-input {
        background-color: #f3f4f6;
        padding: 0.625rem 2.5rem 0.625rem 1rem;
        border-radius: 8px !important;
        border: none;
        color: #374151;
        font-size: 14px;
        width: 144px;
        font-family: "Cairo", sans-serif;
        cursor: pointer;
        height: 36px;
      }

      .date-input:focus {
        outline: none;
        background-color: #e5e7eb;
      }

      /* Buttons */
      .btn {
        padding: 0rem 2rem;
        height: 36px;
        border-radius: 8px !important;
        border: none;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: "Cairo", sans-serif;
        transition: background-color 0.2s;
      }

      .btn-search {
        background-color: #2563b5;
        color: white;
      }

      .btn-search:hover {
        background-color: #1e4a8f;
      }

      .btn-download {
        background-color: #2563b5;
        color: white;
        padding: 0.625rem 1.5rem;
      }

      .btn-download:hover {
        background-color: #1e4a8f;
      }

      .download-icon {
        width: 18px;
        height: 18px;
      }

      /* Table Styles */
      .table-container {
        margin-top: 2rem;
        background: white;
        border-radius: 0.75rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }

      .table-wrapper {
        overflow-x: auto;
        overflow-y: auto;
        max-height: 600px;
        position: relative;
      }

      .data-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 14px;
      }

      .data-table thead {
        position: sticky;
        top: 0;
        z-index: 10;
        background: white;
      }

      .data-table thead tr {
        background: #f9fafb;
      }
      .data-table thead tr:first-child {
        background-color: #1e4a8f;
      }
      .data-table thead tr:first-child th {
        color: white;
      }
      .data-table th,
      .data-table td {
        text-align: center;
      }
      .data-table thead tr:nth-child(2) th:nth-child(1),
      .data-table thead tr:nth-child(2) th:nth-child(2) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }
      /* Column group backgrounds - Harmonized colors */
      .data-table thead tr:nth-child(2) th:nth-child(3),
      .data-table thead tr:nth-child(2) th:nth-child(4),
      .data-table thead tr:nth-child(2) th:nth-child(5),
      .data-table thead tr:nth-child(2) th:nth-child(6),
      .data-table thead tr:nth-child(2) th:nth-child(7),
      .data-table thead tr:nth-child(2) th:nth-child(8),
      .data-table thead tr:nth-child(2) th:nth-child(9),
      .data-table thead tr:nth-child(2) th:nth-child(10),
      .data-table thead tr:nth-child(2) th:nth-child(11),
      .data-table tbody tr td:nth-child(3),
      .data-table tbody tr td:nth-child(4),
      .data-table tbody tr td:nth-child(5),
      .data-table tbody tr td:nth-child(6),
      .data-table tbody tr td:nth-child(7),
      .data-table tbody tr td:nth-child(8),
      .data-table tbody tr td:nth-child(9),
      .data-table tbody tr td:nth-child(10),
      .data-table tbody tr td:nth-child(11) {
        background-color: #e8eaf6;
        border: 1px solid #d1d5db !important;
        color: #1a237e;
      }
      .data-table thead tr:nth-child(2) th:nth-child(12),
      .data-table thead tr:nth-child(2) th:nth-child(13),
      .data-table thead tr:nth-child(2) th:nth-child(14),
      .data-table thead tr:nth-child(2) th:nth-child(15),
      .data-table thead tr:nth-child(2) th:nth-child(16),
      .data-table thead tr:nth-child(2) th:nth-child(17),
      .data-table thead tr:nth-child(2) th:nth-child(18),
      .data-table thead tr:nth-child(2) th:nth-child(19),
      .data-table thead tr:nth-child(2) th:nth-child(20),
      .data-table thead tr:nth-child(2) th:nth-child(21),
      .data-table thead tr:nth-child(2) th:nth-child(22),
      .data-table thead tr:nth-child(2) th:nth-child(23),
      .data-table tbody tr td:nth-child(12),
      .data-table tbody tr td:nth-child(13),
      .data-table tbody tr td:nth-child(14),
      .data-table tbody tr td:nth-child(15),
      .data-table tbody tr td:nth-child(16),
      .data-table tbody tr td:nth-child(17),
      .data-table tbody tr td:nth-child(18),
      .data-table tbody tr td:nth-child(19),
      .data-table tbody tr td:nth-child(20),
      .data-table tbody tr td:nth-child(21),
      .data-table tbody tr td:nth-child(22),
      .data-table tbody tr td:nth-child(23) {
        background-color: #c5cae9;
        color: #1a237e;
      }
      .data-table thead tr:nth-child(2) th:nth-child(24),
      .data-table tbody tr td:nth-child(24) {
        background-color: #9fa8da;
        color: #1a237e;
        font-weight: 600;
      }
      @if (auth()->user()->hasRole('super_admin') || auth()->user()->hasRole('admin'))
      .data-table thead tr:nth-child(2) th:nth-child(25),
      .data-table thead tr:nth-child(2) th:nth-child(26),
      .data-table thead tr:nth-child(2) th:nth-child(27),
      .data-table thead tr:nth-child(2) th:nth-child(28),
      .data-table thead tr:nth-child(2) th:nth-child(29),
      .data-table thead tr:nth-child(2) th:nth-child(30),
      .data-table thead tr:nth-child(2) th:nth-child(31),
      .data-table thead tr:nth-child(2) th:nth-child(32),
      .data-table tbody tr td:nth-child(25),
      .data-table tbody tr td:nth-child(26),
      .data-table tbody tr td:nth-child(27),
      .data-table tbody tr td:nth-child(28),
      .data-table tbody tr td:nth-child(29),
      .data-table tbody tr td:nth-child(30),
      .data-table tbody tr td:nth-child(31),
      .data-table tbody tr td:nth-child(32) {
        background-color: #7986cb;
        color: white;
        font-weight: 500;
      }
      @endif
      .data-table th {
        padding: 0.5rem;
        font-weight: 600;
        color: #374151;
        border-bottom: 2px solid #e5e7eb;
        position: relative;
        min-width: 81px;
      }
      .data-table thead tr:nth-child(2) th:not(:nth-child(1), :nth-child(2)) {
        padding: 0.5rem 0.5rem 1.25rem;
      }
      .data-table thead tr:nth-child(1) th {
        font-size: 24px;
        font-weight: 800;
      }
      .data-table th .sort-icon {
        display: inline-block;
        width: 25px;
        margin-right: 0.25rem;
        vertical-align: middle;
        opacity: 0.4;
        color: #000000;
        position: absolute;
        bottom: 10px;
        right: 50%;
        transform: translateX(50%);
      }

      .data-table td {
        padding: 0.875rem 1rem;
        color: #4b5563;
        border-bottom: 1px solid #f3f4f6;
        white-space: nowrap;
        border-right: 1px solid #e5e7eb;
      }

      .data-table tbody tr:hover {
        background-color: #f9fafb;
      }

      /* Fixed Columns */
      .fixed-col {
        position: sticky !important;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 5 !important;
        color: white !important;
        font-weight: 600;
        border: 2px solid #4c51bf !important;
      }
      .data-table thead tr:nth-child(3) td.fixed-col,
      .data-table thead tr:nth-child(4) td.fixed-col,
      .data-table thead tr:nth-child(5) td.fixed-col,
      .data-table thead tr:nth-child(6) td.fixed-col {
        background: #f3f4f6 !important;
        color: #4b5563 !important;
      }
      .fixed-col-1 {
        width: 143px;
        right: 0 !important;
        box-shadow: -4px 0 12px rgba(102, 126, 234, 0.25);
      }

      .fixed-col-2 {
        right: 80px !important; /* Adjust based on first column width */
        box-shadow: -4px 0 12px rgba(102, 126, 234, 0.25);
      }

      /* .data-table thead .fixed-col {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 15;
        color: white;
        border: 2px solid #4c51bf !important;
      } */

      .data-table tbody tr:hover .fixed-col {
        background: linear-gradient(135deg, #5568d3 0%, #6a4293 100%);
      }

      /* Summary rows in thead (rows 3, 4, 5) */
      .data-table thead tr:nth-child(2) th,
      .data-table thead tr:nth-child(3) td,
      .data-table thead tr:nth-child(4) td,
      .data-table thead tr:nth-child(5) td,
      .data-table thead tr:nth-child(6) td {
        border: 1px solid #d1d5db !important;
        background-color: #f3f4f6;
        font-weight: 600;
      }

      /* Column group separators */
      .data-table th:nth-child(3),
      .data-table th:nth-child(4),
      .data-table th:nth-child(5),
      .data-table td:nth-child(3) {
        border-right: 2px solid #cbd5e1 !important;
      }

      .data-table th:nth-child(12),
      .data-table td:nth-child(12) {
        border-right: 2px solid #cbd5e1 !important;
      }

      .data-table th:nth-child(22),
      .data-table td:nth-child(22) {
        border-right: 2px solid #cbd5e1 !important;
      }

      .data-table th:nth-child(23),
      .data-table td:nth-child(23) {
        border-right: 2px solid #cbd5e1 !important;
      }


      /* Collapsible summary rows */
.summary-row td {
  overflow: hidden;
  transition: padding 0.35s ease, font-size 0.35s ease, line-height 0.35s ease, opacity 0.35s ease, max-height 0.35s ease;
}
.summary-rows-collapsed .summary-row {
  display: none;
}

.summary-toggle-btn {
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 6px 20px;
  font-family: "Cairo", sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(79,70,229,0.3);
  transition: background 0.2s;
}
.summary-toggle-btn:hover {
  background: #4338ca;
}
.summary-toggle-btn svg {
  transition: transform 0.35s ease;
}
.summary-toggle-btn.collapsed svg {
  transform: rotate(180deg);
}
/* COLLAPSIBLE COLUMN GROUPS */
.col-group-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
  width: 100%;
}
.toggle-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  transition: background 0.2s;
  flex-shrink: 0;
}
.col-group-toggle:hover .toggle-icon-wrap {
  background: rgba(255,255,255,0.45);
}
.col-group-toggle .toggle-icon-wrap svg {
  transition: transform 0.3s ease;
}
.col-group-header.is-collapsed .toggle-icon-wrap svg {
  transform: rotate(-90deg);
}
.col-group-placeholder {
  display: none;
  cursor: pointer;
  min-width: 34px !important;
  width: 34px !important;
  padding: 0.4rem 0.2rem !important;
  background-color: #1e4a8f !important;
}
.expand-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  border: 2px solid rgba(255,255,255,0.5);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  font-size: 12px;
  color: white;
}
.expand-btn:hover {
  background: rgba(255,255,255,0.5);
  transform: scale(1.1);
}
</style>
@endpush

@section('content')
<!-- BEGIN CONTENT -->

<div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <div class="page-content">
        <div class="page-bar">
            <ul class="page-breadcrumb">
               <li>
                    <a href="{{asset('dashboard/welcome')}}">الرئيسية</a>
                    <i class="fa fa-angle-double-left"></i>
                </li>
                <li>
                    <a href="{{asset('dashboard/shipping/company')}}">شركات الشحن</a>
                    <i class="fa fa-angle-double-left"></i>
                </li>
                <li>
                    <span>تقرير متابعة قسم الشحن اليومي</span>
                </li>
            </ul>
        </div>
        <h6 class="page-title"> 
        </h6>

        <div class="filter-bar">
          <div class="select-wrapper">
              <label>من</label>
              <input type="date" id="startDate" class="date-input" name="start" value="{{ $start->format('Y-m-d') }}" />
          </div>

          <div class="select-wrapper">
              <label>إلى</label>
              <input type="date" id="endDate" class="date-input" name="end" value="{{ $end->format('Y-m-d') }}" />
          </div>

          @if (auth()->user()->hasRole('super_admin') || auth()->user()->hasRole('admin'))
              <div class="select-wrapper">
                <label>الموظف</label>
                <select id="userSelect" name="user_id[]" class="select-input" multiple>
                    @foreach ($shippingUsers as $u)
                        <option value="{{ $u->id }}" 
                            {{ is_array($selectedUserIds) && in_array($u->id, $selectedUserIds) ? 'selected' : '' }}>
                            {{ $u->first_name }}
                        </option>
                    @endforeach
                </select>
            </div>

              <div class="select-wrapper">
                  <label>عرض</label>
                  <select id="viewModeSelect" name="view_mode" class="select-input">
                      <option value="details" {{ $viewMode === 'details' ? 'selected' : '' }}>تفصيلي (بالموظف)</option>
                      <option value="all"     {{ $viewMode === 'all'     ? 'selected' : '' }}>إجمالي (الكل)</option>
                  </select>
              </div>
          @endif

          <button type="button" id="filterBtn" class="btn btn-search">فلتر</button>
          <button type="button" id="resetBtn" class="btn" style="background-color: #6b7280; color: white;">تحديث الصفحة</button>

          <button type="button" id="exportBtn" class="btn btn-download">
              <svg class="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              تصدير Excel
          </button>
        </div>

        <div class="table-container">
          <div class="table-wrapper">
        <table class="data-table">
              <thead>
              <tr>
  <th colspan="2"></th>
  <th colspan="9">تقرير حالات الشحن الفرعية</th>

  <th colspan="12" class="col-group-header" data-group="group-overall">
    <div class="col-group-toggle">
      <span>التقرير الاجمالي</span>
      <span class="toggle-icon-wrap">
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
        </svg>
      </span>
    </div>
  </th>
  <th class="col-group-placeholder" data-group="group-overall">
    <div class="expand-btn" title="إظهار التقرير الاجمالي">▶</div>
  </th>

  <th colspan="1" class="col-group-header" data-group="group-tickets">
    <div class="col-group-toggle">
      <span>التذاكر</span>
      <span class="toggle-icon-wrap">
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
        </svg>
      </span>
    </div>
  </th>
  <th class="col-group-placeholder" data-group="group-tickets">
    <div class="expand-btn" title="إظهار التذاكر">▶</div>
  </th>

  @if (auth()->user()->hasRole('super_admin') || auth()->user()->hasRole('admin'))
    <th colspan="8" class="col-group-header" data-group="group-performance">
      <div class="col-group-toggle">
        <span>تقرير بأداء قسم الشحن اليومي (متوسط كل موظف)</span>
        <span class="toggle-icon-wrap">
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </div>
    </th>
    <th class="col-group-placeholder" data-group="group-performance">
      <div class="expand-btn" title="إظهار تقرير الأداء">▶</div>
    </th>
  @endif

  <th colspan="4" class="col-group-header" data-group="group-returns">
    <div class="col-group-toggle">
      <span>تقرير المرتجعات</span>
      <span class="toggle-icon-wrap">
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
        </svg>
      </span>
    </div>
  </th>
  <th class="col-group-placeholder" data-group="group-returns">
    <div class="expand-btn" title="إظهار تقرير المرتجعات">▶</div>
  </th>

  <th colspan="6" class="col-group-header" data-group="group-resend">
    <div class="col-group-toggle">
      <span>تقرير الاوردرات المعاد ارسالها</span>
      <span class="toggle-icon-wrap">
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
        </svg>
      </span>
    </div>
  </th>
  <th class="col-group-placeholder" data-group="group-resend">
    <div class="expand-btn" title="إظهار تقرير المعاد ارسالها">▶</div>
  </th>

  <th colspan="5" class="col-group-header" data-group="group-recorded">
    <div class="col-group-toggle">
      <span>تقرير الاوردرات المسجلة</span>
      <span class="toggle-icon-wrap">
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
        </svg>
      </span>
    </div>
  </th>
  <th class="col-group-placeholder" data-group="group-recorded">
    <div class="expand-btn" title="إظهار تقرير المسجلة">▶</div>
  </th>
</tr>
                <tr>
                  <th class="fixed-col fixed-col-1">الموظف</th>
                  <th class="fixed-col fixed-col-2">التاريخ</th>

                  <th>
                    لا يرد للاستلام
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th>
                    رد وتم توصيل العميل بالمندوب
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                    
                  </th>
                  <th>
                    رد ومؤجل من العميل
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                    
                  </th>
                  <th>
                    رد وجاري متابعة التسليم
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th>
                    رد وجاري متابعة التنسيق
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th>
                    مرتجع بطلب العميل
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th>
                    مرتجع بطلب الشركة
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th>
                    اعادة ارسال مرتجع
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th>
                    اخري
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>

                  {{-- group-overall: 12 ths --}}
                  <th data-col-group="group-overall">
                    طلبات تم العمل عليها
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    طلبات لم يتم العمل عليها
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    اجمالي الطلبات المسكنة
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    عدد المحاولات اليومية
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    اجمالي الطلبات المنفذة
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    اجمالي طلبات لم يتم تنفيذها
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    اجمالي الطلبات المؤكدة
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    اجمالي الطلبات المسلمة
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    اجمالي الطلبات المرتجعة
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    نسبة التأكيد اليومية
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    نسبة التنفيذ اليومية
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>
                  <th data-col-group="group-overall">
                    نسبة التسليم اليومية
                    
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>

                  {{-- group-tickets: 1 th --}}
                  <th data-col-group="group-tickets">
                    اجمالي تذاكر الشحن
                   
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                  </th>

                  {{-- group-performance: 8 ths (admin only) --}}
                  @if (auth()->user()->hasRole('super_admin') || auth()->user()->hasRole('admin'))
                    <th data-col-group="group-performance">
                      اجمالي عدد التيم
                      
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        ></path>
                    </th>
                    <th data-col-group="group-performance">
                      متوسط عدد الطلبات المسكنة
                      
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        ></path>
                    </th>
                    <th data-col-group="group-performance">
                      متوسط المحاولات اليومية
                      
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        ></path>
                    </th>
                    <th data-col-group="group-performance">
                      متوسط الطلبات المنفذة
                      
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        ></path>
                    </th>
                    <th data-col-group="group-performance">
                      متوسط طلبات لم يتم تنفيذها
                      
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        ></path>
                    </th>
                    <th data-col-group="group-performance">
                      متوسط عدد الطلبات المؤكدة
                      
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        ></path>
                    </th>
                    <th data-col-group="group-performance">
                      متوسط عدد الطلبات المسلمة
                      
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        ></path>
                    </th>
                    <th data-col-group="group-performance">
                      متوسط عدد الطلبات المرتجعة
                      
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        ></path>
                    </th>
                  @endif

                  {{-- group-returns: 4 ths --}}
                  <th data-col-group="group-returns">اجمالي الطلبات المرتجعة</th>
                  <th data-col-group="group-returns">مرتجعات تم العمل عليها</th>
                  <th data-col-group="group-returns">مرتجعات لم يتم العمل عليها</th>
                  <th data-col-group="group-returns">نسبة تنفيذ المرتجعات اليومية</th>

                  {{-- group-resend: 6 ths --}}
                  <th data-col-group="group-resend" style="background: #6876DF;color: white;">اجمالي الطلبات المعاد ارسالها</th>
                  <th data-col-group="group-resend" style="background: #6876DF;color: white;">اجمالي الطلبات المعاد ارسالها المقبولة</th>
                  <th data-col-group="group-resend" style="background: #6876DF;color: white;">اجمالي الطلبات المسلمة من المعاد ارساله</th>
                  <th data-col-group="group-resend" style="background: #6876DF;color: white;">اجمالي الطلبات المرتجعة من المعاد ارساله</th>
                  <th data-col-group="group-resend" style="background: #6876DF;color: white;">اجمالي طلبات قيد التسليم من المعاد ارساله</th>
                  <th data-col-group="group-resend" style="background: #6876DF;color: white;">نسبة تسليمات الطلبات المعاد ارسالها</th>

                  {{-- group-recorded: 5 ths --}}
                  <th data-col-group="group-recorded">اجمالي الطلبات المسجلة</th>
                  <th data-col-group="group-recorded">اجمالي الطلبات المسلمة</th>
                  <th data-col-group="group-recorded">اجمالي الطلبات المرتجعة والملغية</th>
                  <th data-col-group="group-recorded">اجمالي طلبات قيد التسليم</th>
                  <th data-col-group="group-recorded">نسبة تسليمات الطلبات المسجلة</th>
                </tr>

                <tr id="summaryToggleRow">
                  <td colspan="100%" style="padding: 6px 12px; background: #eef2ff; border: 1px dashed #6366f1; text-align: unset;">
                    <button class="summary-toggle-btn collapsed" id="summaryToggleBtn">
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
                      </svg>
                      <span id="summaryToggleLabel">إظهار الإجماليات</span>
                    </button>
                  </td>
                </tr>

                {{-- ============================================================ --}}
                {{-- SUMMARY ROW 1: اجمالي القسم --}}
                {{-- ============================================================ --}}
                <tr class="summary-row">
                  <td colspan="2" class="fixed-col fixed-col-1">
                    اجمالي القسم
                  </td>
                  @for ($type = 1; $type <= 9; $type++)
                    <td>{{ $monthlyTotals[$type] }}</td>
                  @endfor
                  
                  <td data-col-group="group-overall">{{ $grandTotals->working }}</td>
                  <td data-col-group="group-overall">{{ $grandTotals->unworking }}</td>
                  <td data-col-group="group-overall">{{ $grandTotals->assigned }}</td>
                  <td data-col-group="group-overall">{{ $grandTotals->tries }}</td>
                  <td data-col-group="group-overall">{{ $grandTotals->executed }}</td>
                  <td data-col-group="group-overall">{{ $grandTotals->not_executed }}</td>
                  <td data-col-group="group-overall">{{ $grandTotals->confirmed }}</td>
                  <td data-col-group="group-overall">{{ $orderPeriodTotals->delivered }}</td>
                  <td data-col-group="group-overall">{{ $orderPeriodTotals->returned }}</td>
                  <td data-col-group="group-overall">{{ $grandTotals->executed > 0 ? round(($grandTotals->confirmed / $grandTotals->executed) * 100, 2)  : 0}} %</td>
                  <td data-col-group="group-overall">{{ $grandTotals->assigned > 0 ? round(($grandTotals->executed / $grandTotals->assigned) * 100, 2)  : 0 }} %</td>
                  <td data-col-group="group-overall">{{ ($orderPeriodTotals->delivered + $orderPeriodTotals->returned) > 0 ? round(($orderPeriodTotals->delivered / ($orderPeriodTotals->delivered + $orderPeriodTotals->returned))* 100, 2)  : 0}} %</td>

                  <td data-col-group="group-tickets">{{ $totalTickets }}</td>

                  @if (auth()->user()->hasRole('super_admin') || auth()->user()->hasRole('admin'))
                    <td data-col-group="group-performance">{{ $monthlyWorkingUsers }}</td>
                    <td data-col-group="group-performance">{{ $avgGrandTotals->assigned }}</td>
                    <td data-col-group="group-performance">{{ $avgGrandTotals->tries }}</td>
                    <td data-col-group="group-performance">{{ $avgGrandTotals->executed }}</td>
                    <td data-col-group="group-performance">{{ $avgGrandTotals->not_executed }}</td>
                    <td data-col-group="group-performance">{{ $avgGrandTotals->confirmed }}</td>
                    <td data-col-group="group-performance">{{ $avgGrandTotals->delivered }}</td>
                    <td data-col-group="group-performance">{{ $avgGrandTotals->returned }}</td>
                  @endif

                  <td data-col-group="group-returns">{{ $returnedTotals['total'] }}</td>
                  <td data-col-group="group-returns">{{ $returnedTotals['working_returned'] }}</td>
                  <td data-col-group="group-returns">{{ $returnedTotals['unworking_returned'] }}</td>
                  <td data-col-group="group-returns">{{ $returnedTotals['ratio'] }} %</td>

                  <td data-col-group="group-resend">{{ $resendTotals->total }}</td>
                  <td data-col-group="group-resend">{{ $resendTotals->accepted }}</td>
                  <td data-col-group="group-resend">{{ $resendTotals->delivered }}</td>
                  <td data-col-group="group-resend">{{ $resendTotals->returned }}</td>
                  <td data-col-group="group-resend">{{ $resendTotals->in_progress }}</td>
                  <td data-col-group="group-resend">{{ $resendTotals->ratio }} %</td>

                  <td data-col-group="group-recorded">{{ $totalRecords->total ?? 0 }}</td>
                  <td data-col-group="group-recorded">{{ $totalRecords->delivered ?? 0}}</td>
                  <td data-col-group="group-recorded">{{ $totalRecords->returned ?? 0}}</td>
                  <td data-col-group="group-recorded">{{ $totalRecords->other ?? 0}}</td>
                  <td data-col-group="group-recorded">{{ $totalRecords->ratio ?? 0}} %</td>
                </tr>

                {{-- ============================================================ --}}
                {{-- SUMMARY ROW 2: المتوسط اليومي للقسم --}}
                {{-- ============================================================ --}}
                <tr class="summary-row">
                  <td colspan="2" class="fixed-col fixed-col-1">
                    المتوسط اليومي للقسم
                  </td>
                    @for ($type = 1; $type <= 9; $type++)
                        <td>
                            {{ $departmentDailyCount > 0 ? 
                                round($monthlyTotals[$type] / $departmentDailyCount, 2) 
                                : 0 
                            }}
                        </td>
                    @endfor
                    <td data-col-group="group-overall">{{ $departmentDailyCount > 0 ? round($grandTotals->working / $departmentDailyCount, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $departmentDailyCount > 0 ? round($grandTotals->unworking / $departmentDailyCount, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $departmentDailyCount > 0 ? round($grandTotals->assigned / $departmentDailyCount, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $departmentDailyCount > 0 ? round($grandTotals->tries / $departmentDailyCount, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $departmentDailyCount > 0 ? round($grandTotals->executed / $departmentDailyCount, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $departmentDailyCount > 0 ? round($grandTotals->not_executed / $departmentDailyCount, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $departmentDailyCount > 0 ? round($grandTotals->confirmed / $departmentDailyCount, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $departmentDailyCount > 0 ? round($orderPeriodTotals->delivered / $departmentDailyCount, 2) : 0 }}</td>
                    <td data-col-group="group-overall">{{ $departmentDailyCount > 0 ? round($orderPeriodTotals->returned / $departmentDailyCount, 2) : 0 }}</td>
                    <td data-col-group="group-overall">{{ $grandTotals->executed > 0 ? round(($grandTotals->confirmed / $grandTotals->executed) * 100, 2) : 0}} %</td>
                    <td data-col-group="group-overall">{{ $grandTotals->assigned > 0 ? round(($grandTotals->executed / $grandTotals->assigned)* 100, 2) : 0 }} %</td>
                    <td data-col-group="group-overall">{{ ($orderPeriodTotals->delivered + $orderPeriodTotals->returned) > 0 ? round(($orderPeriodTotals->delivered / ($orderPeriodTotals->delivered + $orderPeriodTotals->returned))* 100, 2)  : 0}} %</td>

                    <td data-col-group="group-tickets">{{ $departmentDailyCount > 0 ? round($totalTickets / $departmentDailyCount, 2) : 0}}</td>

                    @if (auth()->user()->hasRole('super_admin') || auth()->user()->hasRole('admin'))
                      <td data-col-group="group-performance">
                          {{ $departmentDailyCount > 0 ? 
                              round($monthlyWorkingUsers / $departmentDailyCount, 2)
                              : 0 
                          }}
                      </td>
                      <td data-col-group="group-performance">{{ $avgDailtyGrandTotals->assigned ?? 0 }}</td>
                      <td data-col-group="group-performance">{{ $avgDailtyGrandTotals->tries ?? 0 }}</td>
                      <td data-col-group="group-performance">{{ $avgDailtyGrandTotals->executed ?? 0 }}</td>
                      <td data-col-group="group-performance">{{ $avgDailtyGrandTotals->not_executed ?? 0 }}</td>
                      <td data-col-group="group-performance">{{ $avgDailtyGrandTotals->confirmed ?? 0 }}</td>
                      <td data-col-group="group-performance">{{ $avgDailtyGrandTotals->delivered ?? 0 }}</td>
                      <td data-col-group="group-performance">{{ $avgDailtyGrandTotals->returned ?? 0 }}</td>
                    @endif

                    <td data-col-group="group-returns">{{ $departmentDailyCount > 0 ? round(($returnedTotals['total']/$departmentDailyCount), 2) : 0 }}</td>
                    <td data-col-group="group-returns">{{ $departmentDailyCount > 0 ? round(($returnedTotals['working_returned']/$departmentDailyCount), 2) : 0 }}</td>
                    <td data-col-group="group-returns">{{ $departmentDailyCount > 0 ? round(($returnedTotals['unworking_returned']/$departmentDailyCount), 2) : 0 }}</td>
                    <td data-col-group="group-returns">{{ $departmentDailyCount > 0 ? $returnedTotals['ratio'] : 0 }} %</td>

                    @php
                      $totR = $departmentDailyCount > 0 ? round(($resendTotals->total / $departmentDailyCount), 2)  : 0;
                      $delR = $departmentDailyCount > 0 ? round(($resendTotals->delivered / $departmentDailyCount), 2)  : 0;
                    @endphp

                    <td data-col-group="group-resend">{{ $departmentDailyCount > 0 ? round(($resendTotals->total / $departmentDailyCount), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $departmentDailyCount > 0 ? round(($resendTotals->accepted / $departmentDailyCount), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $departmentDailyCount > 0 ? round(($resendTotals->delivered / $departmentDailyCount), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $departmentDailyCount > 0 ? round(($resendTotals->returned / $departmentDailyCount), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $departmentDailyCount > 0 ? round(($resendTotals->in_progress / $departmentDailyCount), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $totR > 0 ? round(($delR / $totR)* 100, 2) : 0 }} %</td>

                    @php
                      $totX = $departmentDailyCount > 0 ? round(($totalRecords->total / $departmentDailyCount), 2)  : 0;
                      $delX = $departmentDailyCount > 0 ? round(($totalRecords->delivered / $departmentDailyCount), 2)  : 0;
                    @endphp

                    <td data-col-group="group-recorded">{{ $departmentDailyCount > 0 ? round(($totalRecords->total / $departmentDailyCount), 2)  : 0}}</td>
                    <td data-col-group="group-recorded">{{ $departmentDailyCount > 0 ? round(($totalRecords->delivered / $departmentDailyCount), 2)  : 0}}</td>
                    <td data-col-group="group-recorded">{{ $departmentDailyCount > 0 ? round(($totalRecords->returned / $departmentDailyCount), 2)  : 0}}</td>
                    <td data-col-group="group-recorded">{{ $departmentDailyCount > 0 ? round(($totalRecords->other / $departmentDailyCount), 2)  : 0}}</td>
                    <td data-col-group="group-recorded">{{ $totX > 0 ? round(($delX / $totX)* 100, 2) : 0 }} %</td>
                </tr>

                {{-- ============================================================ --}}
                {{-- SUMMARY ROW 3: المتوسط اليومي للموظف --}}
                {{-- ============================================================ --}}
                <tr class="summary-row">
                  <td colspan="2" class="fixed-col fixed-col-1">
                    المتوسط اليومي للموظف
                  </td>
                    @for ($type = 1; $type <= 9; $type++)
                        <td>
                            {{ $monthlyWorkingUsers > 0 ? 
                                round(($monthlyTotals[$type] / $monthlyWorkingUsers), 2) 
                                : 0 
                            }}
                        </td>
                    @endfor

                    <td data-col-group="group-overall">{{ $monthlyWorkingUsers > 0 ? round($grandTotals->working / $monthlyWorkingUsers, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $monthlyWorkingUsers > 0 ? round($grandTotals->unworking / $monthlyWorkingUsers, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $monthlyWorkingUsers > 0 ? round($grandTotals->assigned / $monthlyWorkingUsers, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $monthlyWorkingUsers > 0 ? round($grandTotals->tries / $monthlyWorkingUsers, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $monthlyWorkingUsers > 0 ? round($grandTotals->executed / $monthlyWorkingUsers, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $monthlyWorkingUsers > 0 ? round($grandTotals->not_executed / $monthlyWorkingUsers, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $monthlyWorkingUsers > 0 ? round($grandTotals->confirmed / $monthlyWorkingUsers, 2) : 0}}</td>
                    <td data-col-group="group-overall">{{ $monthlyWorkingUsers > 0 ? round($orderPeriodTotals->delivered / $monthlyWorkingUsers, 2) : 0 }}</td>
                    <td data-col-group="group-overall">{{ $monthlyWorkingUsers > 0 ? round($orderPeriodTotals->returned / $monthlyWorkingUsers, 2) : 0 }}</td>
                    <td data-col-group="group-overall">{{ $grandTotals->executed > 0 ? round(($grandTotals->confirmed / $grandTotals->executed) * 100, 2) : 0}} %</td>
                    <td data-col-group="group-overall">{{ $grandTotals->assigned > 0 ? round(($grandTotals->executed / $grandTotals->assigned)* 100, 2) : 0 }} %</td>
                    <td data-col-group="group-overall">{{ ($orderPeriodTotals->delivered + $orderPeriodTotals->returned) > 0 ? round(($orderPeriodTotals->delivered / ($orderPeriodTotals->delivered + $orderPeriodTotals->returned))* 100, 2)  : 0}} %</td>

                    <td data-col-group="group-tickets">{{ $monthlyWorkingUsers > 0 ? round($totalTickets / $monthlyWorkingUsers, 2) : 0}}</td>

                    @if (auth()->user()->hasRole('super_admin') || auth()->user()->hasRole('admin'))
                      <td data-col-group="group-performance">{{ $monthlyWorkingUsers > 0 ? 1 : 0 }}</td>
                      <td data-col-group="group-performance">{{ $avgUserGrandTotals->assigned }}</td>
                      <td data-col-group="group-performance">{{ $avgUserGrandTotals->tries }}</td>
                      <td data-col-group="group-performance">{{ $avgUserGrandTotals->executed }}</td>
                      <td data-col-group="group-performance">{{ $avgUserGrandTotals->not_executed }}</td>
                      <td data-col-group="group-performance">{{ $avgUserGrandTotals->confirmed }}</td>
                      <td data-col-group="group-performance">{{ $avgUserGrandTotals->delivered }}</td>
                      <td data-col-group="group-performance">{{ $avgUserGrandTotals->returned }}</td>
                    @endif

                    @php  
                      $totalX = $monthlyWorkingUsers > 0 ? round(($totalRecords->total / $monthlyWorkingUsers), 2)  : 0;
                      $deliveredX = $monthlyWorkingUsers > 0 ? round(($totalRecords->delivered / $monthlyWorkingUsers), 2)  : 0;
                    @endphp

                    @php  
                      $totalR = $monthlyWorkingUsers > 0 ? round(($resendTotals->total / $monthlyWorkingUsers), 2)  : 0;
                      $deliveredR = $monthlyWorkingUsers > 0 ? round(($resendTotals->delivered / $monthlyWorkingUsers), 2)  : 0;
                    @endphp

                    <td data-col-group="group-returns">{{ $monthlyWorkingUsers > 0 ? round($returnedTotals['total'] / $monthlyWorkingUsers, 2) : 0 }}</td>
                    <td data-col-group="group-returns">{{ $monthlyWorkingUsers > 0 ? round($returnedTotals['working_returned'] / $monthlyWorkingUsers, 2) : 0 }}</td>
                    <td data-col-group="group-returns">{{ $monthlyWorkingUsers > 0 ? round($returnedTotals['unworking_returned'] / $monthlyWorkingUsers, 2) : 0 }}</td>
                    <td data-col-group="group-returns">{{ $returnedTotals['ratio'] }} %</td>

                    <td data-col-group="group-resend">{{ $monthlyWorkingUsers > 0 ? round(($resendTotals->total / $monthlyWorkingUsers), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $monthlyWorkingUsers > 0 ? round(($resendTotals->accepted / $monthlyWorkingUsers), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $monthlyWorkingUsers > 0 ? round(($resendTotals->delivered / $monthlyWorkingUsers), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $monthlyWorkingUsers > 0 ? round(($resendTotals->returned / $monthlyWorkingUsers), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $monthlyWorkingUsers > 0 ? round(($resendTotals->in_progress / $monthlyWorkingUsers), 2)  : 0}}</td>
                    <td data-col-group="group-resend">{{ $totalR > 0 ? round(($deliveredR / $totalR)* 100, 2) : 0 }} %</td>

                    <td data-col-group="group-recorded">{{ $monthlyWorkingUsers > 0 ? round(($totalRecords->total / $monthlyWorkingUsers), 2)  : 0}}</td>
                    <td data-col-group="group-recorded">{{ $monthlyWorkingUsers > 0 ? round(($totalRecords->delivered / $monthlyWorkingUsers), 2)  : 0}}</td>
                    <td data-col-group="group-recorded">{{ $monthlyWorkingUsers > 0 ? round(($totalRecords->returned / $monthlyWorkingUsers), 2)  : 0}}</td>
                    <td data-col-group="group-recorded">{{ $monthlyWorkingUsers > 0 ? round(($totalRecords->other / $monthlyWorkingUsers), 2)  : 0}}</td>
                    <td data-col-group="group-recorded">{{ $totalX > 0 ? round(($deliveredX / $totalX) * 100, 2) : 0 }} %</td>
                </tr>
              </thead>

              <tbody>
                @if ($viewMode === 'all')
                    @foreach ($dates as $date)
                            <tr>
                                <td class="fixed-col fixed-col-1">الكل</td>
                                <td class="fixed-col fixed-col-2">{{ $date }}</td>
                                
                                @for ($type = 1; $type <= 9; $type++)
                                    <td>{{ $byDay[$date][$type] ?? 0 }}</td>
                                @endfor

                                <td data-col-group="group-overall">{{ $trackStats[$date]->working      ?? 0 }}</td>
                                <td data-col-group="group-overall">{{ $trackStats[$date]->unworking    ?? 0 }}</td>
                                <td data-col-group="group-overall">{{ $trackStats[$date]->assigned     ?? 0 }}</td>
                                <td data-col-group="group-overall">{{ $trackStats[$date]->tries        ?? 0 }}</td>
                                <td data-col-group="group-overall">{{ $trackStats[$date]->executed     ?? 0 }}</td>
                                <td data-col-group="group-overall">{{ $trackStats[$date]->not_executed ?? 0 }}</td>
                                <td data-col-group="group-overall">{{ $trackStats[$date]->confirmed    ?? 0 }}</td>
                                <td data-col-group="group-overall">{{ $orderDailyStats[$date]->delivered ?? 0 }}</td>
                                <td data-col-group="group-overall">{{ $orderDailyStats[$date]->returned  ?? 0 }}</td>
                                <td data-col-group="group-overall">{{ ($trackStats[$date]->executed ?? 0) > 0? round(($trackStats[$date]->confirmed / $trackStats[$date]->executed)* 100, 2)  : 0 }} %</td>
                                <td data-col-group="group-overall">{{ (($trackStats[$date]->not_executed ?? 0 ) + ($trackStats[$date]->executed ?? 0)) > 0 ? round(( ($trackStats[$date]->executed ?? 0 )/ (($trackStats[$date]->not_executed ?? 0 ) + ($trackStats[$date]->executed ?? 0)))* 100, 2)  : 0 }} %</td>
                                <td data-col-group="group-overall">{{(($orderDailyStats[$date]->returned ?? 0) + ($orderDailyStats[$date]->delivered ?? 0)) > 0 ? round(($orderDailyStats[$date]->delivered ?? 0) / (($orderDailyStats[$date]->returned ?? 0) + ($orderDailyStats[$date]->delivered ?? 0))* 100, 2)  : 0}} %</td>

                                <td data-col-group="group-tickets">{{ collect($ticketsByDate[$date] ?? [])->sum() }}</td>

                                @if (auth()->user()->hasRole('super_admin') || auth()->user()->hasRole('admin'))
                                  <td data-col-group="group-performance">{{ $monthlyUsers[$date] ?? 0}}</td>
                                  <td data-col-group="group-performance">{{ (($monthlyUsers[$date] ?? 0) > 0) ? round((($trackStats[$date]->assigned ?? 0)/$monthlyUsers[$date]), 2) : 0 }}</td>
                                  <td data-col-group="group-performance">{{ (($monthlyUsers[$date] ?? 0) > 0) ? round((($trackStats[$date]->tries ?? 0)/$monthlyUsers[$date]), 2) : 0 }}</td>
                                  <td data-col-group="group-performance">{{ (($monthlyUsers[$date] ?? 0) > 0) ? round((($trackStats[$date]->executed ?? 0)/$monthlyUsers[$date]), 2) : 0 }}</td>
                                  <td data-col-group="group-performance">{{ (($monthlyUsers[$date] ?? 0) > 0) ? round((($trackStats[$date]->not_executed ?? 0)/$monthlyUsers[$date]), 2) : 0 }}</td>
                                  <td data-col-group="group-performance">{{ (($monthlyUsers[$date] ?? 0) > 0) ? round((($trackStats[$date]->confirmed ?? 0)/$monthlyUsers[$date]), 2) : 0 }}</td>
                                  <td data-col-group="group-performance">{{ (($monthlyUsers[$date] ?? 0) > 0) ? round((($orderDailyStats[$date]->delivered ?? 0)/$monthlyUsers[$date]), 2) : 0 }}</td>
                                  <td data-col-group="group-performance">{{ (($monthlyUsers[$date] ?? 0) > 0) ? round((($orderDailyStats[$date]->returned ?? 0)/$monthlyUsers[$date]), 2) : 0 }}</td>
                                @endif

                                <td data-col-group="group-returns">{{ $returned[$date]['total'] ?? 0 }}</td>
                                <td data-col-group="group-returns">{{ $returned[$date]['working_returned'] ?? 0 }}</td>
                                <td data-col-group="group-returns">{{ $returned[$date]['unworking_returned'] ?? 0 }}</td>
                                <td data-col-group="group-returns">{{ $returned[$date]['ratio'] ?? 0 }}%</td>

                                <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date]['total'] ?? 0 }}</td>
                                <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date]['accepted'] ?? 0 }}</td>
                                <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date]['delivered'] ?? 0 }}</td>
                                <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date]['returned'] ?? 0 }}</td>
                                <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date]['in_progress'] ?? 0 }}</td>
                                <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date]['ratio'] ?? 0 }} %</td>
                                
                                <td data-col-group="group-recorded">{{ $recorded[$date]['total'] ?? 0 }}</td>
                                <td data-col-group="group-recorded">{{ $recorded[$date]['delivered'] ?? 0 }}</td>
                                <td data-col-group="group-recorded">{{ $recorded[$date]['returned'] ?? 0 }}</td>
                                <td data-col-group="group-recorded">{{ $recorded[$date]['other'] ?? 0 }}</td>
                                <td data-col-group="group-recorded">{{ $recorded[$date]['ratio'] ?? 0 }} %</td>
                            </tr>
                        @endforeach 
                @else
                    @foreach ($dates as $date)
                        @foreach ($displayUsers as $user)
                        <tr>
                            <td class="fixed-col fixed-col-1">{{ $user->first_name }}</td>
                            <td class="fixed-col fixed-col-2">{{ $date }}</td>
                            
                            @for ($type = 1; $type <= 9; $type++)
                                <td>{{ $byDay[$date][$type][$user->id] ?? 0 }}</td>
                            @endfor

                            <td data-col-group="group-overall">{{ $trackStats[$date][$user->id]->working   ?? 0 }}</td>
                            <td data-col-group="group-overall">{{ $trackStats[$date][$user->id]->unworking ?? 0 }}</td>
                            <td data-col-group="group-overall">{{ $trackStats[$date][$user->id]->assigned  ?? 0 }}</td>
                            <td data-col-group="group-overall">{{ $trackStats[$date][$user->id]->tries     ?? 0 }}</td>
                            <td data-col-group="group-overall">{{ $trackStats[$date][$user->id]->executed  ?? 0 }}</td>
                            <td data-col-group="group-overall">{{ $trackStats[$date][$user->id]->not_executed ?? 0 }}</td>
                            <td data-col-group="group-overall">{{ $trackStats[$date][$user->id]->confirmed ?? 0 }}</td>
                            <td data-col-group="group-overall">{{ $orderDailyStats[$date][$user->id]->delivered ?? 0 }}</td>
                            <td data-col-group="group-overall">{{ $orderDailyStats[$date][$user->id]->returned  ?? 0 }}</td>
                            <td data-col-group="group-overall">{{ ($trackStats[$date][$user->id]->executed ?? 0) > 0? round(($trackStats[$date][$user->id]->confirmed / $trackStats[$date][$user->id]->executed)* 100, 2)  : 0 }} %</td>
                            <td data-col-group="group-overall">{{ (($trackStats[$date][$user->id]->not_executed ?? 0 ) + ($trackStats[$date][$user->id]->executed ?? 0)) > 0 ? round(( ($trackStats[$date][$user->id]->executed ?? 0 )/ (($trackStats[$date][$user->id]->not_executed ?? 0 ) + ($trackStats[$date][$user->id]->executed ?? 0)))* 100, 2)  : 0 }} %</td>
                            <td data-col-group="group-overall">{{(($orderDailyStats[$date][$user->id]->returned ?? 0) + ($orderDailyStats[$date][$user->id]->delivered ?? 0)) > 0 ? round(($orderDailyStats[$date][$user->id]->delivered ?? 0) / (($orderDailyStats[$date][$user->id]->returned ?? 0) + ($orderDailyStats[$date][$user->id]->delivered ?? 0))* 100, 2)  : 0}} %</td>

                            <td data-col-group="group-tickets">{{ $ticketsByDate[$date][$user->id] ?? 0 }}</td>

                            @if (auth()->user()->hasRole('super_admin') || auth()->user()->hasRole('admin'))
                              <td data-col-group="group-performance">{{ $monthlyUsers[$date][$user->id] ?? 0 }}</td>
                              <td data-col-group="group-performance">{{ (($monthlyUsers[$date][$user->id] ?? 0) > 0) ? round((($trackStats[$date][$user->id]->assigned ?? 0)/$monthlyUsers[$date][$user->id]), 2) : 0 }}</td>
                              <td data-col-group="group-performance">{{ (($monthlyUsers[$date][$user->id] ?? 0) > 0) ? round((($trackStats[$date][$user->id]->tries ?? 0)/$monthlyUsers[$date][$user->id]), 2) : 0 }}</td>
                              <td data-col-group="group-performance">{{ (($monthlyUsers[$date][$user->id] ?? 0) > 0) ? round((($trackStats[$date][$user->id]->executed ?? 0)/$monthlyUsers[$date][$user->id]), 2) : 0 }}</td>
                              <td data-col-group="group-performance">{{ (($monthlyUsers[$date][$user->id] ?? 0) > 0) ? round((($trackStats[$date][$user->id]->not_executed ?? 0)/$monthlyUsers[$date][$user->id]), 2) : 0 }}</td>
                              <td data-col-group="group-performance">{{ (($monthlyUsers[$date][$user->id] ?? 0) > 0) ? round((($trackStats[$date][$user->id]->confirmed ?? 0)/$monthlyUsers[$date][$user->id]), 2) : 0 }}</td>
                              <td data-col-group="group-performance">{{ (($monthlyUsers[$date][$user->id] ?? 0) > 0) ? round((($orderDailyStats[$date][$user->id]->delivered ?? 0)/$monthlyUsers[$date][$user->id]), 2) : 0 }}</td>
                              <td data-col-group="group-performance">{{ (($monthlyUsers[$date][$user->id] ?? 0) > 0) ? round((($orderDailyStats[$date][$user->id]->returned ?? 0)/$monthlyUsers[$date][$user->id]), 2) : 0 }}</td>
                            @endif

                            <td data-col-group="group-returns">{{ $returned[$date][$user->id]['total'] ?? 0}}</td>
                            <td data-col-group="group-returns">{{ $returned[$date][$user->id]['working_returned'] ?? 0}}</td>
                            <td data-col-group="group-returns">{{ $returned[$date][$user->id]['unworking_returned'] ?? 0}}</td>
                            <td data-col-group="group-returns">{{ $returned[$date][$user->id]['ratio'] ?? 0}} %</td>

                            <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date][$user->id]['total'] ?? 0 }}</td>
                            <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date][$user->id]['accepted'] ?? 0 }}</td>
                            <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date][$user->id]['delivered'] ?? 0 }}</td>
                            <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date][$user->id]['returned'] ?? 0 }}</td>
                            <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date][$user->id]['in_progress'] ?? 0 }}</td>
                            <td data-col-group="group-resend" style="background: #6876DF;color: white;">{{ $resendDaily[$date][$user->id]['ratio'] ?? 0 }} %</td>

                            <td data-col-group="group-recorded">{{ $recorded[$date][$user->id]['total'] ?? 0 }}</td>
                            <td data-col-group="group-recorded">{{ $recorded[$date][$user->id]['delivered'] ?? 0 }}</td>
                            <td data-col-group="group-recorded">{{ $recorded[$date][$user->id]['returned'] ?? 0 }}</td>
                            <td data-col-group="group-recorded">{{ $recorded[$date][$user->id]['other'] ?? 0 }}</td>
                            <td data-col-group="group-recorded">{{ $recorded[$date][$user->id]['ratio'] ?? 0 }} %</td>
                        </tr>
                        @endforeach
                    @endforeach  
                @endif  
              </tbody>
            </table>
            
          </div>
        </div>
        
    </div>   
</div>
@endsection
@push('js')
<script>
  document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.data-table');
  const collapsedGroups = new Set();

  table.querySelectorAll('th.col-group-header').forEach(function(header) {
    header.style.cursor = 'pointer';
    header.addEventListener('click', function() {
      toggleGroup(header.getAttribute('data-group'));
    });
  });

  table.querySelectorAll('th.col-group-placeholder').forEach(function(ph) {
    ph.addEventListener('click', function() {
      toggleGroup(ph.getAttribute('data-group'));
    });
  });

  function toggleGroup(groupId) {
    if (collapsedGroups.has(groupId)) expandGroup(groupId);
    else collapseGroup(groupId);
  }

  function collapseGroup(groupId) {
    collapsedGroups.add(groupId);
    const header = table.querySelector('th.col-group-header[data-group="' + groupId + '"]');
    const placeholder = table.querySelector('th.col-group-placeholder[data-group="' + groupId + '"]');
    const subCells = table.querySelectorAll('[data-col-group="' + groupId + '"]');
    if (header) { header.style.display = 'none'; header.classList.add('is-collapsed'); }
    if (placeholder) { placeholder.style.display = ''; }
    subCells.forEach(function(cell) { cell.style.display = 'none'; });
  }

  function expandGroup(groupId) {
    collapsedGroups.delete(groupId);
    const header = table.querySelector('th.col-group-header[data-group="' + groupId + '"]');
    const placeholder = table.querySelector('th.col-group-placeholder[data-group="' + groupId + '"]');
    const subCells = table.querySelectorAll('[data-col-group="' + groupId + '"]');
    if (header) { header.style.display = ''; header.classList.remove('is-collapsed'); }
    if (placeholder) { placeholder.style.display = 'none'; }
    subCells.forEach(function(cell) { cell.style.display = ''; });
  }

  // Hide all placeholders on load
  table.querySelectorAll('th.col-group-placeholder').forEach(function(p) {
    p.style.display = 'none';
  });
});
</script>
<script>
document.addEventListener('DOMContentLoaded', function () {
  const thead = document.querySelector('.data-table thead');
  const btn = document.getElementById('summaryToggleBtn');
  const label = document.getElementById('summaryToggleLabel');
  const toggleRow = document.getElementById('summaryToggleRow');

  // Start collapsed — hide summary rows, show toggle row
  thead.classList.add('summary-rows-collapsed');
  toggleRow.style.display = '';

  btn.addEventListener('click', function () {
    const isCollapsed = thead.classList.contains('summary-rows-collapsed');
    const rows = thead.querySelectorAll('.summary-row');

    if (isCollapsed) {
      // Show summary rows, hide toggle row
      toggleRow.style.display = 'none';
      thead.classList.remove('summary-rows-collapsed');
      rows.forEach(row => {
        row.style.display = '';
        row.style.opacity = '0';
        row.style.transform = 'translateY(-6px)';
        void row.offsetHeight;
        row.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        row.style.opacity = '1';
        row.style.transform = 'translateY(0)';
      });
      // Add a close button inside each summary row's first cell? No — add a hide button after rows
      // Instead show a small "إخفاء" link in the toggle row when visible
      btn.classList.remove('collapsed');
      label.textContent = 'إخفاء الإجماليات';
    } else {
      // Hide summary rows, show toggle row
      rows.forEach(row => {
        row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        row.style.opacity = '0';
        row.style.transform = 'translateY(-6px)';
      });
      setTimeout(() => {
        thead.classList.add('summary-rows-collapsed');
        rows.forEach(row => {
          row.style.opacity = '';
          row.style.transform = '';
          row.style.transition = '';
        });
        toggleRow.style.display = '';
      }, 310);
      btn.classList.add('collapsed');
      label.textContent = 'إظهار الإجماليات';
    }
  });
});
</script>
<script src="{{ asset('dashboard_files/select2/select2.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('#userSelect').select2({
                placeholder: 'اختر موظفاً أو أكثر',
                allowClear: true,
                width: '100%'
            });
        });
    </script>
<script>

    document.addEventListener('DOMContentLoaded', function () {

        const filterBtn     = document.getElementById('filterBtn');
        const resetBtn      = document.getElementById('resetBtn');
        const startInput    = document.getElementById('startDate');
        const endInput      = document.getElementById('endDate');
        const userSelect    = document.getElementById('userSelect');
        const viewModeSelect = document.getElementById('viewModeSelect');


        if (endInput && !endInput.value) {
            const today = new Date();
            const y = today.getFullYear();
            const m = String(today.getMonth() + 1).padStart(2, '0');
            const lastDay = new Date(y, today.getMonth() + 1, 0).getDate();
            endInput.value = `${y}-${m}-${String(lastDay).padStart(2, '0')}`;
        }

        if (filterBtn) {
          filterBtn.addEventListener('click', function () {
              const url = new URL(window.location.href);
              url.searchParams.delete('start');
              url.searchParams.delete('end');
              url.searchParams.delete('user_id[]');
              url.searchParams.delete('view_mode');

              const startVal    = startInput?.value?.trim()    || '';
              const endVal      = endInput?.value?.trim()      || '';
              const viewModeVal = viewModeSelect?.value?.trim() || 'details';

              if (startVal)    url.searchParams.set('start', startVal);
              if (endVal)      url.searchParams.set('end', endVal);
              if (viewModeVal) url.searchParams.set('view_mode', viewModeVal);

              if (userSelect && userSelect.multiple) {
                  const selectedUsers = Array.from(userSelect.selectedOptions).map(opt => opt.value);
                  selectedUsers.forEach(userId => {
                      url.searchParams.append('user_id[]', userId);
                  });
              }

              window.location.href = url.toString();
          });
      }

      if (resetBtn) {
          resetBtn.addEventListener('click', function () {
              $('#userSelect').val(null).trigger('change');
              window.location.href = window.location.pathname;
          });
      }



    });
    
    const exportBtn = document.getElementById('exportBtn');
      if (exportBtn) {
          exportBtn.addEventListener('click', function () {
              const url = new URL('{{ route("dashboard.shipping.daily-report.export") }}', window.location.origin);
              const params = new URLSearchParams(window.location.search);
              url.search = params.toString();
              window.location.href = url.toString();
          });
      }
</script>
@endpush