// Copyright (c) 2020, Hardik gadesha and contributors
// For license information, please see license.txt

frappe.ui.form.on('Attendance Policies', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Attendance Policies', {
        run_holiday_earning(frm) {
    frappe.call({
        "method": "hr_policies.custom_validate.add_holiday_earning_manual",
        args: {
            from_date: frm.doc.from_holiday_date,
            to_date: frm.doc.to_holiday_date
        },
        callback:function(r){
            msgprint("Additional Salary Generated Against Employee Works On Holidays From : "+frm.doc.from_holiday_date+" To " + frm.doc.to_holiday_date);
    }
});
}
});


frappe.ui.form.on('Attendance Policies', {
        run_late_entry_penalty(frm) {
    frappe.call({
        "method": "hr_policies.custom_validate.add_penalty",
        args: {
            from_date: frm.doc.from_late_entry_date,
            to_date: frm.doc.to_late_entry_date
        },
        callback:function(r){
            msgprint("Additional Salary Generated For Employee Penalty From : "+frm.doc.from_late_entry_date+" To " + frm.doc.to_late_entry_date);
    }
});
}
});
