(function(){
'use strict';
var $cljs$core$string_QMARK_$$ = function($x$jscomp$113$$) {
  return "string" === $APP.$goog$typeOf$$($x$jscomp$113$$);
}, $cljs$core$not_any_QMARK_$$ = function($pred$jscomp$5$$, $coll$jscomp$277$$) {
  return $APP.$cljs$core$not$$($APP.$cljs$core$some$$($pred$jscomp$5$$, $coll$jscomp$277$$));
}, $sensei$frontend$widget$form$group$$ = function($label$jscomp$19$$, $content$jscomp$19$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1349$div_DOT_form_group_DOT_mb_5$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1350$h6_DOT_mb_3$$, $label$jscomp$19$$], null), $content$jscomp$19$$], null);
}, $sensei$frontend$widget$form$numeric_input$$ = function($map__61424__$1_p__61423$$) {
  $map__61424__$1_p__61423$$ = $APP.$cljs$core$__destructure_map$$($map__61424__$1_p__61423$$);
  var $label$jscomp$21$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61424__$1_p__61423$$, $APP.$cljs$cst$836$label$$), $on_change$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61424__$1_p__61423$$, $APP.$cljs$cst$933$on_change$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($label$jscomp$21$$) ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1357$label_DOT_form_check_label$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$form_label$$, $label$jscomp$21$$], null)], 
  null) : null, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1322$input$$, $APP.$cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$select_keys$$($map__61424__$1_p__61423$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1139$step$$, $APP.$cljs$cst$1359$min$$, $APP.$cljs$cst$520$max$$, 
  $APP.$cljs$cst$172$value$$], null)), $APP.$cljs$core$truth_$$($on_change$jscomp$2$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$933$on_change$$, function($new_value$jscomp$9_p1__61421_SHARP_$$) {
    $new_value$jscomp$9_p1__61421_SHARP_$$ = $APP.$tools$parse$float$0$$($new_value$jscomp$9_p1__61421_SHARP_$$.target.value);
    return $on_change$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_change$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$($new_value$jscomp$9_p1__61421_SHARP_$$) : $on_change$jscomp$2$$.call(null, $new_value$jscomp$9_p1__61421_SHARP_$$);
  }], null) : null, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$1294$number$$], null)]))], null)], null);
}, $sensei$frontend$widget$form$datepicker$$ = function($map__61628__$1_p__61627$$) {
  $map__61628__$1_p__61627$$ = $APP.$cljs$core$__destructure_map$$($map__61628__$1_p__61627$$);
  var $value$jscomp$332$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61628__$1_p__61627$$, $APP.$cljs$cst$172$value$$), $on_change$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61628__$1_p__61627$$, $APP.$cljs$cst$933$on_change$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1394$div_DOT_form_check_inline$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$1395$margin_top$$, "0.05rem", $APP.$cljs$cst$1387$margin_left$$, "0.4rem"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1322$input$$, 
  new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$990$date$$, $APP.$cljs$cst$1275$field$$, $APP.$cljs$cst$368$text$$, $APP.$cljs$cst$172$value$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($value$jscomp$332$$), $APP.$cljs$cst$933$on_change$$, function($e$jscomp$258_text$jscomp$78$$) {
    $e$jscomp$258_text$jscomp$78$$ = $e$jscomp$258_text$jscomp$78$$.target.value;
    return $on_change$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_change$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$258_text$jscomp$78$$) : $on_change$jscomp$9$$.call(null, $e$jscomp$258_text$jscomp$78$$);
  }], null)], null)], null);
}, $sensei$frontend$widget$date_range$date_range_select$$ = function($prefix$jscomp$36$$) {
  return $cljs$core$not_any_QMARK_$$($APP.$cljs$core$nil_QMARK_$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5503$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_form_date_range$$, $prefix$jscomp$36$$], null)))) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1368$div_DOT_d_flex_DOT_flex_wrap_DOT_align_items_center$$, 
  new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$reagent_forms$core$bind_fields$$, new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, "From", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5508$input_DOT_mx_2$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$990$date$$, 
  $APP.$cljs$cst$1275$field$$, $APP.$cljs$cst$368$text$$, $APP.$cljs$cst$116$id$$, $cljs$cst$5509$from_date$$], null)], null), "to", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5508$input_DOT_mx_2$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$990$date$$, $APP.$cljs$cst$1275$field$$, $APP.$cljs$cst$368$text$$, $APP.$cljs$cst$116$id$$, $cljs$cst$5510$to_date$$], null)], null)], null), $APP.$sensei$frontend$widget$form$reagent_forms_events$$(function() {
    var $to_date_vec__70523$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5503$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_form_date_range$$, $prefix$jscomp$36$$], null))), $from_date$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date_vec__70523$$, 0, null);
    $to_date_vec__70523$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date_vec__70523$$, 1, null);
    return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$5509$from_date$$, $APP.$tools$date$__GT_day_str$$($from_date$$), $cljs$cst$5510$to_date$$, $APP.$tools$date$__GT_day_str$$($to_date_vec__70523$$)], null);
  }, function($from_date$jscomp$1_from_date__$1_p__70526$$) {
    var $map__70527__$1_to_date$jscomp$1_to_date__$1$$ = $APP.$cljs$core$__destructure_map$$($from_date$jscomp$1_from_date__$1_p__70526$$);
    $from_date$jscomp$1_from_date__$1_p__70526$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70527__$1_to_date$jscomp$1_to_date__$1$$, $cljs$cst$5509$from_date$$);
    $map__70527__$1_to_date$jscomp$1_to_date__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70527__$1_to_date$jscomp$1_to_date__$1$$, $cljs$cst$5510$to_date$$);
    $from_date$jscomp$1_from_date__$1_p__70526$$ = $APP.$cljs$core$empty_QMARK_$$($from_date$jscomp$1_from_date__$1_p__70526$$) ? null : $APP.$tools$date$_LT__str$$($from_date$jscomp$1_from_date__$1_p__70526$$);
    $map__70527__$1_to_date$jscomp$1_to_date__$1$$ = $APP.$cljs$core$empty_QMARK_$$($map__70527__$1_to_date$jscomp$1_to_date__$1$$) ? null : $APP.$tools$date$_LT__str$$($map__70527__$1_to_date$jscomp$1_to_date__$1$$);
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5504$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_set_tmp_date_range$$, $prefix$jscomp$36$$, $from_date$jscomp$1_from_date__$1_p__70526$$, $map__70527__$1_to_date$jscomp$1_to_date__$1$$], null));
  })], null), function() {
    var $hide_buttons_QMARK_$jscomp$1$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $prefix$jscomp$36$$], null))), $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
    [$cljs$cst$5503$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_form_date_range$$, $prefix$jscomp$36$$], null))));
    return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5511$button_DOT_btn_DOT_btn_sm_DOT_btn_primary_DOT_ms_3$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$68$class$$, $hide_buttons_QMARK_$jscomp$1$$ ? $APP.$cljs$cst$1356$invisible$$ : null, $APP.$cljs$cst$821$on_click$$, function() {
      return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5506$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_update_date_range$$, $prefix$jscomp$36$$], null));
    }], null), "Update"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5512$button_DOT_btn_DOT_btn_sm_DOT_btn_secondary_DOT_ms_1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$68$class$$, $hide_buttons_QMARK_$jscomp$1$$ ? $APP.$cljs$cst$1356$invisible$$ : null, $APP.$cljs$cst$821$on_click$$, function() {
      return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5507$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_cancel_date_range$$, $prefix$jscomp$36$$], null));
    }], null), "Cancel"], null)], null);
  }()], null) : null;
}, $sensei$frontend$admin$game_analysis$hex_color$$ = function($int_color$$) {
  return $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$3$($APP.$cljs$core$str$$, "#", $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70643_SHARP_$$) {
    return $p1__70643_SHARP_$$.toString(16).padStart(2, "0");
  }, $int_color$$));
}, $sensei$frontend$admin$game_analysis$int_color$$ = function($hex_color$jscomp$1_matches$jscomp$11$$) {
  $hex_color$jscomp$1_matches$jscomp$11$$ = $APP.$cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$(1, $APP.$cljs$core$re_matches$$(/#(.)(.)(.)/, $hex_color$jscomp$1_matches$jscomp$11$$));
  return $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70673_SHARP_$$) {
    return $p1__70673_SHARP_$$ * 17;
  }, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70672_SHARP_$$) {
    return parseInt($p1__70672_SHARP_$$, 16);
  }, $hex_color$jscomp$1_matches$jscomp$11$$));
}, $sensei$frontend$admin$game_analysis$percentile_colors_for_field$$ = function($from$jscomp$24$$, $to$jscomp$26$$, $field$jscomp$21$$) {
  return $APP.$cljs$core$zipmap$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70687_SHARP_$$) {
    return "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$empty_QMARK_$$($field$jscomp$21$$) ? null : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($field$jscomp$21$$) + "-") + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($p1__70687_SHARP_$$) + "%";
  }, $sensei$frontend$admin$game_analysis$default_percentiles$$), $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($index$jscomp$171$$) {
    var $fraction$jscomp$1$$ = ($index$jscomp$171$$ + 1) / $APP.$cljs$core$count$$($sensei$frontend$admin$game_analysis$default_percentiles$$);
    return $sensei$frontend$admin$game_analysis$hex_color$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$(function($p1__70688_SHARP_$$, $p2__70689_SHARP_$$) {
      return Math.round($p1__70688_SHARP_$$ * $fraction$jscomp$1$$ + $p2__70689_SHARP_$$ * (1.0 - $fraction$jscomp$1$$));
    }, $from$jscomp$24$$, $to$jscomp$26$$));
  }, $sensei$frontend$admin$game_analysis$default_percentiles$$));
}, $sensei$frontend$admin$game_analysis$percentile_colors$$ = function($fields$jscomp$8$$) {
  return $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$3$($APP.$cljs$core$merge$$, $APP.$cljs$core$PersistentArrayMap$EMPTY$$, function() {
    return function $sensei$frontend$admin$game_analysis$percentile_colors_$_iter__70706$$($s__70707$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$416$$ = $APP.$cljs$core$seq$$($s__70707$$);
          if ($temp__5823__auto__$jscomp$416$$) {
            var $s__70707__$2$$ = $temp__5823__auto__$jscomp$416$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70707__$2$$)) {
              var $c__5626__auto__$jscomp$137$$ = $APP.$cljs$core$_chunked_first$$($s__70707__$2$$), $size__5627__auto__$jscomp$137$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$137$$), $b__70709$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$137$$);
              return function() {
                for (var $i__70708$$ = 0;;) {
                  if ($i__70708$$ < $size__5627__auto__$jscomp$137$$) {
                    var $field$jscomp$23$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$137$$, $i__70708$$);
                    $APP.$cljs$core$chunk_append$$($b__70709$$, function() {
                      var $temp__5823__auto____$1$jscomp$44$$ = function() {
                        var $G__70727_G__70727__$1$$ = $field$jscomp$23$$;
                        $G__70727_G__70727__$1$$ = $G__70727_G__70727__$1$$ == null ? null : $sensei$frontend$admin$game_analysis$colors$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$game_analysis$colors$$.$cljs$core$IFn$_invoke$arity$1$($G__70727_G__70727__$1$$) : $sensei$frontend$admin$game_analysis$colors$$.call(null, $G__70727_G__70727__$1$$);
                        return $G__70727_G__70727__$1$$ == null ? null : $sensei$frontend$admin$game_analysis$int_color$$($G__70727_G__70727__$1$$);
                      }();
                      return $APP.$cljs$core$truth_$$($temp__5823__auto____$1$jscomp$44$$) ? $sensei$frontend$admin$game_analysis$percentile_colors_for_field$$($temp__5823__auto____$1$jscomp$44$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function() {
                        return function($p1__70705_SHARP_$$) {
                          return 127.5 + 0.5 * $p1__70705_SHARP_$$;
                        };
                      }($i__70708$$, $temp__5823__auto____$1$jscomp$44$$, $temp__5823__auto____$1$jscomp$44$$, $field$jscomp$23$$, $c__5626__auto__$jscomp$137$$, $size__5627__auto__$jscomp$137$$, $b__70709$$, $s__70707__$2$$, $temp__5823__auto__$jscomp$416$$), $temp__5823__auto____$1$jscomp$44$$), $field$jscomp$23$$) : null;
                    }());
                    $i__70708$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70709$$), $sensei$frontend$admin$game_analysis$percentile_colors_$_iter__70706$$($APP.$cljs$core$_chunked_rest$$($s__70707__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70709$$), null);
            }
            var $field$jscomp$22$$ = $APP.$cljs$core$first$$($s__70707__$2$$);
            return $APP.$cljs$core$cons$$(function() {
              var $temp__5823__auto____$1$jscomp$46$$ = function() {
                var $G__70748_G__70748__$1$$ = $field$jscomp$22$$;
                $G__70748_G__70748__$1$$ = $G__70748_G__70748__$1$$ == null ? null : $sensei$frontend$admin$game_analysis$colors$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$game_analysis$colors$$.$cljs$core$IFn$_invoke$arity$1$($G__70748_G__70748__$1$$) : $sensei$frontend$admin$game_analysis$colors$$.call(null, $G__70748_G__70748__$1$$);
                return $G__70748_G__70748__$1$$ == null ? null : $sensei$frontend$admin$game_analysis$int_color$$($G__70748_G__70748__$1$$);
              }();
              return $APP.$cljs$core$truth_$$($temp__5823__auto____$1$jscomp$46$$) ? $sensei$frontend$admin$game_analysis$percentile_colors_for_field$$($temp__5823__auto____$1$jscomp$46$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function() {
                return function($p1__70705_SHARP_$jscomp$1$$) {
                  return 127.5 + 0.5 * $p1__70705_SHARP_$jscomp$1$$;
                };
              }($temp__5823__auto____$1$jscomp$46$$, $temp__5823__auto____$1$jscomp$46$$, $field$jscomp$22$$, $s__70707__$2$$, $temp__5823__auto__$jscomp$416$$), $temp__5823__auto____$1$jscomp$46$$), $field$jscomp$22$$) : null;
            }(), $sensei$frontend$admin$game_analysis$percentile_colors_$_iter__70706$$($APP.$cljs$core$rest$$($s__70707__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($fields$jscomp$8$$);
  }());
}, $sensei$frontend$admin$game_analysis$percentage_graph$$ = function($chart_data_label$jscomp$70$$, $getter$$) {
  $chart_data_label$jscomp$70$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5514$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_simple_chart_data$$, $chart_data_label$jscomp$70$$, $getter$$], null));
  return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data_label$jscomp$70$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data_label$jscomp$70$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$game_analysis$chart_size$$, $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$game_analysis$colors$$, $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$, 
  $APP.$cljs$cst$4646$axis$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$1089$x$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$5410$timeseries$$], null), $APP.$cljs$cst$1090$y$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1359$min$$, 0, $APP.$cljs$cst$4749$padding$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1119$bottom$$, 0], null), $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$569$linear$$, 
  $APP.$cljs$cst$4650$tick$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$771$format$$, $APP.$cljs$core$identity$$], null)], null)], null)], null)], null) : null;
}, $sensei$frontend$admin$game_analysis$playout_time_graph$$ = function($playouts$jscomp$2$$) {
  var $chart_data$jscomp$1$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5515$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_playout_time_chart_data$$, $playouts$jscomp$2$$], null)), $colors$jscomp$1$$ = $sensei$frontend$admin$game_analysis$percentile_colors$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["" + 
  $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($playouts$jscomp$2$$)], null));
  return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data$jscomp$1$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data$jscomp$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$game_analysis$chart_size$$, $APP.$cljs$cst$5405$colors$$, $colors$jscomp$1$$, $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$, $APP.$cljs$cst$1341$grid$$, 
  new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1090$y$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$588$lines$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$172$value$$, $sensei$frontend$admin$game_analysis$max_allowed_seconds$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$game_analysis$max_allowed_seconds$$.$cljs$core$IFn$_invoke$arity$1$($playouts$jscomp$2$$) : 
  $sensei$frontend$admin$game_analysis$max_allowed_seconds$$.call(null, $playouts$jscomp$2$$), $APP.$cljs$cst$368$text$$, "Goal", $APP.$cljs$cst$68$class$$, $cljs$cst$5516$max_allowed_time$$], null)], null)], null)], null), $APP.$cljs$cst$4646$axis$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$1089$x$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$5410$timeseries$$], null), $APP.$cljs$cst$1090$y$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  5, [$APP.$cljs$cst$1359$min$$, 0, $APP.$cljs$cst$520$max$$, 6 * ($sensei$frontend$admin$game_analysis$max_allowed_seconds$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$game_analysis$max_allowed_seconds$$.$cljs$core$IFn$_invoke$arity$1$($playouts$jscomp$2$$) : $sensei$frontend$admin$game_analysis$max_allowed_seconds$$.call(null, $playouts$jscomp$2$$)), $APP.$cljs$cst$4749$padding$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1119$bottom$$, 0], null), $APP.$cljs$cst$25$type$$, 
  $APP.$cljs$cst$569$linear$$, $APP.$cljs$cst$4650$tick$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$771$format$$, function($x$jscomp$1137$$) {
    return $x$jscomp$1137$$ < 60 ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$1137$$) + "s" : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$tools$math$round_1$$($x$jscomp$1137$$ / 60)) + "min";
  }], null)], null)], null)], null)], null) : null;
}, $sensei$frontend$admin$domain_visits$domain_visits_table$$ = function() {
  var $data$jscomp$263$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5522$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_domain_visits_data$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5523$table_DOT_table_DOT_table_sm_DOT_table_striped_DOT_border_DOT_border_dark$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1258$thead$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 
  5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, "Domain"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, "Visits"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, "Percentage"], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$1263$tbody$$, function() {
    return function $sensei$frontend$admin$domain_visits$domain_visits_table_$_iter__70633$$($s__70634$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__70634__$2_temp__5823__auto__$jscomp$422$$ = $APP.$cljs$core$seq$$($s__70634$$);
          if ($s__70634__$2_temp__5823__auto__$jscomp$422$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70634__$2_temp__5823__auto__$jscomp$422$$)) {
              var $JSCompiler_inline_result$jscomp$960_c__5626__auto__$jscomp$140_count$jscomp$71$$ = $APP.$cljs$core$_chunked_first$$($s__70634__$2_temp__5823__auto__$jscomp$422$$), $map__70642__$1_percent$jscomp$4_size__5627__auto__$jscomp$140$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$960_c__5626__auto__$jscomp$140_count$jscomp$71$$), $b__70636_domain$jscomp$3_map__70642$$ = $APP.$cljs$core$chunk_buffer$$($map__70642__$1_percent$jscomp$4_size__5627__auto__$jscomp$140$$);
              a: {
                for (var $i__70635$jscomp$inline_4517$$ = 0;;) {
                  if ($i__70635$jscomp$inline_4517$$ < $map__70642__$1_percent$jscomp$4_size__5627__auto__$jscomp$140$$) {
                    var $domain$jscomp$inline_4520_map__70641$jscomp$inline_4518_x$jscomp$inline_6683$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$960_c__5626__auto__$jscomp$140_count$jscomp$71$$, $i__70635$jscomp$inline_4517$$), $b$jscomp$inline_6682_map__70641__$1$jscomp$inline_4519$$ = $APP.$cljs$core$__destructure_map$$($domain$jscomp$inline_4520_map__70641$jscomp$inline_4518_x$jscomp$inline_6683$$);
                    $domain$jscomp$inline_4520_map__70641$jscomp$inline_4518_x$jscomp$inline_6683$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6682_map__70641__$1$jscomp$inline_4519$$, $APP.$cljs$cst$1178$domain$$);
                    var $count$jscomp$inline_4521$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6682_map__70641__$1$jscomp$inline_4519$$, $APP.$cljs$cst$645$count$$), $percent$jscomp$inline_4522$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6682_map__70641__$1$jscomp$inline_4519$$, $APP.$cljs$cst$2252$percent$$);
                    $b$jscomp$inline_6682_map__70641__$1$jscomp$inline_4519$$ = $b__70636_domain$jscomp$3_map__70642$$;
                    $domain$jscomp$inline_4520_map__70641$jscomp$inline_4518_x$jscomp$inline_6683$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $domain$jscomp$inline_4520_map__70641$jscomp$inline_4518_x$jscomp$inline_6683$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
                    2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $count$jscomp$inline_4521$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $percent$jscomp$inline_4522$$, "%"], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $domain$jscomp$inline_4520_map__70641$jscomp$inline_4518_x$jscomp$inline_6683$$], null));
                    $b$jscomp$inline_6682_map__70641__$1$jscomp$inline_4519$$.add($domain$jscomp$inline_4520_map__70641$jscomp$inline_4518_x$jscomp$inline_6683$$);
                    $i__70635$jscomp$inline_4517$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$960_c__5626__auto__$jscomp$140_count$jscomp$71$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$960_c__5626__auto__$jscomp$140_count$jscomp$71$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$960_c__5626__auto__$jscomp$140_count$jscomp$71$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70636_domain$jscomp$3_map__70642$$), $sensei$frontend$admin$domain_visits$domain_visits_table_$_iter__70633$$($APP.$cljs$core$_chunked_rest$$($s__70634__$2_temp__5823__auto__$jscomp$422$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70636_domain$jscomp$3_map__70642$$), null);
            }
            $b__70636_domain$jscomp$3_map__70642$$ = $APP.$cljs$core$first$$($s__70634__$2_temp__5823__auto__$jscomp$422$$);
            $map__70642__$1_percent$jscomp$4_size__5627__auto__$jscomp$140$$ = $APP.$cljs$core$__destructure_map$$($b__70636_domain$jscomp$3_map__70642$$);
            $b__70636_domain$jscomp$3_map__70642$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70642__$1_percent$jscomp$4_size__5627__auto__$jscomp$140$$, $APP.$cljs$cst$1178$domain$$);
            $JSCompiler_inline_result$jscomp$960_c__5626__auto__$jscomp$140_count$jscomp$71$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70642__$1_percent$jscomp$4_size__5627__auto__$jscomp$140$$, $APP.$cljs$cst$645$count$$);
            $map__70642__$1_percent$jscomp$4_size__5627__auto__$jscomp$140$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70642__$1_percent$jscomp$4_size__5627__auto__$jscomp$140$$, $APP.$cljs$cst$2252$percent$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $b__70636_domain$jscomp$3_map__70642$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $JSCompiler_inline_result$jscomp$960_c__5626__auto__$jscomp$140_count$jscomp$71$$], 
            null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $map__70642__$1_percent$jscomp$4_size__5627__auto__$jscomp$140$$, "%"], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__70636_domain$jscomp$3_map__70642$$], null)), $sensei$frontend$admin$domain_visits$domain_visits_table_$_iter__70633$$($APP.$cljs$core$rest$$($s__70634__$2_temp__5823__auto__$jscomp$422$$)));
          }
          return null;
        }
      }, null, null);
    }($data$jscomp$263$$);
  }()], null)], null);
}, $sensei$frontend$admin$domain_visits$raw_referral_table$$ = function() {
  var $data$jscomp$264$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5524$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_raw_referral_data$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5523$table_DOT_table_DOT_table_sm_DOT_table_striped_DOT_border_DOT_border_dark$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1258$thead$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 
  5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, "Referrer"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, "Count"], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1263$tbody$$, function() {
    return function $sensei$frontend$admin$domain_visits$raw_referral_table_$_iter__70644$$($s__70645$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__70645__$2_temp__5823__auto__$jscomp$423$$ = $APP.$cljs$core$seq$$($s__70645$$);
          if ($s__70645__$2_temp__5823__auto__$jscomp$423$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70645__$2_temp__5823__auto__$jscomp$423$$)) {
              var $JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$ = $APP.$cljs$core$_chunked_first$$($s__70645__$2_temp__5823__auto__$jscomp$423$$), $size__5627__auto__$jscomp$141$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$), $b__70647_referrer$jscomp$2$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$141$$);
              a: {
                for (var $i__70646$jscomp$inline_4524$$ = 0;;) {
                  if ($i__70646$jscomp$inline_4524$$ < $size__5627__auto__$jscomp$141$$) {
                    var $b$jscomp$inline_6685_vec__70652$jscomp$inline_4525$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$, $i__70646$jscomp$inline_4524$$), $referrer$jscomp$inline_4526_x$jscomp$inline_6686$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6685_vec__70652$jscomp$inline_4525$$, 0, null), $count$jscomp$inline_4527$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6685_vec__70652$jscomp$inline_4525$$, 
                    1, null);
                    $b$jscomp$inline_6685_vec__70652$jscomp$inline_4525$$ = $b__70647_referrer$jscomp$2$$;
                    $referrer$jscomp$inline_4526_x$jscomp$inline_6686$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $referrer$jscomp$inline_4526_x$jscomp$inline_6686$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                    [$APP.$cljs$cst$2734$td$$, $count$jscomp$inline_4527$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $referrer$jscomp$inline_4526_x$jscomp$inline_6686$$], null));
                    $b$jscomp$inline_6685_vec__70652$jscomp$inline_4525$$.add($referrer$jscomp$inline_4526_x$jscomp$inline_6686$$);
                    $i__70646$jscomp$inline_4524$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70647_referrer$jscomp$2$$), $sensei$frontend$admin$domain_visits$raw_referral_table_$_iter__70644$$($APP.$cljs$core$_chunked_rest$$($s__70645__$2_temp__5823__auto__$jscomp$423$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70647_referrer$jscomp$2$$), null);
            }
            $JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$ = $APP.$cljs$core$first$$($s__70645__$2_temp__5823__auto__$jscomp$423$$);
            $b__70647_referrer$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$, 0, null);
            $JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$, 1, null);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $b__70647_referrer$jscomp$2$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $JSCompiler_inline_result$jscomp$961_c__5626__auto__$jscomp$141_count$jscomp$73_vec__70655$$], 
            null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__70647_referrer$jscomp$2$$], null)), $sensei$frontend$admin$domain_visits$raw_referral_table_$_iter__70644$$($APP.$cljs$core$rest$$($s__70645__$2_temp__5823__auto__$jscomp$423$$)));
          }
          return null;
        }
      }, null, null);
    }($data$jscomp$264$$);
  }()], null)], null);
}, $sensei$frontend$admin$feedback$feedback_content$$ = function($p__70462_uid$jscomp$217$$) {
  var $map__70466__$1_text$jscomp$107$$ = $APP.$cljs$core$__destructure_map$$($p__70462_uid$jscomp$217$$);
  $p__70462_uid$jscomp$217$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70466__$1_text$jscomp$107$$, $APP.$cljs$cst$722$uid$$);
  var $timestamp$jscomp$10$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70466__$1_text$jscomp$107$$, $APP.$cljs$cst$1017$timestamp$$);
  $map__70466__$1_text$jscomp$107$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70466__$1_text$jscomp$107$$, $APP.$cljs$cst$368$text$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5531$div_DOT_card_title$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5532$p_DOT_mb_1_DOT_small$$, $p__70462_uid$jscomp$217$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5533$h6_DOT_mt_0$$, $timestamp$jscomp$10$$.toLocaleString()], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$938$p$$, $map__70466__$1_text$jscomp$107$$], null)], null);
}, $sensei$frontend$admin$feedback$admin_feedback$$ = function() {
  var $feedbacks$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5534$sensei_DOT_frontend_DOT_admin_DOT_feedback_SLASH_feedback$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4046$feedback$$, new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2055$desc$$], null)], null)], null)], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, function() {
    return function $sensei$frontend$admin$feedback$admin_feedback_$_iter__70471$$($s__70472$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$424$$ = $APP.$cljs$core$seq$$($s__70472$$);
          if ($temp__5823__auto__$jscomp$424$$) {
            var $s__70472__$2$$ = $temp__5823__auto__$jscomp$424$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70472__$2$$)) {
              var $c__5626__auto__$jscomp$142$$ = $APP.$cljs$core$_chunked_first$$($s__70472__$2$$), $size__5627__auto__$jscomp$142$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$142$$), $b__70474$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$142$$);
              return function() {
                for (var $i__70473$$ = 0;;) {
                  if ($i__70473$$ < $size__5627__auto__$jscomp$142$$) {
                    var $vec__70485$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$142$$, $i__70473$$), $id$jscomp$292$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70485$$, 0, null), $feedback$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70485$$, 1, null);
                    $APP.$cljs$core$chunk_append$$($b__70474$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5535$div_DOT_card_DOT_my_2_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$feedback$feedback_content$$, $feedback$jscomp$2$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                    [$APP.$cljs$cst$1531$span$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$modal$delete_with_confirmation_button$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$840$title$$, "Really delete this feedback?", $APP.$cljs$cst$821$on_click$$, function($i__70473$jscomp$1$$, $vec__70485$jscomp$1$$, $id$jscomp$293$$) {
                      return function() {
                        return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5530$delete_feedback$$, $id$jscomp$293$$], null));
                      };
                    }($i__70473$$, $vec__70485$$, $id$jscomp$292$$, $feedback$jscomp$2$$, $c__5626__auto__$jscomp$142$$, $size__5627__auto__$jscomp$142$$, $b__70474$$, $s__70472__$2$$, $temp__5823__auto__$jscomp$424$$, $feedbacks$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$feedback$feedback_content$$, $feedback$jscomp$2$$], null)], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, 
                    $id$jscomp$292$$], null)));
                    $i__70473$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70474$$), $sensei$frontend$admin$feedback$admin_feedback_$_iter__70471$$($APP.$cljs$core$_chunked_rest$$($s__70472__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70474$$), null);
            }
            var $vec__70492$$ = $APP.$cljs$core$first$$($s__70472__$2$$), $id$jscomp$291$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70492$$, 0, null), $feedback$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70492$$, 1, null);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5535$div_DOT_card_DOT_my_2_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$feedback$feedback_content$$, $feedback$jscomp$1$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
            [$APP.$cljs$cst$1531$span$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$modal$delete_with_confirmation_button$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$840$title$$, "Really delete this feedback?", $APP.$cljs$cst$821$on_click$$, function($vec__70492$jscomp$1$$, $id$jscomp$294$$) {
              return function() {
                return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5530$delete_feedback$$, $id$jscomp$294$$], null));
              };
            }($vec__70492$$, $id$jscomp$291$$, $feedback$jscomp$1$$, $s__70472__$2$$, $temp__5823__auto__$jscomp$424$$, $feedbacks$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$feedback$feedback_content$$, $feedback$jscomp$1$$], null)], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $id$jscomp$291$$], null)), $sensei$frontend$admin$feedback$admin_feedback_$_iter__70471$$($APP.$cljs$core$rest$$($s__70472__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($feedbacks$$);
  }()], null);
}, $sensei$frontend$admin$user_trace$uid_input$$ = function() {
  var $input_uid$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5537$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_input_uid$$], null))), $uid$jscomp$218$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5538$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_uid$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5539$div_DOT_admin_form_row$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$836$label$$, "uid"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$input$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$172$value$$, 
  $input_uid$$, $APP.$cljs$cst$68$class$$, $cljs$cst$5540$uid_input$$, $APP.$cljs$cst$933$on_change$$, function($p1__70533_SHARP_$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5541$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_set_input_uid$$, $p1__70533_SHARP_$$], null));
  }], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4395$button_DOT_btn_DOT_btn_primary_DOT_btn_sm$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5542$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_set_uid$$, $input_uid$$], null));
  }, $APP.$cljs$cst$68$class$$, $APP.$cljs$core$empty_QMARK_$$($input_uid$$) || $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($uid$jscomp$218$$, $input_uid$$) ? $APP.$cljs$cst$1356$invisible$$ : null], null), "Set uid"], null)], null);
}, $sensei$frontend$admin$funnel$plus_minus_buttons$$ = function($category$jscomp$50$$, $name$jscomp$152$$) {
  var $value$jscomp$396$$ = $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5550$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_filters$$], null))), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$category$jscomp$50$$, $name$jscomp$152$$], 
  null));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5552$span_DOT_ms_1_DOT_d_flex$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5553$button_DOT_btn_DOT_btn_sm$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$840$title$$, "Filter", $APP.$cljs$cst$68$class$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($value$jscomp$396$$, $APP.$cljs$cst$1870$filter$$) ? 
  $APP.$cljs$cst$828$btn_success$$ : $cljs$cst$5554$btn_outline_success$$, $APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5551$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_filter$$, $category$jscomp$50$$, $name$jscomp$152$$, $APP.$cljs$cst$1870$filter$$], null));
  }], null), "+"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5553$button_DOT_btn_DOT_btn_sm$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$840$title$$, "Exclude", $APP.$cljs$cst$68$class$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($value$jscomp$396$$, $APP.$cljs$cst$2119$remove$$) ? $APP.$cljs$cst$829$btn_danger$$ : $cljs$cst$5555$btn_outline_danger$$, $APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5551$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_filter$$, $category$jscomp$50$$, $name$jscomp$152$$, $APP.$cljs$cst$2119$remove$$], null));
  }], null), "-"], null)], null);
}, $sensei$frontend$admin$funnel$active_filter_badge$$ = function($category$jscomp$51$$, $p__70658$$) {
  var $name$jscomp$153$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70658$$, 0, null), $value$jscomp$397$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70658$$, 1, null);
  return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5556$span_DOT_badge_DOT_rounded_pill_DOT_ms_1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$68$class$$, function() {
    var $G__70662__$1$$ = $value$jscomp$397$$ instanceof $APP.$cljs$core$Keyword$$ ? $value$jscomp$397$$.$fqn$ : null;
    switch($G__70662__$1$$) {
      case "filter":
        return $cljs$cst$5557$bg_success$$;
      case "remove":
        return $cljs$cst$5558$bg_danger$$;
      default:
        throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__70662__$1$$));
    }
  }()], null), $category$jscomp$51$$, ": ", $name$jscomp$153$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5559$span_DOT_ms_1_DOT_pointer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5551$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_filter$$, $category$jscomp$51$$, $name$jscomp$153$$, $value$jscomp$397$$], null));
  }], null), "X"], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$name$jscomp$153$$], null)], null));
}, $sensei$frontend$admin$funnel$active_filters$$ = function() {
  var $map__70674_referrer$jscomp$4$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5550$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_filters$$], null))), $event$jscomp$94_map__70674__$1$$ = $APP.$cljs$core$__destructure_map$$($map__70674_referrer$jscomp$4$$);
  $map__70674_referrer$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$94_map__70674__$1$$, $APP.$cljs$cst$1156$referrer$$);
  $event$jscomp$94_map__70674__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$94_map__70674__$1$$, $APP.$cljs$cst$132$event$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5560$div_DOT_d_flex_DOT_align_items_center_DOT_flex_wrap$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$68$class$$, $APP.$cljs$core$empty_QMARK_$$($map__70674_referrer$jscomp$4$$) && $APP.$cljs$core$empty_QMARK_$$($event$jscomp$94_map__70674__$1$$) ? $APP.$cljs$cst$1356$invisible$$ : null], null), "Filters:", new $APP.$cljs$core$PersistentVector$$(null, 3, 5, 
  $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5561$div_DOT_btn_DOT_btn_link$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5562$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_clear_filters$$], null));
  }], null), "Clear"], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70667_SHARP_$$) {
    return $sensei$frontend$admin$funnel$active_filter_badge$$($APP.$cljs$cst$1156$referrer$$, $p1__70667_SHARP_$$);
  }, $map__70674_referrer$jscomp$4$$), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70668_SHARP_$$) {
    return $sensei$frontend$admin$funnel$active_filter_badge$$($APP.$cljs$cst$132$event$$, $p1__70668_SHARP_$$);
  }, $event$jscomp$94_map__70674__$1$$)], null);
}, $sensei$frontend$admin$funnel$funnel_table$$ = function() {
  var $new_user_stats$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5563$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_stats$$], null))), $grouped_stats$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5564$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_grouped_stats$$], null))), $total_cols$$ = 2 * $APP.$cljs$core$count$$($new_user_stats$$) + 1;
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5523$table_DOT_table_DOT_table_sm_DOT_table_striped_DOT_border_DOT_border_dark$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1263$tbody$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5565$tr_DOT_fw_bold$$, new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$], null), function() {
    return function $sensei$frontend$admin$funnel$funnel_table_$_iter__70694$$($s__70695$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__70695__$2_temp__5823__auto__$jscomp$433$$ = $APP.$cljs$core$seq$$($s__70695$$);
          if ($s__70695__$2_temp__5823__auto__$jscomp$433$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70695__$2_temp__5823__auto__$jscomp$433$$)) {
              var $JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$ = $APP.$cljs$core$_chunked_first$$($s__70695__$2_temp__5823__auto__$jscomp$433$$), $size__5627__auto__$jscomp$149$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$), $b__70697_vec__70724$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$149$$);
              a: {
                for (var $i__70696$jscomp$inline_4545$$ = 0;;) {
                  if ($i__70696$jscomp$inline_4545$$ < $size__5627__auto__$jscomp$149$$) {
                    var $b$jscomp$inline_6703_vec__70710$jscomp$inline_4546$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$, $i__70696$jscomp$inline_4545$$), $referrer$jscomp$inline_4547_x$jscomp$inline_6704$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6703_vec__70710$jscomp$inline_4546$$, 0, null);
                    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6703_vec__70710$jscomp$inline_4546$$, 1, null);
                    $b$jscomp$inline_6703_vec__70710$jscomp$inline_4546$$ = $b__70697_vec__70724$$;
                    $referrer$jscomp$inline_4547_x$jscomp$inline_6704$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1261$col_span$$, 2], null), "Referrer: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($referrer$jscomp$inline_4547_x$jscomp$inline_6704$$), $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($referrer$jscomp$inline_4547_x$jscomp$inline_6704$$, 
                    "All Users") ? null : new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$plus_minus_buttons$$, $APP.$cljs$cst$1156$referrer$$, $referrer$jscomp$inline_4547_x$jscomp$inline_6704$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $referrer$jscomp$inline_4547_x$jscomp$inline_6704$$], null));
                    $b$jscomp$inline_6703_vec__70710$jscomp$inline_4546$$.add($referrer$jscomp$inline_4547_x$jscomp$inline_6704$$);
                    $i__70696$jscomp$inline_4545$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70697_vec__70724$$), $sensei$frontend$admin$funnel$funnel_table_$_iter__70694$$($APP.$cljs$core$_chunked_rest$$($s__70695__$2_temp__5823__auto__$jscomp$433$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70697_vec__70724$$), null);
            }
            $b__70697_vec__70724$$ = $APP.$cljs$core$first$$($s__70695__$2_temp__5823__auto__$jscomp$433$$);
            $JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b__70697_vec__70724$$, 0, null);
            $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b__70697_vec__70724$$, 1, null);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1261$col_span$$, 2], null), "Referrer: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$), $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$, 
            "All Users") ? null : new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$plus_minus_buttons$$, $APP.$cljs$cst$1156$referrer$$, $JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $JSCompiler_inline_result$jscomp$970_c__5626__auto__$jscomp$149_referrer$jscomp$5$$], null)), $sensei$frontend$admin$funnel$funnel_table_$_iter__70694$$($APP.$cljs$core$rest$$($s__70695__$2_temp__5823__auto__$jscomp$433$$)));
          }
          return null;
        }
      }, null, null);
    }($new_user_stats$$);
  }()], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$], null), function() {
    return function $sensei$frontend$admin$funnel$funnel_table_$_iter__70731$$($s__70732$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__70732__$2_temp__5823__auto__$jscomp$434$$ = $APP.$cljs$core$seq$$($s__70732$$);
          if ($s__70732__$2_temp__5823__auto__$jscomp$434$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70732__$2_temp__5823__auto__$jscomp$434$$)) {
              var $c__5626__auto__$jscomp$150$$ = $APP.$cljs$core$_chunked_first$$($s__70732__$2_temp__5823__auto__$jscomp$434$$), $size__5627__auto__$jscomp$150$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$150$$), $b__70734$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$150$$);
              return function() {
                for (var $i__70733$$ = 0;;) {
                  if ($i__70733$$ < $size__5627__auto__$jscomp$150$$) {
                    var $b$jscomp$inline_6706_vec__70749$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$150$$, $i__70733$$), $or__5142__auto__$jscomp$inline_4549_referrer$jscomp$8_x$jscomp$inline_6707$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6706_vec__70749$$, 0, null);
                    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6706_vec__70749$$, 1, null);
                    $b$jscomp$inline_6706_vec__70749$$ = $b__70734$$;
                    $or__5142__auto__$jscomp$inline_4549_referrer$jscomp$8_x$jscomp$inline_6707$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, "Count"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, 
                    "% of previous"], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$inline_4549_referrer$jscomp$8_x$jscomp$inline_6707$$) ? $or__5142__auto__$jscomp$inline_4549_referrer$jscomp$8_x$jscomp$inline_6707$$ : ""], null));
                    $b$jscomp$inline_6706_vec__70749$$.add($or__5142__auto__$jscomp$inline_4549_referrer$jscomp$8_x$jscomp$inline_6707$$);
                    $i__70733$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70734$$), $sensei$frontend$admin$funnel$funnel_table_$_iter__70731$$($APP.$cljs$core$_chunked_rest$$($s__70732__$2_temp__5823__auto__$jscomp$434$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70734$$), null);
            }
            var $vec__70755$$ = $APP.$cljs$core$first$$($s__70732__$2_temp__5823__auto__$jscomp$434$$), $referrer$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70755$$, 0, null);
            $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70755$$, 1, null);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, "Count"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, "% of previous"], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
            1, [$APP.$cljs$cst$70$key$$, function() {
              var $or__5142__auto__$jscomp$527$$ = $referrer$jscomp$7$$;
              return $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$527$$) ? $or__5142__auto__$jscomp$527$$ : "";
            }()], null)), $sensei$frontend$admin$funnel$funnel_table_$_iter__70731$$($APP.$cljs$core$rest$$($s__70732__$2_temp__5823__auto__$jscomp$434$$)));
          }
          return null;
        }
      }, null, null);
    }($new_user_stats$$);
  }()], null), function() {
    return function $sensei$frontend$admin$funnel$funnel_table_$_iter__70765$$($s__70766$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$435$$ = $APP.$cljs$core$seq$$($s__70766$$);
          if ($temp__5823__auto__$jscomp$435$$) {
            var $s__70766__$2$$ = $temp__5823__auto__$jscomp$435$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70766__$2$$)) {
              var $c__5626__auto__$jscomp$151$$ = $APP.$cljs$core$_chunked_first$$($s__70766__$2$$), $size__5627__auto__$jscomp$151$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$151$$), $b__70768$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$151$$);
              return function() {
                for (var $i__70767$$ = 0;;) {
                  if ($i__70767$$ < $size__5627__auto__$jscomp$151$$) {
                    var $group$jscomp$2$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$151$$, $i__70767$$);
                    $APP.$cljs$core$chunk_append$$($b__70768$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5566$td_DOT_fw_bold$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
                    1, [$APP.$cljs$cst$1261$col_span$$, $total_cols$$], null), $group$jscomp$2$$], null)], null), function() {
                      return function($i__70767$jscomp$1$$, $group$jscomp$3$$, $c__5626__auto__$jscomp$152$$, $size__5627__auto__$jscomp$152$$, $b__70768$jscomp$1$$, $s__70766__$2$jscomp$1$$, $temp__5823__auto__$jscomp$436$$, $new_user_stats$jscomp$1$$, $grouped_stats$jscomp$1$$, $total_cols$jscomp$1$$) {
                        return function $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70772$$($s__70773$$) {
                          return new $APP.$cljs$core$LazySeq$$(null, function($i__70767$jscomp$2$$, $group$jscomp$4$$, $c__5626__auto__$jscomp$153$$, $size__5627__auto__$jscomp$153$$, $b__70768$jscomp$2$$, $s__70766__$2$jscomp$2$$, $temp__5823__auto__$jscomp$437$$, $new_user_stats$jscomp$2$$, $grouped_stats$jscomp$2$$, $total_cols$jscomp$2$$) {
                            return function() {
                              for (;;) {
                                var $temp__5823__auto____$1$jscomp$51$$ = $APP.$cljs$core$seq$$($s__70773$$);
                                if ($temp__5823__auto____$1$jscomp$51$$) {
                                  var $s__70773__$2$$ = $temp__5823__auto____$1$jscomp$51$$;
                                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70773__$2$$)) {
                                    var $c__5626__auto____$1$jscomp$10$$ = $APP.$cljs$core$_chunked_first$$($s__70773__$2$$), $size__5627__auto____$1$jscomp$10$$ = $APP.$cljs$core$count$$($c__5626__auto____$1$jscomp$10$$), $b__70775$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$10$$);
                                    return function() {
                                      for (var $i__70774$$ = 0;;) {
                                        if ($i__70774$$ < $size__5627__auto____$1$jscomp$10$$) {
                                          var $vec__70785$$ = $APP.$cljs$core$_nth$$($c__5626__auto____$1$jscomp$10$$, $i__70774$$), $event$jscomp$96$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70785$$, 0, null), $event_data$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70785$$, 1, null);
                                          $APP.$cljs$core$chunk_append$$($b__70775$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5567$td_GT_div_DOT_d_flex_DOT_align_items_center_DOT_justify_content_between$$, $event$jscomp$96$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($event$jscomp$96$$, 
                                          $APP.$cljs$cst$2023$total$$) ? null : new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$plus_minus_buttons$$, $APP.$cljs$cst$132$event$$, $event$jscomp$96$$], null)], null), function() {
                                            return function($i__70774$jscomp$1$$, $i__70767$jscomp$3$$, $vec__70785$jscomp$1$$, $event$jscomp$97$$, $event_data$jscomp$3$$, $c__5626__auto____$1$jscomp$11$$, $size__5627__auto____$1$jscomp$11$$, $b__70775$jscomp$1$$, $s__70773__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$52$$, $group$jscomp$5$$, $c__5626__auto__$jscomp$154$$, $size__5627__auto__$jscomp$154$$, $b__70768$jscomp$3$$, $s__70766__$2$jscomp$3$$, $temp__5823__auto__$jscomp$438$$, $new_user_stats$jscomp$3$$, 
                                            $grouped_stats$jscomp$3$$, $total_cols$jscomp$3$$) {
                                              return function $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70772_$_iter__70796$$($s__70797$$) {
                                                return new $APP.$cljs$core$LazySeq$$(null, function() {
                                                  return function() {
                                                    for (;;) {
                                                      var $s__70797__$2_temp__5823__auto____$2$jscomp$3$$ = $APP.$cljs$core$seq$$($s__70797$$);
                                                      if ($s__70797__$2_temp__5823__auto____$2$jscomp$3$$) {
                                                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70797__$2_temp__5823__auto____$2$jscomp$3$$)) {
                                                          var $JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$ = $APP.$cljs$core$_chunked_first$$($s__70797__$2_temp__5823__auto____$2$jscomp$3$$), $size__5627__auto____$2$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$), $b__70802_index$jscomp$172$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$2$$);
                                                          a: {
                                                            for (var $i__70800$jscomp$inline_4551$$ = 0;;) {
                                                              if ($i__70800$jscomp$inline_4551$$ < $size__5627__auto____$2$$) {
                                                                var $b$jscomp$inline_6709_vec__70807$jscomp$inline_4552$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$, $i__70800$jscomp$inline_4551$$), $index$jscomp$inline_4553_x$jscomp$inline_6710$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6709_vec__70807$jscomp$inline_4552$$, 0, null), $data$jscomp$inline_4554$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6709_vec__70807$jscomp$inline_4552$$, 
                                                                1, null);
                                                                $b$jscomp$inline_6709_vec__70807$jscomp$inline_4552$$ = $b__70802_index$jscomp$172$$;
                                                                $index$jscomp$inline_4553_x$jscomp$inline_6710$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$re_find$$(/%/, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($data$jscomp$inline_4554$$))) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                                [$cljs$cst$5568$div_DOT_progress$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1117$position$$, $APP.$cljs$cst$1760$relative$$, $APP.$cljs$cst$1046$width$$, "200px", $APP.$cljs$cst$1568$background_color$$, "#acdbf294"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1567$div_DOT_progress_bar$$, 
                                                                new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1046$width$$, $data$jscomp$inline_4554$$], null)], null), $data$jscomp$inline_4554$$], null)], null) : $data$jscomp$inline_4554$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $index$jscomp$inline_4553_x$jscomp$inline_6710$$], null));
                                                                $b$jscomp$inline_6709_vec__70807$jscomp$inline_4552$$.add($index$jscomp$inline_4553_x$jscomp$inline_6710$$);
                                                                $i__70800$jscomp$inline_4551$$ += 1;
                                                              } else {
                                                                $JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$ = !0;
                                                                break a;
                                                              }
                                                            }
                                                            $JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$ = void 0;
                                                          }
                                                          return $JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70802_index$jscomp$172$$), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70772_$_iter__70796$$($APP.$cljs$core$_chunked_rest$$($s__70797__$2_temp__5823__auto____$2$jscomp$3$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70802_index$jscomp$172$$), null);
                                                        }
                                                        $JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$ = $APP.$cljs$core$first$$($s__70797__$2_temp__5823__auto____$2$jscomp$3$$);
                                                        $b__70802_index$jscomp$172$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$, 0, null);
                                                        $JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$, 1, null);
                                                        return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$re_find$$(/%/, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$))) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                        [$cljs$cst$5568$div_DOT_progress$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1117$position$$, $APP.$cljs$cst$1760$relative$$, $APP.$cljs$cst$1046$width$$, "200px", $APP.$cljs$cst$1568$background_color$$, "#acdbf294"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1567$div_DOT_progress_bar$$, 
                                                        new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1046$width$$, $JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$], null)], null), $JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$], null)], null) : $JSCompiler_inline_result$jscomp$972_c__5626__auto____$2_data$jscomp$269_vec__70811$$], 
                                                        null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__70802_index$jscomp$172$$], null)), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70772_$_iter__70796$$($APP.$cljs$core$rest$$($s__70797__$2_temp__5823__auto____$2$jscomp$3$$)));
                                                      }
                                                      return null;
                                                    }
                                                  };
                                                }($i__70774$jscomp$1$$, $i__70767$jscomp$3$$, $vec__70785$jscomp$1$$, $event$jscomp$97$$, $event_data$jscomp$3$$, $c__5626__auto____$1$jscomp$11$$, $size__5627__auto____$1$jscomp$11$$, $b__70775$jscomp$1$$, $s__70773__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$52$$, $group$jscomp$5$$, $c__5626__auto__$jscomp$154$$, $size__5627__auto__$jscomp$154$$, $b__70768$jscomp$3$$, $s__70766__$2$jscomp$3$$, $temp__5823__auto__$jscomp$438$$, $new_user_stats$jscomp$3$$, 
                                                $grouped_stats$jscomp$3$$, $total_cols$jscomp$3$$), null, null);
                                              };
                                            }($i__70774$$, $i__70767$jscomp$2$$, $vec__70785$$, $event$jscomp$96$$, $event_data$jscomp$2$$, $c__5626__auto____$1$jscomp$10$$, $size__5627__auto____$1$jscomp$10$$, $b__70775$$, $s__70773__$2$$, $temp__5823__auto____$1$jscomp$51$$, $group$jscomp$4$$, $c__5626__auto__$jscomp$153$$, $size__5627__auto__$jscomp$153$$, $b__70768$jscomp$2$$, $s__70766__$2$jscomp$2$$, $temp__5823__auto__$jscomp$437$$, $new_user_stats$jscomp$2$$, $grouped_stats$jscomp$2$$, $total_cols$jscomp$2$$)($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, 
                                            $event_data$jscomp$2$$));
                                          }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $event$jscomp$96$$], null)));
                                          $i__70774$$ += 1;
                                        } else {
                                          return !0;
                                        }
                                      }
                                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70775$$), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70772$$($APP.$cljs$core$_chunked_rest$$($s__70773__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70775$$), null);
                                  }
                                  var $vec__70827$$ = $APP.$cljs$core$first$$($s__70773__$2$$), $event$jscomp$95$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70827$$, 0, null), $event_data$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70827$$, 1, null);
                                  return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5567$td_GT_div_DOT_d_flex_DOT_align_items_center_DOT_justify_content_between$$, $event$jscomp$95$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($event$jscomp$95$$, 
                                  $APP.$cljs$cst$2023$total$$) ? null : new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$plus_minus_buttons$$, $APP.$cljs$cst$132$event$$, $event$jscomp$95$$], null)], null), function() {
                                    return function($i__70767$jscomp$5$$, $vec__70827$jscomp$1$$, $event$jscomp$99$$, $event_data$jscomp$5$$, $s__70773__$2$jscomp$3$$, $temp__5823__auto____$1$jscomp$54$$, $group$jscomp$7$$, $c__5626__auto__$jscomp$156$$, $size__5627__auto__$jscomp$156$$, $b__70768$jscomp$5$$, $s__70766__$2$jscomp$5$$, $temp__5823__auto__$jscomp$440$$, $new_user_stats$jscomp$5$$, $grouped_stats$jscomp$5$$, $total_cols$jscomp$5$$) {
                                      return function $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70772_$_iter__70831$$($s__70832$$) {
                                        return new $APP.$cljs$core$LazySeq$$(null, function() {
                                          return function() {
                                            for (;;) {
                                              var $s__70832__$2_temp__5823__auto____$2$jscomp$4$$ = $APP.$cljs$core$seq$$($s__70832$$);
                                              if ($s__70832__$2_temp__5823__auto____$2$jscomp$4$$) {
                                                if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70832__$2_temp__5823__auto____$2$jscomp$4$$)) {
                                                  var $JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$ = $APP.$cljs$core$_chunked_first$$($s__70832__$2_temp__5823__auto____$2$jscomp$4$$), $size__5627__auto____$1$jscomp$13$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$), $b__70834_index$jscomp$174$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$13$$);
                                                  a: {
                                                    for (var $i__70833$jscomp$inline_4556$$ = 0;;) {
                                                      if ($i__70833$jscomp$inline_4556$$ < $size__5627__auto____$1$jscomp$13$$) {
                                                        var $b$jscomp$inline_6712_vec__70842$jscomp$inline_4557$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$, $i__70833$jscomp$inline_4556$$), $index$jscomp$inline_4558_x$jscomp$inline_6713$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6712_vec__70842$jscomp$inline_4557$$, 0, null), $data$jscomp$inline_4559$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6712_vec__70842$jscomp$inline_4557$$, 
                                                        1, null);
                                                        $b$jscomp$inline_6712_vec__70842$jscomp$inline_4557$$ = $b__70834_index$jscomp$174$$;
                                                        $index$jscomp$inline_4558_x$jscomp$inline_6713$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$re_find$$(/%/, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($data$jscomp$inline_4559$$))) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                        [$cljs$cst$5568$div_DOT_progress$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1117$position$$, $APP.$cljs$cst$1760$relative$$, $APP.$cljs$cst$1046$width$$, "200px", $APP.$cljs$cst$1568$background_color$$, "#acdbf294"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1567$div_DOT_progress_bar$$, 
                                                        new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1046$width$$, $data$jscomp$inline_4559$$], null)], null), $data$jscomp$inline_4559$$], null)], null) : $data$jscomp$inline_4559$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $index$jscomp$inline_4558_x$jscomp$inline_6713$$], null));
                                                        $b$jscomp$inline_6712_vec__70842$jscomp$inline_4557$$.add($index$jscomp$inline_4558_x$jscomp$inline_6713$$);
                                                        $i__70833$jscomp$inline_4556$$ += 1;
                                                      } else {
                                                        $JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$ = !0;
                                                        break a;
                                                      }
                                                    }
                                                    $JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$ = void 0;
                                                  }
                                                  return $JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70834_index$jscomp$174$$), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70772_$_iter__70831$$($APP.$cljs$core$_chunked_rest$$($s__70832__$2_temp__5823__auto____$2$jscomp$4$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70834_index$jscomp$174$$), null);
                                                }
                                                $JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$ = $APP.$cljs$core$first$$($s__70832__$2_temp__5823__auto____$2$jscomp$4$$);
                                                $b__70834_index$jscomp$174$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$, 0, null);
                                                $JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$, 1, null);
                                                return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$re_find$$(/%/, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$))) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                [$cljs$cst$5568$div_DOT_progress$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1117$position$$, $APP.$cljs$cst$1760$relative$$, $APP.$cljs$cst$1046$width$$, "200px", $APP.$cljs$cst$1568$background_color$$, "#acdbf294"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1567$div_DOT_progress_bar$$, 
                                                new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1046$width$$, $JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$], null)], null), $JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$], null)], null) : $JSCompiler_inline_result$jscomp$973_c__5626__auto____$1$jscomp$13_data$jscomp$271_vec__70849$$], 
                                                null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__70834_index$jscomp$174$$], null)), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70772_$_iter__70831$$($APP.$cljs$core$rest$$($s__70832__$2_temp__5823__auto____$2$jscomp$4$$)));
                                              }
                                              return null;
                                            }
                                          };
                                        }($i__70767$jscomp$5$$, $vec__70827$jscomp$1$$, $event$jscomp$99$$, $event_data$jscomp$5$$, $s__70773__$2$jscomp$3$$, $temp__5823__auto____$1$jscomp$54$$, $group$jscomp$7$$, $c__5626__auto__$jscomp$156$$, $size__5627__auto__$jscomp$156$$, $b__70768$jscomp$5$$, $s__70766__$2$jscomp$5$$, $temp__5823__auto__$jscomp$440$$, $new_user_stats$jscomp$5$$, $grouped_stats$jscomp$5$$, $total_cols$jscomp$5$$), null, null);
                                      };
                                    }($i__70767$jscomp$2$$, $vec__70827$$, $event$jscomp$95$$, $event_data$jscomp$1$$, $s__70773__$2$$, $temp__5823__auto____$1$jscomp$51$$, $group$jscomp$4$$, $c__5626__auto__$jscomp$153$$, $size__5627__auto__$jscomp$153$$, $b__70768$jscomp$2$$, $s__70766__$2$jscomp$2$$, $temp__5823__auto__$jscomp$437$$, $new_user_stats$jscomp$2$$, $grouped_stats$jscomp$2$$, $total_cols$jscomp$2$$)($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, 
                                    $event_data$jscomp$1$$));
                                  }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $event$jscomp$95$$], null)), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70772$$($APP.$cljs$core$rest$$($s__70773__$2$$)));
                                }
                                return null;
                              }
                            };
                          }($i__70767$jscomp$1$$, $group$jscomp$3$$, $c__5626__auto__$jscomp$152$$, $size__5627__auto__$jscomp$152$$, $b__70768$jscomp$1$$, $s__70766__$2$jscomp$1$$, $temp__5823__auto__$jscomp$436$$, $new_user_stats$jscomp$1$$, $grouped_stats$jscomp$1$$, $total_cols$jscomp$1$$), null, null);
                        };
                      }($i__70767$$, $group$jscomp$2$$, $c__5626__auto__$jscomp$151$$, $size__5627__auto__$jscomp$151$$, $b__70768$$, $s__70766__$2$$, $temp__5823__auto__$jscomp$435$$, $new_user_stats$$, $grouped_stats$$, $total_cols$$)($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($grouped_stats$$, $group$jscomp$2$$));
                    }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $group$jscomp$2$$], null)));
                    $i__70767$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70768$$), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765$$($APP.$cljs$core$_chunked_rest$$($s__70766__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70768$$), null);
            }
            var $group$jscomp$1$$ = $APP.$cljs$core$first$$($s__70766__$2$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5566$td_DOT_fw_bold$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
            1, [$APP.$cljs$cst$1261$col_span$$, $total_cols$$], null), $group$jscomp$1$$], null)], null), function() {
              return function($group$jscomp$9$$, $s__70766__$2$jscomp$7$$, $temp__5823__auto__$jscomp$442$$, $new_user_stats$jscomp$7$$, $grouped_stats$jscomp$7$$, $total_cols$jscomp$7$$) {
                return function $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70852$$($s__70853$$) {
                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                    for (;;) {
                      var $temp__5823__auto____$1$jscomp$56$$ = $APP.$cljs$core$seq$$($s__70853$$);
                      if ($temp__5823__auto____$1$jscomp$56$$) {
                        var $s__70853__$2$$ = $temp__5823__auto____$1$jscomp$56$$;
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70853__$2$$)) {
                          var $c__5626__auto__$jscomp$158$$ = $APP.$cljs$core$_chunked_first$$($s__70853__$2$$), $size__5627__auto__$jscomp$158$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$158$$), $b__70855$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$158$$);
                          return function() {
                            for (var $i__70854$$ = 0;;) {
                              if ($i__70854$$ < $size__5627__auto__$jscomp$158$$) {
                                var $vec__70860$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$158$$, $i__70854$$), $event$jscomp$102$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70860$$, 0, null), $event_data$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70860$$, 1, null);
                                $APP.$cljs$core$chunk_append$$($b__70855$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5567$td_GT_div_DOT_d_flex_DOT_align_items_center_DOT_justify_content_between$$, $event$jscomp$102$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($event$jscomp$102$$, 
                                $APP.$cljs$cst$2023$total$$) ? null : new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$plus_minus_buttons$$, $APP.$cljs$cst$132$event$$, $event$jscomp$102$$], null)], null), function() {
                                  return function($i__70854$jscomp$1$$, $vec__70860$jscomp$1$$, $event$jscomp$103$$, $event_data$jscomp$9$$, $c__5626__auto__$jscomp$159$$, $size__5627__auto__$jscomp$159$$, $b__70855$jscomp$1$$, $s__70853__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$57$$, $group$jscomp$10$$, $s__70766__$2$jscomp$8$$, $temp__5823__auto__$jscomp$443$$, $new_user_stats$jscomp$8$$, $grouped_stats$jscomp$8$$, $total_cols$jscomp$8$$) {
                                    return function $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70852_$_iter__70863$$($s__70864$$) {
                                      return new $APP.$cljs$core$LazySeq$$(null, function() {
                                        return function() {
                                          for (;;) {
                                            var $s__70864__$2_temp__5823__auto____$2$jscomp$5$$ = $APP.$cljs$core$seq$$($s__70864$$);
                                            if ($s__70864__$2_temp__5823__auto____$2$jscomp$5$$) {
                                              if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70864__$2_temp__5823__auto____$2$jscomp$5$$)) {
                                                var $JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$ = $APP.$cljs$core$_chunked_first$$($s__70864__$2_temp__5823__auto____$2$jscomp$5$$), $size__5627__auto____$1$jscomp$14$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$), $b__70866_index$jscomp$176$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$14$$);
                                                a: {
                                                  for (var $i__70865$jscomp$inline_4561$$ = 0;;) {
                                                    if ($i__70865$jscomp$inline_4561$$ < $size__5627__auto____$1$jscomp$14$$) {
                                                      var $b$jscomp$inline_6715_vec__70868$jscomp$inline_4562$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$, $i__70865$jscomp$inline_4561$$), $index$jscomp$inline_4563_x$jscomp$inline_6716$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6715_vec__70868$jscomp$inline_4562$$, 0, null), $data$jscomp$inline_4564$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6715_vec__70868$jscomp$inline_4562$$, 
                                                      1, null);
                                                      $b$jscomp$inline_6715_vec__70868$jscomp$inline_4562$$ = $b__70866_index$jscomp$176$$;
                                                      $index$jscomp$inline_4563_x$jscomp$inline_6716$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$re_find$$(/%/, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($data$jscomp$inline_4564$$))) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                      [$cljs$cst$5568$div_DOT_progress$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1117$position$$, $APP.$cljs$cst$1760$relative$$, $APP.$cljs$cst$1046$width$$, "200px", $APP.$cljs$cst$1568$background_color$$, "#acdbf294"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1567$div_DOT_progress_bar$$, 
                                                      new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1046$width$$, $data$jscomp$inline_4564$$], null)], null), $data$jscomp$inline_4564$$], null)], null) : $data$jscomp$inline_4564$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $index$jscomp$inline_4563_x$jscomp$inline_6716$$], null));
                                                      $b$jscomp$inline_6715_vec__70868$jscomp$inline_4562$$.add($index$jscomp$inline_4563_x$jscomp$inline_6716$$);
                                                      $i__70865$jscomp$inline_4561$$ += 1;
                                                    } else {
                                                      $JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$ = !0;
                                                      break a;
                                                    }
                                                  }
                                                  $JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$ = void 0;
                                                }
                                                return $JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70866_index$jscomp$176$$), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70852_$_iter__70863$$($APP.$cljs$core$_chunked_rest$$($s__70864__$2_temp__5823__auto____$2$jscomp$5$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70866_index$jscomp$176$$), null);
                                              }
                                              $JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$ = $APP.$cljs$core$first$$($s__70864__$2_temp__5823__auto____$2$jscomp$5$$);
                                              $b__70866_index$jscomp$176$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$, 0, null);
                                              $JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$, 1, null);
                                              return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$re_find$$(/%/, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$))) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                              [$cljs$cst$5568$div_DOT_progress$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1117$position$$, $APP.$cljs$cst$1760$relative$$, $APP.$cljs$cst$1046$width$$, "200px", $APP.$cljs$cst$1568$background_color$$, "#acdbf294"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1567$div_DOT_progress_bar$$, 
                                              new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1046$width$$, $JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$], null)], null), $JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$], null)], null) : $JSCompiler_inline_result$jscomp$974_c__5626__auto____$1$jscomp$14_data$jscomp$273_vec__70873$$], 
                                              null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__70866_index$jscomp$176$$], null)), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70852_$_iter__70863$$($APP.$cljs$core$rest$$($s__70864__$2_temp__5823__auto____$2$jscomp$5$$)));
                                            }
                                            return null;
                                          }
                                        };
                                      }($i__70854$jscomp$1$$, $vec__70860$jscomp$1$$, $event$jscomp$103$$, $event_data$jscomp$9$$, $c__5626__auto__$jscomp$159$$, $size__5627__auto__$jscomp$159$$, $b__70855$jscomp$1$$, $s__70853__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$57$$, $group$jscomp$10$$, $s__70766__$2$jscomp$8$$, $temp__5823__auto__$jscomp$443$$, $new_user_stats$jscomp$8$$, $grouped_stats$jscomp$8$$, $total_cols$jscomp$8$$), null, null);
                                    };
                                  }($i__70854$$, $vec__70860$$, $event$jscomp$102$$, $event_data$jscomp$8$$, $c__5626__auto__$jscomp$158$$, $size__5627__auto__$jscomp$158$$, $b__70855$$, $s__70853__$2$$, $temp__5823__auto____$1$jscomp$56$$, $group$jscomp$9$$, $s__70766__$2$jscomp$7$$, $temp__5823__auto__$jscomp$442$$, $new_user_stats$jscomp$7$$, $grouped_stats$jscomp$7$$, $total_cols$jscomp$7$$)($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $event_data$jscomp$8$$));
                                }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $event$jscomp$102$$], null)));
                                $i__70854$$ += 1;
                              } else {
                                return !0;
                              }
                            }
                          }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70855$$), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70852$$($APP.$cljs$core$_chunked_rest$$($s__70853__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70855$$), null);
                        }
                        var $vec__70876$$ = $APP.$cljs$core$first$$($s__70853__$2$$), $event$jscomp$101$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70876$$, 0, null), $event_data$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70876$$, 1, null);
                        return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5567$td_GT_div_DOT_d_flex_DOT_align_items_center_DOT_justify_content_between$$, $event$jscomp$101$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($event$jscomp$101$$, $APP.$cljs$cst$2023$total$$) ? 
                        null : new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$plus_minus_buttons$$, $APP.$cljs$cst$132$event$$, $event$jscomp$101$$], null)], null), function() {
                          return function() {
                            return function $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70852_$_iter__70879$$($s__70880$$) {
                              return new $APP.$cljs$core$LazySeq$$(null, function() {
                                for (;;) {
                                  var $s__70880__$2_temp__5823__auto____$2$jscomp$6$$ = $APP.$cljs$core$seq$$($s__70880$$);
                                  if ($s__70880__$2_temp__5823__auto____$2$jscomp$6$$) {
                                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70880__$2_temp__5823__auto____$2$jscomp$6$$)) {
                                      var $JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$ = $APP.$cljs$core$_chunked_first$$($s__70880__$2_temp__5823__auto____$2$jscomp$6$$), $size__5627__auto__$jscomp$161$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$), $b__70882_index$jscomp$178$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$161$$);
                                      a: {
                                        for (var $i__70881$jscomp$inline_4566$$ = 0;;) {
                                          if ($i__70881$jscomp$inline_4566$$ < $size__5627__auto__$jscomp$161$$) {
                                            var $b$jscomp$inline_6718_vec__70887$jscomp$inline_4567$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$, $i__70881$jscomp$inline_4566$$), $index$jscomp$inline_4568_x$jscomp$inline_6719$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6718_vec__70887$jscomp$inline_4567$$, 0, null), $data$jscomp$inline_4569$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b$jscomp$inline_6718_vec__70887$jscomp$inline_4567$$, 
                                            1, null);
                                            $b$jscomp$inline_6718_vec__70887$jscomp$inline_4567$$ = $b__70882_index$jscomp$178$$;
                                            $index$jscomp$inline_4568_x$jscomp$inline_6719$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$re_find$$(/%/, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($data$jscomp$inline_4569$$))) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5568$div_DOT_progress$$, 
                                            new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1117$position$$, $APP.$cljs$cst$1760$relative$$, $APP.$cljs$cst$1046$width$$, "200px", $APP.$cljs$cst$1568$background_color$$, "#acdbf294"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1567$div_DOT_progress_bar$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
                                            1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1046$width$$, $data$jscomp$inline_4569$$], null)], null), $data$jscomp$inline_4569$$], null)], null) : $data$jscomp$inline_4569$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $index$jscomp$inline_4568_x$jscomp$inline_6719$$], null));
                                            $b$jscomp$inline_6718_vec__70887$jscomp$inline_4567$$.add($index$jscomp$inline_4568_x$jscomp$inline_6719$$);
                                            $i__70881$jscomp$inline_4566$$ += 1;
                                          } else {
                                            $JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$ = !0;
                                            break a;
                                          }
                                        }
                                        $JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$ = void 0;
                                      }
                                      return $JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70882_index$jscomp$178$$), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70852_$_iter__70879$$($APP.$cljs$core$_chunked_rest$$($s__70880__$2_temp__5823__auto____$2$jscomp$6$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70882_index$jscomp$178$$), null);
                                    }
                                    $JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$ = $APP.$cljs$core$first$$($s__70880__$2_temp__5823__auto____$2$jscomp$6$$);
                                    $b__70882_index$jscomp$178$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$, 0, null);
                                    $JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$, 1, null);
                                    return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$re_find$$(/%/, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$))) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                    [$cljs$cst$5568$div_DOT_progress$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1117$position$$, $APP.$cljs$cst$1760$relative$$, $APP.$cljs$cst$1046$width$$, "200px", $APP.$cljs$cst$1568$background_color$$, "#acdbf294"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1567$div_DOT_progress_bar$$, 
                                    new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1046$width$$, $JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$], null)], null), $JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$], null)], null) : $JSCompiler_inline_result$jscomp$975_c__5626__auto__$jscomp$161_data$jscomp$275_vec__70891$$], 
                                    null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__70882_index$jscomp$178$$], null)), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70852_$_iter__70879$$($APP.$cljs$core$rest$$($s__70880__$2_temp__5823__auto____$2$jscomp$6$$)));
                                  }
                                  return null;
                                }
                              }, null, null);
                            };
                          }($vec__70876$$, $event$jscomp$101$$, $event_data$jscomp$7$$, $s__70853__$2$$, $temp__5823__auto____$1$jscomp$56$$, $group$jscomp$9$$, $s__70766__$2$jscomp$7$$, $temp__5823__auto__$jscomp$442$$, $new_user_stats$jscomp$7$$, $grouped_stats$jscomp$7$$, $total_cols$jscomp$7$$)($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $event_data$jscomp$7$$));
                        }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $event$jscomp$101$$], null)), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765_$_iter__70852$$($APP.$cljs$core$rest$$($s__70853__$2$$)));
                      }
                      return null;
                    }
                  }, null, null);
                };
              }($group$jscomp$1$$, $s__70766__$2$$, $temp__5823__auto__$jscomp$435$$, $new_user_stats$$, $grouped_stats$$, $total_cols$$)($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($grouped_stats$$, $group$jscomp$1$$));
            }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $group$jscomp$1$$], null)), $sensei$frontend$admin$funnel$funnel_table_$_iter__70765$$($APP.$cljs$core$rest$$($s__70766__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($sensei$frontend$admin$funnel$all_funnel_groups$$);
  }()], null)], null);
}, $sensei$frontend$admin$funnel$user_selector$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$slider_radio_group$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$796$options$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2298$new$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  1, [$APP.$cljs$cst$836$label$$, "New Users"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1093$all$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$836$label$$, "All Users"], null)], null)], null), $APP.$cljs$cst$172$value$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5569$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_type$$], null))), $APP.$cljs$cst$1367$on_select$$, function($p1__70908_SHARP_$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5570$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_user_type$$, $p1__70908_SHARP_$$], null));
  }], null)], null);
}, $sensei$frontend$admin$funnel$language_selector$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$slider_radio_group$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$796$options$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1093$all$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  1, [$APP.$cljs$cst$836$label$$, "All languages"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$413$EN$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$836$label$$, "English"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$431$JP$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$836$label$$, "Japanese"], 
  null)], null)], null), $APP.$cljs$cst$172$value$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5571$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_language$$], null))), $APP.$cljs$cst$1367$on_select$$, function($p1__70916_SHARP_$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5572$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_user_language$$, $p1__70916_SHARP_$$], null));
  }], null)], null);
}, $sensei$frontend$admin$funnel$show_user_trace$$ = function($user$jscomp$14$$, $data$jscomp$277_detailed_QMARK_$$) {
  $data$jscomp$277_detailed_QMARK_$$ = $APP.$cljs$core$truth_$$($data$jscomp$277_detailed_QMARK_$$) ? $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5544$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_detailed_user_logs$$, $cljs$cst$5573$user_id$$.$cljs$core$IFn$_invoke$arity$1$($user$jscomp$14$$)], null))) : $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$first$$, 
  $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($date$jscomp$63_p__70926$$) {
    var $event$jscomp$106$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($date$jscomp$63_p__70926$$, 0, null);
    $date$jscomp$63_p__70926$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($date$jscomp$63_p__70926$$, 1, null);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$date$jscomp$63_p__70926$$, $event$jscomp$106$$], null);
  }, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($date$jscomp$64_p__70930$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($date$jscomp$64_p__70930$$, 0, null);
    $date$jscomp$64_p__70930$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($date$jscomp$64_p__70930$$, 1, null);
    return $APP.$tools$date$date_QMARK_$$($date$jscomp$64_p__70930$$);
  }, $user$jscomp$14$$)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Trace for user ", new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3144$a$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$805$href$$, "/admin/user-trace?uid\x3d" + 
  $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$5573$user_id$$.$cljs$core$IFn$_invoke$arity$1$($user$jscomp$14$$))], null), $cljs$cst$5573$user_id$$.$cljs$core$IFn$_invoke$arity$1$($user$jscomp$14$$)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$logs_table$show_logs$$, $data$jscomp$277_detailed_QMARK_$$], null)], null);
}, $sensei$frontend$admin$funnel$trace_selectors$$ = function($index$jscomp$180$$, $user_count$$) {
  function $button$jscomp$8$$($label$jscomp$72$$, $set_value$jscomp$1$$) {
    return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1792$button_DOT_btn_DOT_btn_secondary$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function() {
      return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5574$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_user_trace_index$$, $set_value$jscomp$1$$], null));
    }], null), $label$jscomp$72$$], null);
  }
  return new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5575$div_DOT_d_flex_DOT_mb_2_DOT_align_items_center$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$2880$gap$$, "5px"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$button$jscomp$8$$, "|\x3c", 0], null), new $APP.$cljs$core$PersistentVector$$(null, 
  3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$button$jscomp$8$$, "\x3c\x3c", $index$jscomp$180$$ - 10], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$button$jscomp$8$$, "\x3c", $index$jscomp$180$$ - 1], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1765$span_DOT_mx_1$$, $index$jscomp$180$$ + 1, "/", $user_count$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
  3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$button$jscomp$8$$, "\x3e", $index$jscomp$180$$ + 1], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$button$jscomp$8$$, "\x3e\x3e", $index$jscomp$180$$ + 10], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$button$jscomp$8$$, "\x3e|", $user_count$$ - 1], null)], null);
}, $sensei$frontend$admin$funnel$safe_index$$ = function($index$jscomp$181$$, $user_count$jscomp$1$$) {
  return $APP.$cljs$core$min$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$max$$.$cljs$core$IFn$_invoke$arity$2$($index$jscomp$181$$, 0), $user_count$jscomp$1$$ - 1);
}, $sensei$frontend$admin$funnel$detailed_select$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5576$div_DOT_equal_columns$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$836$label$$, "Detailed logs?"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$slider_toggle$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, 
  [$APP.$cljs$cst$116$id$$, $cljs$cst$5577$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_show_detailed_logs$$, $APP.$cljs$cst$172$value$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5578$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_detailed_logs_QMARK_$$], null))), $APP.$cljs$cst$933$on_change$$, function($new_value$jscomp$21$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5579$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_detailed_logs$$, $new_value$jscomp$21$$], null));
  }], null)], null)], null);
}, $sensei$frontend$admin$funnel$trace$$ = function() {
  var $user$jscomp$15_users$jscomp$2$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5580$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_fetch_users$$], null))), $user_count$jscomp$2$$ = $APP.$cljs$core$count$$($user$jscomp$15_users$jscomp$2$$), $index$jscomp$182$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5581$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_trace_index$$], null)));
  $user$jscomp$15_users$jscomp$2$$ = $user_count$jscomp$2$$ > 0 ? $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($user$jscomp$15_users$jscomp$2$$, $sensei$frontend$admin$funnel$safe_index$$($index$jscomp$182$$, $user_count$jscomp$2$$)) : null;
  var $detailed_logs_QMARK_$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5578$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_detailed_logs_QMARK_$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$trace_selectors$$, $index$jscomp$182$$, $user_count$jscomp$2$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$detailed_select$$], null), $APP.$cljs$core$truth_$$($user$jscomp$15_users$jscomp$2$$) ? 
  new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$show_user_trace$$, $user$jscomp$15_users$jscomp$2$$, $detailed_logs_QMARK_$$], null) : null], null);
}, $sensei$frontend$admin$funnel$matches_filters_QMARK_$$ = function($p__70986_referrer$jscomp$9$$, $user$jscomp$16$$) {
  var $event$jscomp$107_map__70988__$1$$ = $APP.$cljs$core$__destructure_map$$($p__70986_referrer$jscomp$9$$);
  $p__70986_referrer$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$107_map__70988__$1$$, $APP.$cljs$cst$1156$referrer$$);
  $event$jscomp$107_map__70988__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$107_map__70988__$1$$, $APP.$cljs$cst$132$event$$);
  var $user_ref$$ = $APP.$cljs$cst$1156$referrer$$.$cljs$core$IFn$_invoke$arity$1$($user$jscomp$16$$);
  return $APP.$cljs$core$every_QMARK_$$(function($G__70995_G__70995__$1_p__70990$$) {
    var $name$jscomp$154$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70995_G__70995__$1_p__70990$$, 0, null);
    $G__70995_G__70995__$1_p__70990$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70995_G__70995__$1_p__70990$$, 1, null);
    $G__70995_G__70995__$1_p__70990$$ = $G__70995_G__70995__$1_p__70990$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__70995_G__70995__$1_p__70990$$.$fqn$ : null;
    switch($G__70995_G__70995__$1_p__70990$$) {
      case "filter":
        return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($name$jscomp$154$$, $user_ref$$);
      case "remove":
        return $APP.$cljs$core$not_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($name$jscomp$154$$, $user_ref$$);
      default:
        throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__70995_G__70995__$1_p__70990$$));
    }
  }, $p__70986_referrer$jscomp$9$$) && $APP.$cljs$core$every_QMARK_$$(function($matches_QMARK__p__71002$$) {
    var $event__$1$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($matches_QMARK__p__71002$$, 0, null), $G__71013__$1_value$jscomp$399$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($matches_QMARK__p__71002$$, 1, null);
    $matches_QMARK__p__71002$$ = function() {
      var $and__5140__auto____$1$jscomp$114_or__5142__auto__$jscomp$528$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($user$jscomp$16$$, $event__$1$jscomp$1$$);
      return $APP.$cljs$core$truth_$$($and__5140__auto____$1$jscomp$114_or__5142__auto__$jscomp$528$$) ? $and__5140__auto____$1$jscomp$114_or__5142__auto__$jscomp$528$$ : ($and__5140__auto____$1$jscomp$114_or__5142__auto__$jscomp$528$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($event__$1$jscomp$1$$, $APP.$cljs$cst$5004$subscription$$)) ? $APP.$cljs$core$some$$(function($p__71007_s$jscomp$inline_7066$$) {
        var $k$jscomp$458$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71007_s$jscomp$inline_7066$$, 0, null);
        $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71007_s$jscomp$inline_7066$$, 1, null);
        $p__71007_s$jscomp$inline_7066$$ = $APP.$cljs$core$name$$($k$jscomp$458$$);
        return $APP.$goog$string$internal$startsWith$$($p__71007_s$jscomp$inline_7066$$, "subscription");
      }, $user$jscomp$16$$) : $and__5140__auto____$1$jscomp$114_or__5142__auto__$jscomp$528$$;
    }();
    $G__71013__$1_value$jscomp$399$$ = $G__71013__$1_value$jscomp$399$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__71013__$1_value$jscomp$399$$.$fqn$ : null;
    switch($G__71013__$1_value$jscomp$399$$) {
      case "filter":
        return $matches_QMARK__p__71002$$;
      case "remove":
        return $APP.$cljs$core$not$$($matches_QMARK__p__71002$$);
      default:
        throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__71013__$1_value$jscomp$399$$));
    }
  }, $event$jscomp$107_map__70988__$1$$);
}, $sensei$frontend$admin$funnel$calc_stats$$ = function($event_counts_users$jscomp$3$$) {
  var $total$jscomp$12$$ = $APP.$cljs$core$count$$($event_counts_users$jscomp$3$$);
  $event_counts_users$jscomp$3$$ = $APP.$cljs$core$frequencies$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$some_QMARK_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($k$jscomp$459$$) {
    if ($APP.$cljs$core$truth_$$($k$jscomp$459$$)) {
      var $event_str$$ = $APP.$cljs$core$name$$($k$jscomp$459$$);
      var $fexpr__71041$jscomp$inline_6722_ignore_event_QMARK__or__5142__auto__$jscomp$inline_6721$$ = new $APP.$cljs$core$PersistentHashSet$$(null, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1156$referrer$$, null, $cljs$cst$5583$stayed_on_site_0$$, null, $cljs$cst$5584$tutorial_seen_register$$, null], null), null);
      $fexpr__71041$jscomp$inline_6722_ignore_event_QMARK__or__5142__auto__$jscomp$inline_6721$$ = $fexpr__71041$jscomp$inline_6722_ignore_event_QMARK__or__5142__auto__$jscomp$inline_6721$$.$cljs$core$IFn$_invoke$arity$1$ ? $fexpr__71041$jscomp$inline_6722_ignore_event_QMARK__or__5142__auto__$jscomp$inline_6721$$.$cljs$core$IFn$_invoke$arity$1$($k$jscomp$459$$) : $fexpr__71041$jscomp$inline_6722_ignore_event_QMARK__or__5142__auto__$jscomp$inline_6721$$.call(null, $k$jscomp$459$$);
      $fexpr__71041$jscomp$inline_6722_ignore_event_QMARK__or__5142__auto__$jscomp$inline_6721$$ = $APP.$cljs$core$truth_$$($fexpr__71041$jscomp$inline_6722_ignore_event_QMARK__or__5142__auto__$jscomp$inline_6721$$) ? $fexpr__71041$jscomp$inline_6722_ignore_event_QMARK__or__5142__auto__$jscomp$inline_6721$$ : $APP.$goog$string$internal$startsWith$$($event_str$$, "added-problem") && !$APP.$goog$string$internal$endsWith$$($event_str$$, "-1") && !$APP.$goog$string$internal$endsWith$$($event_str$$, "-10") && 
      !$APP.$goog$string$internal$endsWith$$($event_str$$, "-25") && !$APP.$goog$string$internal$endsWith$$($event_str$$, "-100") || $APP.$goog$string$internal$startsWith$$($event_str$$, "started-training") && !$APP.$goog$string$internal$endsWith$$($event_str$$, "-1") && !$APP.$goog$string$internal$endsWith$$($event_str$$, "-3") && !$APP.$goog$string$internal$endsWith$$($event_str$$, "-10") || $APP.$goog$string$internal$startsWith$$($event_str$$, "started-quiz") && !$APP.$goog$string$internal$endsWith$$($event_str$$, 
      "-1") && !$APP.$goog$string$internal$endsWith$$($event_str$$, "-3") && !$APP.$goog$string$internal$endsWith$$($event_str$$, "-10");
      return $APP.$cljs$core$truth_$$($fexpr__71041$jscomp$inline_6722_ignore_event_QMARK__or__5142__auto__$jscomp$inline_6721$$) ? null : $APP.$goog$string$internal$startsWith$$($event_str$$, "subscription-") ? $APP.$cljs$cst$5004$subscription$$ : $k$jscomp$459$$;
    }
    return null;
  }, $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function($user$jscomp$18$$) {
    return $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71065_v$jscomp$412$$) {
      var $k$jscomp$460$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71065_v$jscomp$412$$, 0, null);
      $p__71065_v$jscomp$412$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71065_v$jscomp$412$$, 1, null);
      return $APP.$tools$date$date_QMARK_$$($p__71065_v$jscomp$412$$) ? $k$jscomp$460$$ : null;
    }, $user$jscomp$18$$);
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$event_counts_users$jscomp$3$$])))));
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($event_counts_users$jscomp$3$$, $APP.$cljs$cst$2023$total$$, $total$jscomp$12$$);
}, $sensei$frontend$admin$funnel$assign_funnel_group$$ = function($event$jscomp$108$$) {
  var $event_name$$ = $APP.$cljs$core$name$$($event$jscomp$108$$);
  var $JSCompiler_inline_result$jscomp$4931_fexpr__71106$jscomp$inline_6725_or__5142__auto__$jscomp$inline_6724$$ = new $APP.$cljs$core$PersistentHashSet$$(null, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$873$registration$$, null], null), null);
  $JSCompiler_inline_result$jscomp$4931_fexpr__71106$jscomp$inline_6725_or__5142__auto__$jscomp$inline_6724$$ = $JSCompiler_inline_result$jscomp$4931_fexpr__71106$jscomp$inline_6725_or__5142__auto__$jscomp$inline_6724$$.$cljs$core$IFn$_invoke$arity$1$ ? $JSCompiler_inline_result$jscomp$4931_fexpr__71106$jscomp$inline_6725_or__5142__auto__$jscomp$inline_6724$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$108$$) : $JSCompiler_inline_result$jscomp$4931_fexpr__71106$jscomp$inline_6725_or__5142__auto__$jscomp$inline_6724$$.call(null, 
  $event$jscomp$108$$);
  $JSCompiler_inline_result$jscomp$4931_fexpr__71106$jscomp$inline_6725_or__5142__auto__$jscomp$inline_6724$$ = $APP.$cljs$core$truth_$$($JSCompiler_inline_result$jscomp$4931_fexpr__71106$jscomp$inline_6725_or__5142__auto__$jscomp$inline_6724$$) ? $JSCompiler_inline_result$jscomp$4931_fexpr__71106$jscomp$inline_6725_or__5142__auto__$jscomp$inline_6724$$ : $APP.$goog$string$internal$startsWith$$($event_name$$, "subscription");
  return $APP.$cljs$core$truth_$$($JSCompiler_inline_result$jscomp$4931_fexpr__71106$jscomp$inline_6725_or__5142__auto__$jscomp$inline_6724$$) ? "General" : $APP.$goog$string$internal$startsWith$$($event_name$$, "stayed-on-site") ? "Stayed on site" : $APP.$goog$string$internal$startsWith$$($event_name$$, "stayed-on-page-game") ? "Stayed on game page" : $APP.$goog$string$internal$startsWith$$($event_name$$, "tutorial-seen") ? "Tutorial" : $APP.$goog$string$internal$startsWith$$($event_name$$, "uploaded") || 
  $APP.$goog$string$internal$startsWith$$($event_name$$, "stayed-on-page-upload") ? "Uploads" : $APP.$goog$string$internal$startsWith$$($event_name$$, "started-training") || $APP.$goog$string$internal$startsWith$$($event_name$$, "started-quiz") || $APP.$goog$string$internal$startsWith$$($event_name$$, "added-problem") ? "Problems" : $APP.$cljs$core$println$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unknown event type:", $event$jscomp$108$$]));
}, $sensei$frontend$admin$life_time_value$churn_table$$ = function() {
  var $data$jscomp$279$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5590$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_churn_data$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5591$table_DOT_table_DOT_table_sm_DOT_table_bordered$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1258$thead$$, new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$2733$th$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5592$th_DOT_text_center$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1261$col_span$$, 3], null), "basic"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5592$th_DOT_text_center$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1261$col_span$$, 
  3], null), "dan"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5592$th_DOT_text_center$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1261$col_span$$, 3], null), "pro"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$2733$th$$, "month"], null), function() {
    return function $sensei$frontend$admin$life_time_value$churn_table_$_iter__70677$$($s__70678$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (var $s__70678__$1$$ = $s__70678$$;;) {
          var $fs__5625__auto__$jscomp$6_temp__5823__auto__$jscomp$449$$ = $APP.$cljs$core$seq$$($s__70678__$1$$);
          if ($fs__5625__auto__$jscomp$6_temp__5823__auto__$jscomp$449$$) {
            var $xs__6383__auto__$jscomp$18$$ = $fs__5625__auto__$jscomp$6_temp__5823__auto__$jscomp$449$$, $plan$jscomp$54$$ = $APP.$cljs$core$first$$($xs__6383__auto__$jscomp$18$$);
            if ($fs__5625__auto__$jscomp$6_temp__5823__auto__$jscomp$449$$ = $APP.$cljs$core$seq$$(function($s__70678__$1$jscomp$1$$, $plan$jscomp$55$$, $xs__6383__auto__$jscomp$19$$, $temp__5823__auto__$jscomp$450$$, $data$jscomp$280$$) {
              return function $sensei$frontend$admin$life_time_value$churn_table_$_iter__70677_$_iter__70679$$($s__70680$$) {
                return new $APP.$cljs$core$LazySeq$$(null, function($s__70678__$1$jscomp$2$$, $plan$jscomp$56$$) {
                  return function() {
                    for (;;) {
                      var $s__70680__$2_temp__5823__auto____$1$jscomp$60$$ = $APP.$cljs$core$seq$$($s__70680$$);
                      if ($s__70680__$2_temp__5823__auto____$1$jscomp$60$$) {
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70680__$2_temp__5823__auto____$1$jscomp$60$$)) {
                          var $JSCompiler_inline_result$jscomp$978_c__5626__auto__$jscomp$164$$ = $APP.$cljs$core$_chunked_first$$($s__70680__$2_temp__5823__auto____$1$jscomp$60$$), $size__5627__auto__$jscomp$164$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$978_c__5626__auto__$jscomp$164$$), $b__70682_stat$jscomp$2$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$164$$);
                          a: {
                            for (var $i__70681$jscomp$inline_4592$$ = 0;;) {
                              if ($i__70681$jscomp$inline_4592$$ < $size__5627__auto__$jscomp$164$$) {
                                var $stat$jscomp$inline_4593_x$jscomp$inline_6728$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$978_c__5626__auto__$jscomp$164$$, $i__70681$jscomp$inline_4592$$), $b$jscomp$inline_6727$$ = $b__70682_stat$jscomp$2$$;
                                $stat$jscomp$inline_4593_x$jscomp$inline_6728$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, $stat$jscomp$inline_4593_x$jscomp$inline_6728$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$56$$, $stat$jscomp$inline_4593_x$jscomp$inline_6728$$], 
                                null)], null));
                                $b$jscomp$inline_6727$$.add($stat$jscomp$inline_4593_x$jscomp$inline_6728$$);
                                $i__70681$jscomp$inline_4592$$ += 1;
                              } else {
                                $JSCompiler_inline_result$jscomp$978_c__5626__auto__$jscomp$164$$ = !0;
                                break a;
                              }
                            }
                            $JSCompiler_inline_result$jscomp$978_c__5626__auto__$jscomp$164$$ = void 0;
                          }
                          return $JSCompiler_inline_result$jscomp$978_c__5626__auto__$jscomp$164$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70682_stat$jscomp$2$$), $sensei$frontend$admin$life_time_value$churn_table_$_iter__70677_$_iter__70679$$($APP.$cljs$core$_chunked_rest$$($s__70680__$2_temp__5823__auto____$1$jscomp$60$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70682_stat$jscomp$2$$), null);
                        }
                        $b__70682_stat$jscomp$2$$ = $APP.$cljs$core$first$$($s__70680__$2_temp__5823__auto____$1$jscomp$60$$);
                        return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, $b__70682_stat$jscomp$2$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$56$$, $b__70682_stat$jscomp$2$$], null)], null)), $sensei$frontend$admin$life_time_value$churn_table_$_iter__70677_$_iter__70679$$($APP.$cljs$core$rest$$($s__70680__$2_temp__5823__auto____$1$jscomp$60$$)));
                      }
                      return null;
                    }
                  };
                }($s__70678__$1$jscomp$1$$, $plan$jscomp$55$$, $xs__6383__auto__$jscomp$19$$, $temp__5823__auto__$jscomp$450$$, $data$jscomp$280$$), null, null);
              };
            }($s__70678__$1$$, $plan$jscomp$54$$, $xs__6383__auto__$jscomp$18$$, $fs__5625__auto__$jscomp$6_temp__5823__auto__$jscomp$449$$, $data$jscomp$279$$)(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["subs", "cancelled", "churn"], null)))) {
              return $APP.$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($fs__5625__auto__$jscomp$6_temp__5823__auto__$jscomp$449$$, $sensei$frontend$admin$life_time_value$churn_table_$_iter__70677$$($APP.$cljs$core$rest$$($s__70678__$1$$)));
            }
            $s__70678__$1$$ = $APP.$cljs$core$rest$$($s__70678__$1$$);
          } else {
            return null;
          }
        }
      }, null, null);
    }(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1201$basic$$, $APP.$cljs$cst$1202$standard$$, $APP.$cljs$cst$1203$pro$$], null));
  }()], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1263$tbody$$, function() {
    return function $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713$$($s__70714$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$452$$ = $APP.$cljs$core$seq$$($s__70714$$);
          if ($temp__5823__auto__$jscomp$452$$) {
            var $s__70714__$2$$ = $temp__5823__auto__$jscomp$452$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70714__$2$$)) {
              var $c__5626__auto__$jscomp$165$$ = $APP.$cljs$core$_chunked_first$$($s__70714__$2$$), $size__5627__auto__$jscomp$165$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$165$$), $b__70716$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$165$$);
              return function() {
                for (var $i__70715$$ = 0;;) {
                  if ($i__70715$$ < $size__5627__auto__$jscomp$165$$) {
                    var $vec__70728$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$165$$, $i__70715$$), $month$jscomp$15$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70728$$, 0, null), $rates$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70728$$, 1, null);
                    $APP.$cljs$core$chunk_append$$($b__70716$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $month$jscomp$15$$], null), function() {
                      return function($i__70715$jscomp$1$$, $vec__70728$jscomp$1$$, $month$jscomp$16$$, $rates$jscomp$2$$, $c__5626__auto__$jscomp$166$$, $size__5627__auto__$jscomp$166$$, $b__70716$jscomp$1$$, $s__70714__$2$jscomp$1$$, $temp__5823__auto__$jscomp$453$$, $data$jscomp$282$$) {
                        return function $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70735$$($s__70736$$) {
                          return new $APP.$cljs$core$LazySeq$$(null, function($i__70715$jscomp$2$$, $vec__70728$jscomp$2$$, $month$jscomp$17$$, $rates$jscomp$3$$, $c__5626__auto__$jscomp$167$$, $size__5627__auto__$jscomp$167$$, $b__70716$jscomp$2$$, $s__70714__$2$jscomp$2$$, $temp__5823__auto__$jscomp$454$$, $data$jscomp$283$$) {
                            return function() {
                              for (var $s__70736__$1$$ = $s__70736$$;;) {
                                var $fs__5625__auto__$jscomp$7_temp__5823__auto____$1$jscomp$61$$ = $APP.$cljs$core$seq$$($s__70736__$1$$);
                                if ($fs__5625__auto__$jscomp$7_temp__5823__auto____$1$jscomp$61$$) {
                                  var $xs__6383__auto__$jscomp$21$$ = $fs__5625__auto__$jscomp$7_temp__5823__auto____$1$jscomp$61$$, $plan$jscomp$57$$ = $APP.$cljs$core$first$$($xs__6383__auto__$jscomp$21$$);
                                  if ($fs__5625__auto__$jscomp$7_temp__5823__auto____$1$jscomp$61$$ = $APP.$cljs$core$seq$$(function($s__70736__$1$jscomp$1$$, $i__70715$jscomp$3$$, $plan$jscomp$58$$, $xs__6383__auto__$jscomp$22$$, $temp__5823__auto____$1$jscomp$62$$, $vec__70728$jscomp$3$$, $month$jscomp$18$$, $rates$jscomp$4$$, $c__5626__auto__$jscomp$168$$, $size__5627__auto__$jscomp$168$$, $b__70716$jscomp$3$$, $s__70714__$2$jscomp$3$$, $temp__5823__auto__$jscomp$455$$, $data$jscomp$284$$) {
                                    return function $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70735_$_iter__70737$$($s__70738$$) {
                                      return new $APP.$cljs$core$LazySeq$$(null, function($s__70736__$1$jscomp$2$$, $i__70715$jscomp$4$$, $plan$jscomp$59$$, $xs__6383__auto__$jscomp$23$$, $temp__5823__auto____$1$jscomp$63$$, $vec__70728$jscomp$4$$, $month$jscomp$19$$, $rates$jscomp$5$$) {
                                        return function() {
                                          for (;;) {
                                            var $s__70738__$2_temp__5823__auto____$2$jscomp$7$$ = $APP.$cljs$core$seq$$($s__70738$$);
                                            if ($s__70738__$2_temp__5823__auto____$2$jscomp$7$$) {
                                              if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70738__$2_temp__5823__auto____$2$jscomp$7$$)) {
                                                var $JSCompiler_inline_result$jscomp$979_c__5626__auto____$1$jscomp$15$$ = $APP.$cljs$core$_chunked_first$$($s__70738__$2_temp__5823__auto____$2$jscomp$7$$), $size__5627__auto____$1$jscomp$15$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$979_c__5626__auto____$1$jscomp$15$$), $b__70740_stat$jscomp$4$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$15$$);
                                                a: {
                                                  for (var $i__70739$jscomp$inline_4595$$ = 0;;) {
                                                    if ($i__70739$jscomp$inline_4595$$ < $size__5627__auto____$1$jscomp$15$$) {
                                                      var $stat$jscomp$inline_4596_x$jscomp$inline_6731$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$979_c__5626__auto____$1$jscomp$15$$, $i__70739$jscomp$inline_4595$$), $b$jscomp$inline_6730$$ = $b__70740_stat$jscomp$4$$;
                                                      $stat$jscomp$inline_4596_x$jscomp$inline_6731$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($rates$jscomp$5$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$59$$, $stat$jscomp$inline_4596_x$jscomp$inline_6731$$], 
                                                      null)), $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$($stat$jscomp$inline_4596_x$jscomp$inline_6731$$) : $sensei$frontend$admin$life_time_value$units$$.call(null, $stat$jscomp$inline_4596_x$jscomp$inline_6731$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, new $APP.$cljs$core$PersistentVector$$(null, 
                                                      2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$59$$, $stat$jscomp$inline_4596_x$jscomp$inline_6731$$], null)], null));
                                                      $b$jscomp$inline_6730$$.add($stat$jscomp$inline_4596_x$jscomp$inline_6731$$);
                                                      $i__70739$jscomp$inline_4595$$ += 1;
                                                    } else {
                                                      $JSCompiler_inline_result$jscomp$979_c__5626__auto____$1$jscomp$15$$ = !0;
                                                      break a;
                                                    }
                                                  }
                                                  $JSCompiler_inline_result$jscomp$979_c__5626__auto____$1$jscomp$15$$ = void 0;
                                                }
                                                return $JSCompiler_inline_result$jscomp$979_c__5626__auto____$1$jscomp$15$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70740_stat$jscomp$4$$), $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70735_$_iter__70737$$($APP.$cljs$core$_chunked_rest$$($s__70738__$2_temp__5823__auto____$2$jscomp$7$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70740_stat$jscomp$4$$), null);
                                              }
                                              $b__70740_stat$jscomp$4$$ = $APP.$cljs$core$first$$($s__70738__$2_temp__5823__auto____$2$jscomp$7$$);
                                              return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($rates$jscomp$5$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$59$$, $b__70740_stat$jscomp$4$$], null)), $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$ ? 
                                              $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$($b__70740_stat$jscomp$4$$) : $sensei$frontend$admin$life_time_value$units$$.call(null, $b__70740_stat$jscomp$4$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$59$$, $b__70740_stat$jscomp$4$$], null)], null)), $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70735_$_iter__70737$$($APP.$cljs$core$rest$$($s__70738__$2_temp__5823__auto____$2$jscomp$7$$)));
                                            }
                                            return null;
                                          }
                                        };
                                      }($s__70736__$1$jscomp$1$$, $i__70715$jscomp$3$$, $plan$jscomp$58$$, $xs__6383__auto__$jscomp$22$$, $temp__5823__auto____$1$jscomp$62$$, $vec__70728$jscomp$3$$, $month$jscomp$18$$, $rates$jscomp$4$$, $c__5626__auto__$jscomp$168$$, $size__5627__auto__$jscomp$168$$, $b__70716$jscomp$3$$, $s__70714__$2$jscomp$3$$, $temp__5823__auto__$jscomp$455$$, $data$jscomp$284$$), null, null);
                                    };
                                  }($s__70736__$1$$, $i__70715$jscomp$2$$, $plan$jscomp$57$$, $xs__6383__auto__$jscomp$21$$, $fs__5625__auto__$jscomp$7_temp__5823__auto____$1$jscomp$61$$, $vec__70728$jscomp$2$$, $month$jscomp$17$$, $rates$jscomp$3$$, $c__5626__auto__$jscomp$167$$, $size__5627__auto__$jscomp$167$$, $b__70716$jscomp$2$$, $s__70714__$2$jscomp$2$$, $temp__5823__auto__$jscomp$454$$, $data$jscomp$283$$)(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                  [$APP.$cljs$cst$2023$total$$, $APP.$cljs$cst$825$cancel$$, $cljs$cst$5586$churn$$], null)))) {
                                    return $APP.$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($fs__5625__auto__$jscomp$7_temp__5823__auto____$1$jscomp$61$$, $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70735$$($APP.$cljs$core$rest$$($s__70736__$1$$)));
                                  }
                                  $s__70736__$1$$ = $APP.$cljs$core$rest$$($s__70736__$1$$);
                                } else {
                                  return null;
                                }
                              }
                            };
                          }($i__70715$jscomp$1$$, $vec__70728$jscomp$1$$, $month$jscomp$16$$, $rates$jscomp$2$$, $c__5626__auto__$jscomp$166$$, $size__5627__auto__$jscomp$166$$, $b__70716$jscomp$1$$, $s__70714__$2$jscomp$1$$, $temp__5823__auto__$jscomp$453$$, $data$jscomp$282$$), null, null);
                        };
                      }($i__70715$$, $vec__70728$$, $month$jscomp$15$$, $rates$jscomp$1$$, $c__5626__auto__$jscomp$165$$, $size__5627__auto__$jscomp$165$$, $b__70716$$, $s__70714__$2$$, $temp__5823__auto__$jscomp$452$$, $data$jscomp$279$$)(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1201$basic$$, $APP.$cljs$cst$1202$standard$$, $APP.$cljs$cst$1203$pro$$], null));
                    }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $month$jscomp$15$$], null)));
                    $i__70715$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70716$$), $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713$$($APP.$cljs$core$_chunked_rest$$($s__70714__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70716$$), null);
            }
            var $vec__70791$$ = $APP.$cljs$core$first$$($s__70714__$2$$), $month$jscomp$14$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70791$$, 0, null), $rates$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__70791$$, 1, null);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $month$jscomp$14$$], null), function() {
              return function($vec__70791$jscomp$1$$, $month$jscomp$20$$, $rates$jscomp$6$$, $s__70714__$2$jscomp$5$$, $temp__5823__auto__$jscomp$457$$, $data$jscomp$286$$) {
                return function $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70794$$($s__70795$$) {
                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                    for (var $s__70795__$1$$ = $s__70795$$;;) {
                      var $fs__5625__auto__$jscomp$8_temp__5823__auto____$1$jscomp$64$$ = $APP.$cljs$core$seq$$($s__70795__$1$$);
                      if ($fs__5625__auto__$jscomp$8_temp__5823__auto____$1$jscomp$64$$) {
                        var $xs__6383__auto__$jscomp$24$$ = $fs__5625__auto__$jscomp$8_temp__5823__auto____$1$jscomp$64$$, $plan$jscomp$60$$ = $APP.$cljs$core$first$$($xs__6383__auto__$jscomp$24$$);
                        if ($fs__5625__auto__$jscomp$8_temp__5823__auto____$1$jscomp$64$$ = $APP.$cljs$core$seq$$(function($s__70795__$1$jscomp$1$$, $plan$jscomp$61$$, $xs__6383__auto__$jscomp$25$$, $temp__5823__auto____$1$jscomp$65$$, $vec__70791$jscomp$2$$, $month$jscomp$21$$, $rates$jscomp$7$$, $s__70714__$2$jscomp$6$$, $temp__5823__auto__$jscomp$458$$, $data$jscomp$287$$) {
                          return function $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70794_$_iter__70798$$($s__70799$$) {
                            return new $APP.$cljs$core$LazySeq$$(null, function($s__70795__$1$jscomp$2$$, $plan$jscomp$62$$, $xs__6383__auto__$jscomp$26$$, $temp__5823__auto____$1$jscomp$66$$, $vec__70791$jscomp$3$$, $month$jscomp$22$$, $rates$jscomp$8$$) {
                              return function() {
                                for (;;) {
                                  var $s__70799__$2_temp__5823__auto____$2$jscomp$8$$ = $APP.$cljs$core$seq$$($s__70799$$);
                                  if ($s__70799__$2_temp__5823__auto____$2$jscomp$8$$) {
                                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70799__$2_temp__5823__auto____$2$jscomp$8$$)) {
                                      var $JSCompiler_inline_result$jscomp$980_c__5626__auto__$jscomp$170$$ = $APP.$cljs$core$_chunked_first$$($s__70799__$2_temp__5823__auto____$2$jscomp$8$$), $size__5627__auto__$jscomp$170$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$980_c__5626__auto__$jscomp$170$$), $b__70803_stat$jscomp$6$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$170$$);
                                      a: {
                                        for (var $i__70801$jscomp$inline_4598$$ = 0;;) {
                                          if ($i__70801$jscomp$inline_4598$$ < $size__5627__auto__$jscomp$170$$) {
                                            var $stat$jscomp$inline_4599_x$jscomp$inline_6734$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$980_c__5626__auto__$jscomp$170$$, $i__70801$jscomp$inline_4598$$), $b$jscomp$inline_6733$$ = $b__70803_stat$jscomp$6$$;
                                            $stat$jscomp$inline_4599_x$jscomp$inline_6734$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($rates$jscomp$8$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$62$$, $stat$jscomp$inline_4599_x$jscomp$inline_6734$$], null)), 
                                            $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$($stat$jscomp$inline_4599_x$jscomp$inline_6734$$) : $sensei$frontend$admin$life_time_value$units$$.call(null, $stat$jscomp$inline_4599_x$jscomp$inline_6734$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                            [$plan$jscomp$62$$, $stat$jscomp$inline_4599_x$jscomp$inline_6734$$], null)], null));
                                            $b$jscomp$inline_6733$$.add($stat$jscomp$inline_4599_x$jscomp$inline_6734$$);
                                            $i__70801$jscomp$inline_4598$$ += 1;
                                          } else {
                                            $JSCompiler_inline_result$jscomp$980_c__5626__auto__$jscomp$170$$ = !0;
                                            break a;
                                          }
                                        }
                                        $JSCompiler_inline_result$jscomp$980_c__5626__auto__$jscomp$170$$ = void 0;
                                      }
                                      return $JSCompiler_inline_result$jscomp$980_c__5626__auto__$jscomp$170$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70803_stat$jscomp$6$$), $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70794_$_iter__70798$$($APP.$cljs$core$_chunked_rest$$($s__70799__$2_temp__5823__auto____$2$jscomp$8$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70803_stat$jscomp$6$$), null);
                                    }
                                    $b__70803_stat$jscomp$6$$ = $APP.$cljs$core$first$$($s__70799__$2_temp__5823__auto____$2$jscomp$8$$);
                                    return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($rates$jscomp$8$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$62$$, $b__70803_stat$jscomp$6$$], null)), $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$ ? 
                                    $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$($b__70803_stat$jscomp$6$$) : $sensei$frontend$admin$life_time_value$units$$.call(null, $b__70803_stat$jscomp$6$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$62$$, $b__70803_stat$jscomp$6$$], null)], null)), $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70794_$_iter__70798$$($APP.$cljs$core$rest$$($s__70799__$2_temp__5823__auto____$2$jscomp$8$$)));
                                  }
                                  return null;
                                }
                              };
                            }($s__70795__$1$jscomp$1$$, $plan$jscomp$61$$, $xs__6383__auto__$jscomp$25$$, $temp__5823__auto____$1$jscomp$65$$, $vec__70791$jscomp$2$$, $month$jscomp$21$$, $rates$jscomp$7$$, $s__70714__$2$jscomp$6$$, $temp__5823__auto__$jscomp$458$$, $data$jscomp$287$$), null, null);
                          };
                        }($s__70795__$1$$, $plan$jscomp$60$$, $xs__6383__auto__$jscomp$24$$, $fs__5625__auto__$jscomp$8_temp__5823__auto____$1$jscomp$64$$, $vec__70791$jscomp$1$$, $month$jscomp$20$$, $rates$jscomp$6$$, $s__70714__$2$jscomp$5$$, $temp__5823__auto__$jscomp$457$$, $data$jscomp$286$$)(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2023$total$$, $APP.$cljs$cst$825$cancel$$, $cljs$cst$5586$churn$$], null)))) {
                          return $APP.$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($fs__5625__auto__$jscomp$8_temp__5823__auto____$1$jscomp$64$$, $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713_$_iter__70794$$($APP.$cljs$core$rest$$($s__70795__$1$$)));
                        }
                        $s__70795__$1$$ = $APP.$cljs$core$rest$$($s__70795__$1$$);
                      } else {
                        return null;
                      }
                    }
                  }, null, null);
                };
              }($vec__70791$$, $month$jscomp$14$$, $rates$$, $s__70714__$2$$, $temp__5823__auto__$jscomp$452$$, $data$jscomp$279$$)(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1201$basic$$, $APP.$cljs$cst$1202$standard$$, $APP.$cljs$cst$1203$pro$$], null));
            }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $month$jscomp$14$$], null)), $sensei$frontend$admin$life_time_value$churn_table_$_iter__70713$$($APP.$cljs$core$rest$$($s__70714__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($data$jscomp$279$$);
  }()], null)], null);
}, $sensei$frontend$admin$life_time_value$ltv_table$$ = function() {
  var $data$jscomp$289$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5593$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_ltv_data$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5591$table_DOT_table_DOT_table_sm_DOT_table_bordered$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1258$thead$$, new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$2733$th$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5592$th_DOT_text_center$$, "basic"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5592$th_DOT_text_center$$, "dan"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5592$th_DOT_text_center$$, "pro"], null)], null)], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1263$tbody$$, function() {
    return function $sensei$frontend$admin$life_time_value$ltv_table_$_iter__70837$$($s__70838$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$460$$ = $APP.$cljs$core$seq$$($s__70838$$);
          if ($temp__5823__auto__$jscomp$460$$) {
            var $s__70838__$2$$ = $temp__5823__auto__$jscomp$460$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70838__$2$$)) {
              var $c__5626__auto__$jscomp$171$$ = $APP.$cljs$core$_chunked_first$$($s__70838__$2$$), $size__5627__auto__$jscomp$171$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$171$$), $b__70840$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$171$$);
              return function() {
                for (var $i__70839$$ = 0;;) {
                  if ($i__70839$$ < $size__5627__auto__$jscomp$171$$) {
                    var $stat$jscomp$9$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$171$$, $i__70839$$);
                    $APP.$cljs$core$chunk_append$$($b__70840$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5566$td_DOT_fw_bold$$, $APP.$cljs$core$name$$($stat$jscomp$9$$)], null), function() {
                      return function($i__70839$jscomp$1$$, $stat$jscomp$10$$, $c__5626__auto__$jscomp$172$$, $size__5627__auto__$jscomp$172$$, $b__70840$jscomp$1$$, $s__70838__$2$jscomp$1$$, $temp__5823__auto__$jscomp$461$$, $data$jscomp$290$$) {
                        return function $sensei$frontend$admin$life_time_value$ltv_table_$_iter__70837_$_iter__70845$$($s__70846$$) {
                          return new $APP.$cljs$core$LazySeq$$(null, function($i__70839$jscomp$2$$, $stat$jscomp$11$$, $c__5626__auto__$jscomp$173$$, $size__5627__auto__$jscomp$173$$, $b__70840$jscomp$2$$, $s__70838__$2$jscomp$2$$, $temp__5823__auto__$jscomp$462$$, $data$jscomp$291$$) {
                            return function() {
                              for (;;) {
                                var $s__70846__$2_temp__5823__auto____$1$jscomp$67$$ = $APP.$cljs$core$seq$$($s__70846$$);
                                if ($s__70846__$2_temp__5823__auto____$1$jscomp$67$$) {
                                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70846__$2_temp__5823__auto____$1$jscomp$67$$)) {
                                    var $JSCompiler_inline_result$jscomp$981_c__5626__auto____$1$jscomp$16$$ = $APP.$cljs$core$_chunked_first$$($s__70846__$2_temp__5823__auto____$1$jscomp$67$$), $size__5627__auto____$1$jscomp$16$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$981_c__5626__auto____$1$jscomp$16$$), $b__70848_plan$jscomp$63$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$16$$);
                                    a: {
                                      for (var $i__70847$jscomp$inline_4601$$ = 0;;) {
                                        if ($i__70847$jscomp$inline_4601$$ < $size__5627__auto____$1$jscomp$16$$) {
                                          var $plan$jscomp$inline_4602_x$jscomp$inline_6737$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$981_c__5626__auto____$1$jscomp$16$$, $i__70847$jscomp$inline_4601$$), $b$jscomp$inline_6736$$ = $b__70848_plan$jscomp$63$$;
                                          $plan$jscomp$inline_4602_x$jscomp$inline_6737$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($data$jscomp$291$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$inline_4602_x$jscomp$inline_6737$$, $stat$jscomp$11$$], null)), 
                                          $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$($stat$jscomp$11$$) : $sensei$frontend$admin$life_time_value$units$$.call(null, $stat$jscomp$11$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $plan$jscomp$inline_4602_x$jscomp$inline_6737$$], null));
                                          $b$jscomp$inline_6736$$.add($plan$jscomp$inline_4602_x$jscomp$inline_6737$$);
                                          $i__70847$jscomp$inline_4601$$ += 1;
                                        } else {
                                          $JSCompiler_inline_result$jscomp$981_c__5626__auto____$1$jscomp$16$$ = !0;
                                          break a;
                                        }
                                      }
                                      $JSCompiler_inline_result$jscomp$981_c__5626__auto____$1$jscomp$16$$ = void 0;
                                    }
                                    return $JSCompiler_inline_result$jscomp$981_c__5626__auto____$1$jscomp$16$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70848_plan$jscomp$63$$), $sensei$frontend$admin$life_time_value$ltv_table_$_iter__70837_$_iter__70845$$($APP.$cljs$core$_chunked_rest$$($s__70846__$2_temp__5823__auto____$1$jscomp$67$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70848_plan$jscomp$63$$), null);
                                  }
                                  $b__70848_plan$jscomp$63$$ = $APP.$cljs$core$first$$($s__70846__$2_temp__5823__auto____$1$jscomp$67$$);
                                  return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($data$jscomp$291$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$b__70848_plan$jscomp$63$$, $stat$jscomp$11$$], null)), $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$ ? 
                                  $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$($stat$jscomp$11$$) : $sensei$frontend$admin$life_time_value$units$$.call(null, $stat$jscomp$11$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__70848_plan$jscomp$63$$], null)), $sensei$frontend$admin$life_time_value$ltv_table_$_iter__70837_$_iter__70845$$($APP.$cljs$core$rest$$($s__70846__$2_temp__5823__auto____$1$jscomp$67$$)));
                                }
                                return null;
                              }
                            };
                          }($i__70839$jscomp$1$$, $stat$jscomp$10$$, $c__5626__auto__$jscomp$172$$, $size__5627__auto__$jscomp$172$$, $b__70840$jscomp$1$$, $s__70838__$2$jscomp$1$$, $temp__5823__auto__$jscomp$461$$, $data$jscomp$290$$), null, null);
                        };
                      }($i__70839$$, $stat$jscomp$9$$, $c__5626__auto__$jscomp$171$$, $size__5627__auto__$jscomp$171$$, $b__70840$$, $s__70838__$2$$, $temp__5823__auto__$jscomp$460$$, $data$jscomp$289$$)(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1201$basic$$, $APP.$cljs$cst$1202$standard$$, $APP.$cljs$cst$1203$pro$$], null));
                    }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $stat$jscomp$9$$], null)));
                    $i__70839$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70840$$), $sensei$frontend$admin$life_time_value$ltv_table_$_iter__70837$$($APP.$cljs$core$_chunked_rest$$($s__70838__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70840$$), null);
            }
            var $stat$jscomp$8$$ = $APP.$cljs$core$first$$($s__70838__$2$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5566$td_DOT_fw_bold$$, $APP.$cljs$core$name$$($stat$jscomp$8$$)], null), function() {
              return function($stat$jscomp$12$$, $s__70838__$2$jscomp$3$$, $temp__5823__auto__$jscomp$463$$, $data$jscomp$292$$) {
                return function $sensei$frontend$admin$life_time_value$ltv_table_$_iter__70837_$_iter__70856$$($s__70857$$) {
                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                    for (;;) {
                      var $s__70857__$2_temp__5823__auto____$1$jscomp$68$$ = $APP.$cljs$core$seq$$($s__70857$$);
                      if ($s__70857__$2_temp__5823__auto____$1$jscomp$68$$) {
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70857__$2_temp__5823__auto____$1$jscomp$68$$)) {
                          var $JSCompiler_inline_result$jscomp$982_c__5626__auto__$jscomp$174$$ = $APP.$cljs$core$_chunked_first$$($s__70857__$2_temp__5823__auto____$1$jscomp$68$$), $size__5627__auto__$jscomp$174$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$982_c__5626__auto__$jscomp$174$$), $b__70859_plan$jscomp$65$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$174$$);
                          a: {
                            for (var $i__70858$jscomp$inline_4604$$ = 0;;) {
                              if ($i__70858$jscomp$inline_4604$$ < $size__5627__auto__$jscomp$174$$) {
                                var $plan$jscomp$inline_4605_x$jscomp$inline_6740$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$982_c__5626__auto__$jscomp$174$$, $i__70858$jscomp$inline_4604$$), $b$jscomp$inline_6739$$ = $b__70859_plan$jscomp$65$$;
                                $plan$jscomp$inline_4605_x$jscomp$inline_6740$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($data$jscomp$292$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$inline_4605_x$jscomp$inline_6740$$, $stat$jscomp$12$$], null)), $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$ ? 
                                $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$($stat$jscomp$12$$) : $sensei$frontend$admin$life_time_value$units$$.call(null, $stat$jscomp$12$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $plan$jscomp$inline_4605_x$jscomp$inline_6740$$], null));
                                $b$jscomp$inline_6739$$.add($plan$jscomp$inline_4605_x$jscomp$inline_6740$$);
                                $i__70858$jscomp$inline_4604$$ += 1;
                              } else {
                                $JSCompiler_inline_result$jscomp$982_c__5626__auto__$jscomp$174$$ = !0;
                                break a;
                              }
                            }
                            $JSCompiler_inline_result$jscomp$982_c__5626__auto__$jscomp$174$$ = void 0;
                          }
                          return $JSCompiler_inline_result$jscomp$982_c__5626__auto__$jscomp$174$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70859_plan$jscomp$65$$), $sensei$frontend$admin$life_time_value$ltv_table_$_iter__70837_$_iter__70856$$($APP.$cljs$core$_chunked_rest$$($s__70857__$2_temp__5823__auto____$1$jscomp$68$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70859_plan$jscomp$65$$), null);
                        }
                        $b__70859_plan$jscomp$65$$ = $APP.$cljs$core$first$$($s__70857__$2_temp__5823__auto____$1$jscomp$68$$);
                        return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($data$jscomp$292$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$b__70859_plan$jscomp$65$$, $stat$jscomp$12$$], null)), $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$ ? 
                        $sensei$frontend$admin$life_time_value$units$$.$cljs$core$IFn$_invoke$arity$1$($stat$jscomp$12$$) : $sensei$frontend$admin$life_time_value$units$$.call(null, $stat$jscomp$12$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__70859_plan$jscomp$65$$], null)), $sensei$frontend$admin$life_time_value$ltv_table_$_iter__70837_$_iter__70856$$($APP.$cljs$core$rest$$($s__70857__$2_temp__5823__auto____$1$jscomp$68$$)));
                      }
                      return null;
                    }
                  }, null, null);
                };
              }($stat$jscomp$8$$, $s__70838__$2$$, $temp__5823__auto__$jscomp$460$$, $data$jscomp$289$$)(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1201$basic$$, $APP.$cljs$cst$1202$standard$$, $APP.$cljs$cst$1203$pro$$], null));
            }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $stat$jscomp$8$$], null)), $sensei$frontend$admin$life_time_value$ltv_table_$_iter__70837$$($APP.$cljs$core$rest$$($s__70838__$2$$)));
          }
          return null;
        }
      }, null, null);
    }(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5587$avg_churn$$, $cljs$cst$5588$monthly_revenue$$, $cljs$cst$5589$ltv$$], null));
  }()], null)], null);
}, $sensei$frontend$admin$life_time_value$beginning_of_month$$ = function($JSCompiler_temp$jscomp$954_date$jscomp$65$$) {
  $JSCompiler_temp$jscomp$954_date$jscomp$65$$ = typeof $JSCompiler_temp$jscomp$954_date$jscomp$65$$ === "string" ? $APP.$cljs$core$truth_$$($JSCompiler_temp$jscomp$954_date$jscomp$65$$) ? $APP.$cljs$core$truth_$$($APP.$tools$date$date_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$ ? $APP.$tools$date$date_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$954_date$jscomp$65$$) : $APP.$tools$date$date_QMARK_$$.call(null, $JSCompiler_temp$jscomp$954_date$jscomp$65$$)) ? $JSCompiler_temp$jscomp$954_date$jscomp$65$$ : 
  $APP.$tools$date$_LT__str$$($APP.$clojure$string$replace$$($JSCompiler_temp$jscomp$954_date$jscomp$65$$, "_", ".")) : null : $JSCompiler_temp$jscomp$954_date$jscomp$65$$;
  return (0,$APP.$module$node_modules$dayjs$dayjs_min$$)($JSCompiler_temp$jscomp$954_date$jscomp$65$$).format("YYYY-MM-01");
}, $sensei$frontend$admin$life_time_value$cancellations_by_month$$ = function($cancellations$$) {
  return $APP.$cljs$core$reduce$$.$cljs$core$IFn$_invoke$arity$3$(function($m$jscomp$245$$, $p__70886_plan$jscomp$67$$) {
    var $map__70890__$1_timestamp$jscomp$11$$ = $APP.$cljs$core$__destructure_map$$($p__70886_plan$jscomp$67$$), $expire_date$jscomp$1_month_start$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70890__$1_timestamp$jscomp$11$$, $APP.$cljs$cst$3810$expire_date$$);
    $p__70886_plan$jscomp$67$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70890__$1_timestamp$jscomp$11$$, $APP.$cljs$cst$3148$plan$$);
    $map__70890__$1_timestamp$jscomp$11$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70890__$1_timestamp$jscomp$11$$, $APP.$cljs$cst$1017$timestamp$$);
    $expire_date$jscomp$1_month_start$$ = $sensei$frontend$admin$life_time_value$beginning_of_month$$($APP.$cljs$core$truth_$$($expire_date$jscomp$1_month_start$$) ? $expire_date$jscomp$1_month_start$$ : $map__70890__$1_timestamp$jscomp$11$$);
    return $APP.$cljs$core$update_in$$.$cljs$core$IFn$_invoke$arity$3$($m$jscomp$245$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$expire_date$jscomp$1_month_start$$, $p__70886_plan$jscomp$67$$], null), $APP.$cljs$core$fnil$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$inc$$, 0));
  }, $APP.$cljs$core$PersistentArrayMap$EMPTY$$, $cancellations$$);
}, $sensei$frontend$admin$life_time_value$average$$ = function($items$jscomp$25$$) {
  return $APP.$tools$math$round_2$$($APP.$cljs$core$reduce$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$_PLUS_$$, $items$jscomp$25$$) / $APP.$cljs$core$count$$($items$jscomp$25$$));
}, $sensei$frontend$admin$live_workers$hex_color$$ = function($int_color$jscomp$1$$) {
  return $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$3$($APP.$cljs$core$str$$, "#", $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70952_SHARP_$$) {
    return $p1__70952_SHARP_$$.toString(16).padStart(2, "0");
  }, $int_color$jscomp$1$$));
}, $sensei$frontend$admin$live_workers$int_color$$ = function($hex_color$jscomp$2_matches$jscomp$12$$) {
  $hex_color$jscomp$2_matches$jscomp$12$$ = $APP.$cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$(1, $APP.$cljs$core$re_matches$$(/#(.)(.)(.)/, $hex_color$jscomp$2_matches$jscomp$12$$));
  return $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70957_SHARP_$$) {
    return $p1__70957_SHARP_$$ * 17;
  }, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70956_SHARP_$$) {
    return parseInt($p1__70956_SHARP_$$, 16);
  }, $hex_color$jscomp$2_matches$jscomp$12$$));
}, $sensei$frontend$admin$live_workers$percentile_colors_for_field$$ = function($from$jscomp$26$$, $to$jscomp$28$$, $field$jscomp$26$$, $percentiles$jscomp$2$$) {
  return $APP.$cljs$core$zipmap$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70961_SHARP_$$) {
    return "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$empty_QMARK_$$($field$jscomp$26$$) ? null : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($field$jscomp$26$$) + "-") + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($p1__70961_SHARP_$$) + "%";
  }, $percentiles$jscomp$2$$), $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($index$jscomp$183$$) {
    var $fraction$jscomp$2$$ = ($index$jscomp$183$$ + 1) / $APP.$cljs$core$count$$($percentiles$jscomp$2$$);
    return $sensei$frontend$admin$live_workers$hex_color$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$(function($p1__70962_SHARP_$$, $p2__70963_SHARP_$$) {
      return Math.round($p1__70962_SHARP_$$ * $fraction$jscomp$2$$ + $p2__70963_SHARP_$$ * (1.0 - $fraction$jscomp$2$$));
    }, $from$jscomp$26$$, $to$jscomp$28$$));
  }, $percentiles$jscomp$2$$));
}, $sensei$frontend$admin$live_workers$percentile_colors$$ = function($fields$jscomp$10$$, $percentiles$jscomp$3$$) {
  return $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$3$($APP.$cljs$core$merge$$, $APP.$cljs$core$PersistentArrayMap$EMPTY$$, function() {
    return function $sensei$frontend$admin$live_workers$percentile_colors_$_iter__70982$$($s__70983$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$464$$ = $APP.$cljs$core$seq$$($s__70983$$);
          if ($temp__5823__auto__$jscomp$464$$) {
            var $s__70983__$2$$ = $temp__5823__auto__$jscomp$464$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70983__$2$$)) {
              var $c__5626__auto__$jscomp$175$$ = $APP.$cljs$core$_chunked_first$$($s__70983__$2$$), $size__5627__auto__$jscomp$175$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$175$$), $b__70985$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$175$$);
              return function() {
                for (var $i__70984$$ = 0;;) {
                  if ($i__70984$$ < $size__5627__auto__$jscomp$175$$) {
                    var $field$jscomp$28$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$175$$, $i__70984$$);
                    $APP.$cljs$core$chunk_append$$($b__70985$$, function() {
                      var $temp__5823__auto____$1$jscomp$69$$ = function() {
                        var $G__70991_G__70991__$1$$ = $field$jscomp$28$$;
                        $G__70991_G__70991__$1$$ = $G__70991_G__70991__$1$$ == null ? null : $sensei$frontend$admin$live_workers$colors$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$live_workers$colors$$.$cljs$core$IFn$_invoke$arity$1$($G__70991_G__70991__$1$$) : $sensei$frontend$admin$live_workers$colors$$.call(null, $G__70991_G__70991__$1$$);
                        return $G__70991_G__70991__$1$$ == null ? null : $sensei$frontend$admin$live_workers$int_color$$($G__70991_G__70991__$1$$);
                      }();
                      return $APP.$cljs$core$truth_$$($temp__5823__auto____$1$jscomp$69$$) ? $sensei$frontend$admin$live_workers$percentile_colors_for_field$$($temp__5823__auto____$1$jscomp$69$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function() {
                        return function($p1__70977_SHARP_$$) {
                          return 127.5 + 0.5 * $p1__70977_SHARP_$$;
                        };
                      }($i__70984$$, $temp__5823__auto____$1$jscomp$69$$, $temp__5823__auto____$1$jscomp$69$$, $field$jscomp$28$$, $c__5626__auto__$jscomp$175$$, $size__5627__auto__$jscomp$175$$, $b__70985$$, $s__70983__$2$$, $temp__5823__auto__$jscomp$464$$), $temp__5823__auto____$1$jscomp$69$$), $field$jscomp$28$$, $percentiles$jscomp$3$$) : null;
                    }());
                    $i__70984$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70985$$), $sensei$frontend$admin$live_workers$percentile_colors_$_iter__70982$$($APP.$cljs$core$_chunked_rest$$($s__70983__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70985$$), null);
            }
            var $field$jscomp$27$$ = $APP.$cljs$core$first$$($s__70983__$2$$);
            return $APP.$cljs$core$cons$$(function() {
              var $temp__5823__auto____$1$jscomp$71$$ = function() {
                var $G__71001_G__71001__$1$$ = $field$jscomp$27$$;
                $G__71001_G__71001__$1$$ = $G__71001_G__71001__$1$$ == null ? null : $sensei$frontend$admin$live_workers$colors$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$live_workers$colors$$.$cljs$core$IFn$_invoke$arity$1$($G__71001_G__71001__$1$$) : $sensei$frontend$admin$live_workers$colors$$.call(null, $G__71001_G__71001__$1$$);
                return $G__71001_G__71001__$1$$ == null ? null : $sensei$frontend$admin$live_workers$int_color$$($G__71001_G__71001__$1$$);
              }();
              return $APP.$cljs$core$truth_$$($temp__5823__auto____$1$jscomp$71$$) ? $sensei$frontend$admin$live_workers$percentile_colors_for_field$$($temp__5823__auto____$1$jscomp$71$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function() {
                return function($p1__70977_SHARP_$jscomp$1$$) {
                  return 127.5 + 0.5 * $p1__70977_SHARP_$jscomp$1$$;
                };
              }($temp__5823__auto____$1$jscomp$71$$, $temp__5823__auto____$1$jscomp$71$$, $field$jscomp$27$$, $s__70983__$2$$, $temp__5823__auto__$jscomp$464$$), $temp__5823__auto____$1$jscomp$71$$), $field$jscomp$27$$, $percentiles$jscomp$3$$) : null;
            }(), $sensei$frontend$admin$live_workers$percentile_colors_$_iter__70982$$($APP.$cljs$core$rest$$($s__70983__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($fields$jscomp$10$$);
  }());
}, $sensei$frontend$admin$live_workers$total_graph$$ = function($chart_data$jscomp$3_fields$jscomp$11$$) {
  $chart_data$jscomp$3_fields$jscomp$11$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5602$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_total_data$$, $chart_data$jscomp$3_fields$jscomp$11$$], null));
  return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data$jscomp$3_fields$jscomp$11$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data$jscomp$3_fields$jscomp$11$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$live_workers$chart_size$$, $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$live_workers$colors$$, $APP.$cljs$cst$25$type$$, 
  $APP.$cljs$cst$302$line$$], null)], null) : null;
}, $sensei$frontend$admin$live_workers$failed_by_worker_graph$$ = function($chart_data$jscomp$4_total_item$$) {
  $chart_data$jscomp$4_total_item$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5603$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_failed_by_worker_data$$, $chart_data$jscomp$4_total_item$$], null));
  return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data$jscomp$4_total_item$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data$jscomp$4_total_item$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$live_workers$chart_size$$, $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$live_workers$colors$$, $APP.$cljs$cst$25$type$$, 
  $APP.$cljs$cst$302$line$$], null)], null) : null;
}, $sensei$frontend$admin$live_workers$performance_by_playouts_graph$$ = function($chart_data$jscomp$5_item$jscomp$37$$, $colors$jscomp$2_percentiles$jscomp$4$$, $playouts$jscomp$6$$) {
  $chart_data$jscomp$5_item$jscomp$37$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5604$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_performance_by_playouts_chart_data$$, $chart_data$jscomp$5_item$jscomp$37$$, $colors$jscomp$2_percentiles$jscomp$4$$, $playouts$jscomp$6$$], null));
  $colors$jscomp$2_percentiles$jscomp$4$$ = $sensei$frontend$admin$live_workers$percentile_colors$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($playouts$jscomp$6$$)], null), $colors$jscomp$2_percentiles$jscomp$4$$);
  return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data$jscomp$5_item$jscomp$37$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data$jscomp$5_item$jscomp$37$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$live_workers$chart_size$$, $APP.$cljs$cst$5405$colors$$, $colors$jscomp$2_percentiles$jscomp$4$$, $APP.$cljs$cst$25$type$$, 
  $APP.$cljs$cst$302$line$$, $APP.$cljs$cst$4992$unit$$, "s", $APP.$cljs$cst$1341$grid$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1090$y$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$588$lines$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$172$value$$, $sensei$frontend$admin$live_workers$max_allowed_seconds$$.$cljs$core$IFn$_invoke$arity$1$ ? 
  $sensei$frontend$admin$live_workers$max_allowed_seconds$$.$cljs$core$IFn$_invoke$arity$1$($playouts$jscomp$6$$) : $sensei$frontend$admin$live_workers$max_allowed_seconds$$.call(null, $playouts$jscomp$6$$), $APP.$cljs$cst$368$text$$, "Goal", $APP.$cljs$cst$68$class$$, $cljs$cst$5516$max_allowed_time$$], null)], null)], null)], null)], null)], null) : null;
}, $sensei$frontend$admin$live_workers$performance_by_worker_graph$$ = function($chart_data$jscomp$6_item$jscomp$38$$) {
  $chart_data$jscomp$6_item$jscomp$38$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5605$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_performance_by_worker_chart_data$$, $chart_data$jscomp$6_item$jscomp$38$$], null));
  return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data$jscomp$6_item$jscomp$38$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data$jscomp$6_item$jscomp$38$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$live_workers$chart_size$$, $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$, $APP.$cljs$cst$4992$unit$$, "s"], null)], 
  null) : null;
}, $sensei$frontend$admin$live_workers$group_cloud_vms$$ = function($fields$jscomp$12_fields__$1$$, $data$jscomp$293_data__$1$jscomp$6$$) {
  function $take_cloud$$($xs$jscomp$65$$) {
    return $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$some_QMARK_$$, $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($i$jscomp$486$$, $x$jscomp$1139$$) {
      return $APP.$cljs$core$truth_$$($cloud_vm_indices$$.$cljs$core$IFn$_invoke$arity$1$ ? $cloud_vm_indices$$.$cljs$core$IFn$_invoke$arity$1$($i$jscomp$486$$) : $cloud_vm_indices$$.call(null, $i$jscomp$486$$)) ? $x$jscomp$1139$$ : null;
    }, $xs$jscomp$65$$));
  }
  function $take_non_cloud$$($xs$jscomp$64$$) {
    return $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$some_QMARK_$$, $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($i$jscomp$485$$, $x$jscomp$1138$$) {
      return $APP.$cljs$core$truth_$$($cloud_vm_indices$$.$cljs$core$IFn$_invoke$arity$1$ ? $cloud_vm_indices$$.$cljs$core$IFn$_invoke$arity$1$($i$jscomp$485$$) : $cloud_vm_indices$$.call(null, $i$jscomp$485$$)) ? null : $x$jscomp$1138$$;
    }, $xs$jscomp$64$$));
  }
  var $cloud_vm_indices$$ = $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentHashSet$EMPTY$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$some_QMARK_$$, $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($i$jscomp$484$$, $vm_name$$) {
    return $APP.$goog$string$internal$startsWith$$($vm_name$$, "live-prod-worker") ? $i$jscomp$484$$ : null;
  }, $fields$jscomp$12_fields__$1$$)));
  $fields$jscomp$12_fields__$1$$ = $APP.$cljs$core$cons$$("cloud-vms", $take_non_cloud$$($fields$jscomp$12_fields__$1$$));
  $data$jscomp$293_data__$1$jscomp$6$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($first__71073_p__71070$$) {
    var $cloud_vm_sum_seq__71072$$ = $APP.$cljs$core$seq$$($first__71073_p__71070$$);
    $first__71073_p__71070$$ = $APP.$cljs$core$first$$($cloud_vm_sum_seq__71072$$);
    var $args$jscomp$inline_4611_seq__71072__$1$$ = $APP.$cljs$core$next$$($cloud_vm_sum_seq__71072$$);
    $cloud_vm_sum_seq__71072$$ = $APP.$cljs$core$reduce$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$_PLUS_$$, $take_cloud$$($args$jscomp$inline_4611_seq__71072__$1$$));
    $args$jscomp$inline_4611_seq__71072__$1$$ = $take_non_cloud$$($args$jscomp$inline_4611_seq__71072__$1$$);
    return $APP.$cljs$core$cons$$($first__71073_p__71070$$, $APP.$cljs$core$cons$$($cloud_vm_sum_seq__71072$$, $args$jscomp$inline_4611_seq__71072__$1$$));
  }, $data$jscomp$293_data__$1$jscomp$6$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$fields$jscomp$12_fields__$1$$, $data$jscomp$293_data__$1$jscomp$6$$], null);
}, $sensei$frontend$admin$live_workers$get_fields$$ = function($stats_by_day$jscomp$2$$, $group_by_item$jscomp$2$$) {
  return $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$distinct$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($APP.$cljs$core$keys$$, $group_by_item$jscomp$2$$, $APP.$cljs$core$second$$), $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$stats_by_day$jscomp$2$$]))));
}, $sensei$frontend$admin$live_workers$shorten_worker_name$$ = function($worker$$) {
  return $APP.$clojure$string$replace$$($APP.$clojure$string$replace$$($APP.$clojure$string$replace$$($APP.$clojure$string$replace$$($APP.$clojure$string$replace$$($worker$$, "live-prod-worker-", ""), "local-worker-", ""), /^t4-/, ""), /-europe-.*/, ""), /-us-.*/, "");
}, $sensei$frontend$admin$live_worker_queues$queue_table$$ = function() {
  var $queues$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5619$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_live_queues$$], null)));
  $APP.$cljs$core$println$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["(queue-table)", $queues$$]));
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
    return function $sensei$frontend$admin$live_worker_queues$queue_table_$_iter__71074$$($s__71075$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$468$$ = $APP.$cljs$core$seq$$($s__71075$$);
          if ($temp__5823__auto__$jscomp$468$$) {
            var $s__71075__$2$$ = $temp__5823__auto__$jscomp$468$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71075__$2$$)) {
              var $c__5626__auto__$jscomp$178$$ = $APP.$cljs$core$_chunked_first$$($s__71075__$2$$), $size__5627__auto__$jscomp$178$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$178$$), $b__71077$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$178$$);
              return function() {
                for (var $i__71076$$ = 0;;) {
                  if ($i__71076$$ < $size__5627__auto__$jscomp$178$$) {
                    var $vec__71083$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$178$$, $i__71076$$), $worker_conn_id$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71083$$, 0, null), $queue$jscomp$6$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71083$$, 1, null);
                    $APP.$cljs$core$chunk_append$$($b__71077$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1616$h6$$, $worker_conn_id$jscomp$1$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5620$div_DOT_css_table$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5621$div_DOT_tr$$, 
                    new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, "uid"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, "game"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, "node"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, 
                    $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, "type"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, "playouts"], null)], null), $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
                      return function($i__71076$jscomp$1$$, $vec__71083$jscomp$1$$, $worker_conn_id$jscomp$2$$, $queue$jscomp$7$$, $c__5626__auto__$jscomp$179$$, $size__5627__auto__$jscomp$179$$, $b__71077$jscomp$1$$, $s__71075__$2$jscomp$1$$, $temp__5823__auto__$jscomp$469$$, $queues$jscomp$1$$) {
                        return function $sensei$frontend$admin$live_worker_queues$queue_table_$_iter__71074_$_iter__71086$$($s__71087$$) {
                          return new $APP.$cljs$core$LazySeq$$(null, function() {
                            return function() {
                              for (;;) {
                                var $s__71087__$2_temp__5823__auto____$1$jscomp$73$$ = $APP.$cljs$core$seq$$($s__71087$$);
                                if ($s__71087__$2_temp__5823__auto____$1$jscomp$73$$) {
                                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71087__$2_temp__5823__auto____$1$jscomp$73$$)) {
                                    var $JSCompiler_inline_result$jscomp$984_c__5626__auto____$1$jscomp$17_node_id$jscomp$13$$ = $APP.$cljs$core$_chunked_first$$($s__71087__$2_temp__5823__auto____$1$jscomp$73$$), $size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$984_c__5626__auto____$1$jscomp$17_node_id$jscomp$13$$), $b__71089_game_id$jscomp$488$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$);
                                    a: {
                                      for (var $i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$ = 0;;) {
                                        if ($i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$ < $size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$) {
                                          var $map__71102$jscomp$inline_4622_playouts$jscomp$inline_4624_vec__71096$jscomp$inline_4617$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$984_c__5626__auto____$1$jscomp$17_node_id$jscomp$13$$, $i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$), $type$jscomp$inline_4621_vec__71099$jscomp$inline_4618$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($map__71102$jscomp$inline_4622_playouts$jscomp$inline_4624_vec__71096$jscomp$inline_4617$$, 
                                          0, null), $game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($type$jscomp$inline_4621_vec__71099$jscomp$inline_4618$$, 0, null), $node_id$jscomp$inline_4620$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($type$jscomp$inline_4621_vec__71099$jscomp$inline_4618$$, 1, null);
                                          $type$jscomp$inline_4621_vec__71099$jscomp$inline_4618$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($type$jscomp$inline_4621_vec__71099$jscomp$inline_4618$$, 2, null);
                                          $map__71102$jscomp$inline_4622_playouts$jscomp$inline_4624_vec__71096$jscomp$inline_4617$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($map__71102$jscomp$inline_4622_playouts$jscomp$inline_4624_vec__71096$jscomp$inline_4617$$, 1, null);
                                          var $b$jscomp$inline_6745_map__71102__$1$jscomp$inline_4623$$ = $APP.$cljs$core$__destructure_map$$($map__71102$jscomp$inline_4622_playouts$jscomp$inline_4624_vec__71096$jscomp$inline_4617$$);
                                          $map__71102$jscomp$inline_4622_playouts$jscomp$inline_4624_vec__71096$jscomp$inline_4617$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6745_map__71102__$1$jscomp$inline_4623$$, $APP.$cljs$cst$1194$playouts$$);
                                          var $uid$jscomp$inline_4625$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6745_map__71102__$1$jscomp$inline_4623$$, $APP.$cljs$cst$722$uid$$);
                                          $b$jscomp$inline_6745_map__71102__$1$jscomp$inline_4623$$ = $b__71089_game_id$jscomp$488$$;
                                          $game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5621$div_DOT_tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $uid$jscomp$inline_4625$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                          [$cljs$cst$5623$div_DOT_td$$, $game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $node_id$jscomp$inline_4620$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $type$jscomp$inline_4621_vec__71099$jscomp$inline_4618$$], 
                                          null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $map__71102$jscomp$inline_4622_playouts$jscomp$inline_4624_vec__71096$jscomp$inline_4617$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$) + 
                                          "/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($node_id$jscomp$inline_4620$$) + "/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($type$jscomp$inline_4621_vec__71099$jscomp$inline_4618$$)], null));
                                          $b$jscomp$inline_6745_map__71102__$1$jscomp$inline_4623$$.add($game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$);
                                          $i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$ += 1;
                                        } else {
                                          $JSCompiler_inline_result$jscomp$984_c__5626__auto____$1$jscomp$17_node_id$jscomp$13$$ = !0;
                                          break a;
                                        }
                                      }
                                      $JSCompiler_inline_result$jscomp$984_c__5626__auto____$1$jscomp$17_node_id$jscomp$13$$ = void 0;
                                    }
                                    return $JSCompiler_inline_result$jscomp$984_c__5626__auto____$1$jscomp$17_node_id$jscomp$13$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71089_game_id$jscomp$488$$), $sensei$frontend$admin$live_worker_queues$queue_table_$_iter__71074_$_iter__71086$$($APP.$cljs$core$_chunked_rest$$($s__71087__$2_temp__5823__auto____$1$jscomp$73$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71089_game_id$jscomp$488$$), null);
                                  }
                                  $i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$ = $APP.$cljs$core$first$$($s__71087__$2_temp__5823__auto____$1$jscomp$73$$);
                                  $size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$, 0, null);
                                  $b__71089_game_id$jscomp$488$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$, 0, null);
                                  $JSCompiler_inline_result$jscomp$984_c__5626__auto____$1$jscomp$17_node_id$jscomp$13$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$, 1, null);
                                  $size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$, 2, null);
                                  $i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$, 1, null);
                                  $game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$ = $APP.$cljs$core$__destructure_map$$($i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$);
                                  $i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$, $APP.$cljs$cst$1194$playouts$$);
                                  $game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$, $APP.$cljs$cst$722$uid$$);
                                  return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5621$div_DOT_tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $game_id$jscomp$inline_4619_map__71114__$1_uid$jscomp$224_x$jscomp$inline_6746$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                  [$cljs$cst$5623$div_DOT_td$$, $b__71089_game_id$jscomp$488$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $JSCompiler_inline_result$jscomp$984_c__5626__auto____$1$jscomp$17_node_id$jscomp$13$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$], 
                                  null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $i__71088$jscomp$inline_4616_map__71114_playouts$jscomp$8_vec__71108$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71089_game_id$jscomp$488$$) + "/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$984_c__5626__auto____$1$jscomp$17_node_id$jscomp$13$$) + 
                                  "/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($size__5627__auto____$1$jscomp$17_type$jscomp$284_vec__71111$$)], null)), $sensei$frontend$admin$live_worker_queues$queue_table_$_iter__71074_$_iter__71086$$($APP.$cljs$core$rest$$($s__71087__$2_temp__5823__auto____$1$jscomp$73$$)));
                                }
                                return null;
                              }
                            };
                          }($i__71076$jscomp$1$$, $vec__71083$jscomp$1$$, $worker_conn_id$jscomp$2$$, $queue$jscomp$7$$, $c__5626__auto__$jscomp$179$$, $size__5627__auto__$jscomp$179$$, $b__71077$jscomp$1$$, $s__71075__$2$jscomp$1$$, $temp__5823__auto__$jscomp$469$$, $queues$jscomp$1$$), null, null);
                        };
                      }($i__71076$$, $vec__71083$$, $worker_conn_id$jscomp$1$$, $queue$jscomp$6$$, $c__5626__auto__$jscomp$178$$, $size__5627__auto__$jscomp$178$$, $b__71077$$, $s__71075__$2$$, $temp__5823__auto__$jscomp$468$$, $queues$$)($queue$jscomp$6$$);
                    }())], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $worker_conn_id$jscomp$1$$], null)));
                    $i__71076$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71077$$), $sensei$frontend$admin$live_worker_queues$queue_table_$_iter__71074$$($APP.$cljs$core$_chunked_rest$$($s__71075__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71077$$), null);
            }
            var $vec__71133$$ = $APP.$cljs$core$first$$($s__71075__$2$$), $worker_conn_id$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71133$$, 0, null), $queue$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71133$$, 1, null);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1616$h6$$, $worker_conn_id$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5620$div_DOT_css_table$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5621$div_DOT_tr$$, new $APP.$cljs$core$PersistentVector$$(null, 
            2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, "uid"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, "game"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, "node"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, 
            "type"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, "playouts"], null)], null), $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
              return function() {
                return function $sensei$frontend$admin$live_worker_queues$queue_table_$_iter__71074_$_iter__71137$$($s__71138$$) {
                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                    for (;;) {
                      var $s__71138__$2_temp__5823__auto____$1$jscomp$74$$ = $APP.$cljs$core$seq$$($s__71138$$);
                      if ($s__71138__$2_temp__5823__auto____$1$jscomp$74$$) {
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71138__$2_temp__5823__auto____$1$jscomp$74$$)) {
                          var $JSCompiler_inline_result$jscomp$985_c__5626__auto__$jscomp$181_node_id$jscomp$15$$ = $APP.$cljs$core$_chunked_first$$($s__71138__$2_temp__5823__auto____$1$jscomp$74$$), $size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$985_c__5626__auto__$jscomp$181_node_id$jscomp$15$$), $b__71140_game_id$jscomp$490$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$);
                          a: {
                            for (var $i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$ = 0;;) {
                              if ($i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$ < $size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$) {
                                var $map__71159$jscomp$inline_4633_playouts$jscomp$inline_4635_vec__71153$jscomp$inline_4628$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$985_c__5626__auto__$jscomp$181_node_id$jscomp$15$$, $i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$), $type$jscomp$inline_4632_vec__71156$jscomp$inline_4629$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($map__71159$jscomp$inline_4633_playouts$jscomp$inline_4635_vec__71153$jscomp$inline_4628$$, 
                                0, null), $game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($type$jscomp$inline_4632_vec__71156$jscomp$inline_4629$$, 0, null), $node_id$jscomp$inline_4631$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($type$jscomp$inline_4632_vec__71156$jscomp$inline_4629$$, 1, null);
                                $type$jscomp$inline_4632_vec__71156$jscomp$inline_4629$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($type$jscomp$inline_4632_vec__71156$jscomp$inline_4629$$, 2, null);
                                $map__71159$jscomp$inline_4633_playouts$jscomp$inline_4635_vec__71153$jscomp$inline_4628$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($map__71159$jscomp$inline_4633_playouts$jscomp$inline_4635_vec__71153$jscomp$inline_4628$$, 1, null);
                                var $b$jscomp$inline_6748_map__71159__$1$jscomp$inline_4634$$ = $APP.$cljs$core$__destructure_map$$($map__71159$jscomp$inline_4633_playouts$jscomp$inline_4635_vec__71153$jscomp$inline_4628$$);
                                $map__71159$jscomp$inline_4633_playouts$jscomp$inline_4635_vec__71153$jscomp$inline_4628$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6748_map__71159__$1$jscomp$inline_4634$$, $APP.$cljs$cst$1194$playouts$$);
                                var $uid$jscomp$inline_4636$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6748_map__71159__$1$jscomp$inline_4634$$, $APP.$cljs$cst$722$uid$$);
                                $b$jscomp$inline_6748_map__71159__$1$jscomp$inline_4634$$ = $b__71140_game_id$jscomp$490$$;
                                $game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5621$div_DOT_tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $uid$jscomp$inline_4636$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                [$cljs$cst$5623$div_DOT_td$$, $game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $node_id$jscomp$inline_4631$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $type$jscomp$inline_4632_vec__71156$jscomp$inline_4629$$], 
                                null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $map__71159$jscomp$inline_4633_playouts$jscomp$inline_4635_vec__71153$jscomp$inline_4628$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$) + "/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($node_id$jscomp$inline_4631$$) + 
                                "/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($type$jscomp$inline_4632_vec__71156$jscomp$inline_4629$$)], null));
                                $b$jscomp$inline_6748_map__71159__$1$jscomp$inline_4634$$.add($game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$);
                                $i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$ += 1;
                              } else {
                                $JSCompiler_inline_result$jscomp$985_c__5626__auto__$jscomp$181_node_id$jscomp$15$$ = !0;
                                break a;
                              }
                            }
                            $JSCompiler_inline_result$jscomp$985_c__5626__auto__$jscomp$181_node_id$jscomp$15$$ = void 0;
                          }
                          return $JSCompiler_inline_result$jscomp$985_c__5626__auto__$jscomp$181_node_id$jscomp$15$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71140_game_id$jscomp$490$$), $sensei$frontend$admin$live_worker_queues$queue_table_$_iter__71074_$_iter__71137$$($APP.$cljs$core$_chunked_rest$$($s__71138__$2_temp__5823__auto____$1$jscomp$74$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71140_game_id$jscomp$490$$), null);
                        }
                        $i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$ = $APP.$cljs$core$first$$($s__71138__$2_temp__5823__auto____$1$jscomp$74$$);
                        $size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$, 0, null);
                        $b__71140_game_id$jscomp$490$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$, 0, null);
                        $JSCompiler_inline_result$jscomp$985_c__5626__auto__$jscomp$181_node_id$jscomp$15$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$, 1, null);
                        $size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$, 2, null);
                        $i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$, 1, null);
                        $game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$ = $APP.$cljs$core$__destructure_map$$($i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$);
                        $i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$, $APP.$cljs$cst$1194$playouts$$);
                        $game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$, $APP.$cljs$cst$722$uid$$);
                        return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5621$div_DOT_tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $game_id$jscomp$inline_4630_map__71168__$1_uid$jscomp$226_x$jscomp$inline_6749$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                        [$cljs$cst$5623$div_DOT_td$$, $b__71140_game_id$jscomp$490$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $JSCompiler_inline_result$jscomp$985_c__5626__auto__$jscomp$181_node_id$jscomp$15$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$], 
                        null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, $i__71139$jscomp$inline_4627_map__71168_playouts$jscomp$10_vec__71161$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71140_game_id$jscomp$490$$) + "/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$985_c__5626__auto__$jscomp$181_node_id$jscomp$15$$) + 
                        "/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($size__5627__auto__$jscomp$181_type$jscomp$286_vec__71164$$)], null)), $sensei$frontend$admin$live_worker_queues$queue_table_$_iter__71074_$_iter__71137$$($APP.$cljs$core$rest$$($s__71138__$2_temp__5823__auto____$1$jscomp$74$$)));
                      }
                      return null;
                    }
                  }, null, null);
                };
              }($vec__71133$$, $worker_conn_id$$, $queue$jscomp$5$$, $s__71075__$2$$, $temp__5823__auto__$jscomp$468$$, $queues$$)($queue$jscomp$5$$);
            }())], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $worker_conn_id$$], null)), $sensei$frontend$admin$live_worker_queues$queue_table_$_iter__71074$$($APP.$cljs$core$rest$$($s__71075__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($queues$$);
  }())], null);
}, $sensei$frontend$admin$live_worker_queues$main$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_worker_queues$queue_table$$], null);
}, $sensei$frontend$admin$paypal_events$event_table$$ = function() {
  var $events$jscomp$10$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5624$sensei_DOT_frontend_DOT_admin_DOT_paypal_events_SLASH_all_events$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2732$table_DOT_table_DOT_table_sm_DOT_table_striped$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1263$tbody$$, function() {
    return function $sensei$frontend$admin$paypal_events$event_table_$_iter__71128$$($s__71129$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__71129__$2_temp__5823__auto__$jscomp$472$$ = $APP.$cljs$core$seq$$($s__71129$$);
          if ($s__71129__$2_temp__5823__auto__$jscomp$472$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71129__$2_temp__5823__auto__$jscomp$472$$)) {
              var $JSCompiler_inline_result$jscomp$986_c__5626__auto__$jscomp$182_timestamp$jscomp$12$$ = $APP.$cljs$core$_chunked_first$$($s__71129__$2_temp__5823__auto__$jscomp$472$$), $event_type$jscomp$3_size__5627__auto__$jscomp$182$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$986_c__5626__auto__$jscomp$182_timestamp$jscomp$12$$), $b__71131_event_id$jscomp$1_map__71160$$ = $APP.$cljs$core$chunk_buffer$$($event_type$jscomp$3_size__5627__auto__$jscomp$182$$);
              a: {
                for (var $i__71130$jscomp$inline_4638_uid$jscomp$228$$ = 0;;) {
                  if ($i__71130$jscomp$inline_4638_uid$jscomp$228$$ < $event_type$jscomp$3_size__5627__auto__$jscomp$182$$) {
                    var $event_id$jscomp$inline_4641_map__71144$jscomp$inline_4639_sub_id_x$jscomp$inline_6752$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$986_c__5626__auto__$jscomp$182_timestamp$jscomp$12$$, $i__71130$jscomp$inline_4638_uid$jscomp$228$$), $b$jscomp$inline_6751_map__71144__$1$jscomp$inline_4640$$ = $APP.$cljs$core$__destructure_map$$($event_id$jscomp$inline_4641_map__71144$jscomp$inline_4639_sub_id_x$jscomp$inline_6752$$);
                    $event_id$jscomp$inline_4641_map__71144$jscomp$inline_4639_sub_id_x$jscomp$inline_6752$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6751_map__71144__$1$jscomp$inline_4640$$, $cljs$cst$5625$event_id$$);
                    var $event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6751_map__71144__$1$jscomp$inline_4640$$, $APP.$cljs$cst$1017$timestamp$$), $event_type$jscomp$inline_4643$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6751_map__71144__$1$jscomp$inline_4640$$, $APP.$cljs$cst$1144$event_type$$), $uid$jscomp$inline_4644$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6751_map__71144__$1$jscomp$inline_4640$$, 
                    $APP.$cljs$cst$722$uid$$), $sub_id$jscomp$inline_4645$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6751_map__71144__$1$jscomp$inline_4640$$, $cljs$cst$5626$sub_id$$), $event$jscomp$inline_4646$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($b$jscomp$inline_6751_map__71144__$1$jscomp$inline_4640$$, $APP.$cljs$cst$132$event$$);
                    $b$jscomp$inline_6751_map__71144__$1$jscomp$inline_4640$$ = $b__71131_event_id$jscomp$1_map__71160$$;
                    $event_id$jscomp$inline_4641_map__71144$jscomp$inline_4639_sub_id_x$jscomp$inline_6752$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$tools$date$__GT_str$$($event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 
                    2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $event_type$jscomp$inline_4643$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $uid$jscomp$inline_4644$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $sub_id$jscomp$inline_4645$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
                    2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$expander$with_toggle$$, $APP.$tools$misc$make_id$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$132$event$$, $event_id$jscomp$inline_4641_map__71144$jscomp$inline_4639_sub_id_x$jscomp$inline_6752$$])), 
                    "show event", "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$inline_4646$$)], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $event_id$jscomp$inline_4641_map__71144$jscomp$inline_4639_sub_id_x$jscomp$inline_6752$$], null));
                    $b$jscomp$inline_6751_map__71144__$1$jscomp$inline_4640$$.add($event_id$jscomp$inline_4641_map__71144$jscomp$inline_4639_sub_id_x$jscomp$inline_6752$$);
                    $i__71130$jscomp$inline_4638_uid$jscomp$228$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$986_c__5626__auto__$jscomp$182_timestamp$jscomp$12$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$986_c__5626__auto__$jscomp$182_timestamp$jscomp$12$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$986_c__5626__auto__$jscomp$182_timestamp$jscomp$12$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71131_event_id$jscomp$1_map__71160$$), $sensei$frontend$admin$paypal_events$event_table_$_iter__71128$$($APP.$cljs$core$_chunked_rest$$($s__71129__$2_temp__5823__auto__$jscomp$472$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71131_event_id$jscomp$1_map__71160$$), null);
            }
            $b__71131_event_id$jscomp$1_map__71160$$ = $APP.$cljs$core$first$$($s__71129__$2_temp__5823__auto__$jscomp$472$$);
            $event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$ = $APP.$cljs$core$__destructure_map$$($b__71131_event_id$jscomp$1_map__71160$$);
            $b__71131_event_id$jscomp$1_map__71160$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$, $cljs$cst$5625$event_id$$);
            $JSCompiler_inline_result$jscomp$986_c__5626__auto__$jscomp$182_timestamp$jscomp$12$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$, $APP.$cljs$cst$1017$timestamp$$);
            $event_type$jscomp$3_size__5627__auto__$jscomp$182$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$, $APP.$cljs$cst$1144$event_type$$);
            $i__71130$jscomp$inline_4638_uid$jscomp$228$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$, $APP.$cljs$cst$722$uid$$);
            $event_id$jscomp$inline_4641_map__71144$jscomp$inline_4639_sub_id_x$jscomp$inline_6752$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$, $cljs$cst$5626$sub_id$$);
            $event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$, $APP.$cljs$cst$132$event$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$tools$date$__GT_str$$($JSCompiler_inline_result$jscomp$986_c__5626__auto__$jscomp$182_timestamp$jscomp$12$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
            [$APP.$cljs$cst$2734$td$$, $event_type$jscomp$3_size__5627__auto__$jscomp$182$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $i__71130$jscomp$inline_4638_uid$jscomp$228$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $event_id$jscomp$inline_4641_map__71144$jscomp$inline_4639_sub_id_x$jscomp$inline_6752$$], null), 
            new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$expander$with_toggle$$, $APP.$tools$misc$make_id$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$132$event$$, $b__71131_event_id$jscomp$1_map__71160$$])), "show event", 
            "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$111_map__71160__$1_timestamp$jscomp$inline_4642$$)], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__71131_event_id$jscomp$1_map__71160$$], null)), $sensei$frontend$admin$paypal_events$event_table_$_iter__71128$$($APP.$cljs$core$rest$$($s__71129__$2_temp__5823__auto__$jscomp$472$$)));
          }
          return null;
        }
      }, null, null);
    }($events$jscomp$10$$);
  }()], null)], null);
}, $sensei$frontend$admin$paypal_statistics$bar_chart$$ = function($fields$jscomp$16$$) {
  var $chart_data$jscomp$7$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5631$sensei_DOT_frontend_DOT_admin_DOT_paypal_statistics_SLASH_chart_data$$, $fields$jscomp$16$$], null));
  return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data$jscomp$7$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data$jscomp$7$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$paypal_statistics$chart_size$$, $APP.$cljs$cst$4646$axis$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1089$x$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  2, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$5410$timeseries$$, $APP.$cljs$cst$4650$tick$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$771$format$$, function($d$jscomp$168$$) {
    return "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($d$jscomp$168$$.getFullYear()) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($d$jscomp$168$$.getMonth() + 1);
  }], null)], null)], null), $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$paypal_statistics$colors$$, $APP.$cljs$cst$5403$groups$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$fields$jscomp$16$$], null), $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$5404$bar$$], null)], null) : null;
}, $sensei$frontend$admin$worker_logs$nav$$ = function($end_timestamp$jscomp$2$$, $filter$jscomp$3$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5644$div_DOT_admin_log_nav_DOT_d_flex_DOT_justify_content_between_DOT_flex_row$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($filter$jscomp$3$$) ? new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5645$span_DOT_filter$$, 
  new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5637$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_set_vm_name_filter$$, null], null));
  }], null), "Filter: ", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5646$span_DOT_vm$$, $filter$jscomp$3$$], null)], null) : null], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1531$span$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4443$label_DOT_form_check_label_DOT_mt_2$$, "End: "], null), 
  new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$form$datepicker$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$172$value$$, $end_timestamp$jscomp$2$$, $APP.$cljs$cst$933$on_change$$, function($p1__71304_SHARP_$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5634$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_set_logs_end_timestamp$$, $p1__71304_SHARP_$$], null));
  }], null)], null)], null)], null);
}, $sensei$frontend$admin$worker_logs$log_table$$ = function($logs$jscomp$2$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$374$table$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1263$tbody$$, function() {
    return function $sensei$frontend$admin$worker_logs$log_table_$_iter__71310$$($s__71311$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$487$$ = $APP.$cljs$core$seq$$($s__71311$$);
          if ($temp__5823__auto__$jscomp$487$$) {
            var $s__71311__$2$$ = $temp__5823__auto__$jscomp$487$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71311__$2$$)) {
              var $c__5626__auto__$jscomp$195$$ = $APP.$cljs$core$_chunked_first$$($s__71311__$2$$), $size__5627__auto__$jscomp$195$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$195$$), $b__71313$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$195$$);
              return function() {
                for (var $i__71312$$ = 0;;) {
                  if ($i__71312$$ < $size__5627__auto__$jscomp$195$$) {
                    var $vec__71314$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$195$$, $i__71312$$), $key$jscomp$358$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71314$$, 0, null), $map__71317$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71314$$, 1, null), $map__71317__$1$$ = $APP.$cljs$core$__destructure_map$$($map__71317$$), $log$jscomp$1$$ = $map__71317__$1$$, $event$jscomp$116$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71317__$1$$, 
                    $APP.$cljs$cst$132$event$$), $vm_name$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71317__$1$$, $cljs$cst$5643$vm_name$$), $timestamp$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71317__$1$$, $APP.$cljs$cst$1017$timestamp$$);
                    $APP.$cljs$core$chunk_append$$($b__71313$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$tools$date$__GT_str_in_timezone$$($timestamp$jscomp$16$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                    [$APP.$cljs$cst$2734$td$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$3413$cursor$$, $APP.$cljs$cst$1603$pointer$$], null), $APP.$cljs$cst$821$on_click$$, function($i__71312$jscomp$1$$, $vec__71314$jscomp$1$$, $key$jscomp$359$$, $map__71317$jscomp$1$$, $map__71317__$1$jscomp$1$$, $log$jscomp$2$$, $event$jscomp$117$$, $vm_name$jscomp$5$$) {
                      return function() {
                        return $APP.$re_frame$core$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5637$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_set_vm_name_filter$$, $APP.$cljs$core$name$$($vm_name$jscomp$5$$)], null));
                      };
                    }($i__71312$$, $vec__71314$$, $key$jscomp$358$$, $map__71317$$, $map__71317__$1$$, $log$jscomp$1$$, $event$jscomp$116$$, $vm_name$jscomp$4$$, $timestamp$jscomp$16$$, $c__5626__auto__$jscomp$195$$, $size__5627__auto__$jscomp$195$$, $b__71313$$, $s__71311__$2$$, $temp__5823__auto__$jscomp$487$$)], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($vm_name$jscomp$4$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                    [$APP.$cljs$cst$2734$td$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$116$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $sensei$frontend$admin$worker_logs$event_info$$.$cljs$core$IFn$_invoke$arity$1$($log$jscomp$1$$)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $key$jscomp$358$$], null)));
                    $i__71312$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71313$$), $sensei$frontend$admin$worker_logs$log_table_$_iter__71310$$($APP.$cljs$core$_chunked_rest$$($s__71311__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71313$$), null);
            }
            var $vec__71321$$ = $APP.$cljs$core$first$$($s__71311__$2$$), $key$jscomp$357$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71321$$, 0, null), $map__71324$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71321$$, 1, null), $map__71324__$1$$ = $APP.$cljs$core$__destructure_map$$($map__71324$$), $log$$ = $map__71324__$1$$, $event$jscomp$115$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71324__$1$$, $APP.$cljs$cst$132$event$$), 
            $vm_name$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71324__$1$$, $cljs$cst$5643$vm_name$$), $timestamp$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71324__$1$$, $APP.$cljs$cst$1017$timestamp$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$tools$date$__GT_str_in_timezone$$($timestamp$jscomp$15$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, 
            new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$3413$cursor$$, $APP.$cljs$cst$1603$pointer$$], null), $APP.$cljs$cst$821$on_click$$, function($vec__71321$jscomp$1$$, $key$jscomp$360$$, $map__71324$jscomp$1$$, $map__71324__$1$jscomp$1$$, $log$jscomp$3$$, $event$jscomp$118$$, $vm_name$jscomp$6$$) {
              return function() {
                return $APP.$re_frame$core$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5637$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_set_vm_name_filter$$, $APP.$cljs$core$name$$($vm_name$jscomp$6$$)], null));
              };
            }($vec__71321$$, $key$jscomp$357$$, $map__71324$$, $map__71324__$1$$, $log$$, $event$jscomp$115$$, $vm_name$jscomp$3$$, $timestamp$jscomp$15$$, $s__71311__$2$$, $temp__5823__auto__$jscomp$487$$)], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($vm_name$jscomp$3$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$115$$)], 
            null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $sensei$frontend$admin$worker_logs$event_info$$.$cljs$core$IFn$_invoke$arity$1$($log$$)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $key$jscomp$357$$], null)), $sensei$frontend$admin$worker_logs$log_table_$_iter__71310$$($APP.$cljs$core$rest$$($s__71311__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($logs$jscomp$2$$);
  }()], null)], null);
}, $sensei$frontend$admin$worker_logs$log_table_with_scroll$$ = function($logs_state$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5648$div_SHARP_log_table$$, new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$infinite_scrolling$infinite_scroll_component$$, $cljs$cst$5635$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs$$, $logs_state$$, 30, $sensei$frontend$admin$worker_logs$log_table$$], null)], null);
}, $sensei$frontend$admin$worker_logs$worker_logs$$ = function() {
  var $end_timestamp$jscomp$3$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5639$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs_end_timestamp$$], null))), $vm_name$jscomp$7$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5640$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs_vm_name_filter$$], null))), $logs_state$jscomp$1$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5641$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_displayed_logs$$], null));
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5649$div_DOT_card_DOT_my_2_GT_div_DOT_card_body_DOT_admin_log$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5531$div_DOT_card_title$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Logs"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 
  3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_logs$nav$$, $end_timestamp$jscomp$3$$, $vm_name$jscomp$7$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_logs$log_table_with_scroll$$, $logs_state$jscomp$1$$], null)], null);
}, $sensei$frontend$admin$manage_users$main$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2215$button_DOT_btn_DOT_btn_warning$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function() {
    var $uid$jscomp$230$$ = window.prompt("Login as UID:");
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5650$override_user$$, $uid$jscomp$230$$], null));
  }], null), "Log in as another user"], null)], null);
}, $sensei$frontend$admin$play_ai_stats$histogram$$ = function($chart_data$jscomp$8_subscription$jscomp$2$$) {
  $chart_data$jscomp$8_subscription$jscomp$2$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$($chart_data$jscomp$8_subscription$jscomp$2$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data$jscomp$8_subscription$jscomp$2$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data$jscomp$8_subscription$jscomp$2$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, 
  250, $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$5404$bar$$, $APP.$cljs$cst$4646$axis$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1089$x$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$5651$indexed$$], null)], null), $APP.$cljs$cst$5404$bar$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1046$width$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$5652$ratio$$, 0.2], null)], null)], null)], null) : 
  null], null);
}, $sensei$frontend$admin$problem_stats$problem_add_histogram$$ = function() {
  var $chart_data$jscomp$9$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5661$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_chart_data$$], null)), $total$jscomp$13$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5662$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_total$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1773$h3$$, "User % who added at most n problems (total: ", $total$jscomp$13$$, " users)"], null), $total$jscomp$13$$ > 0 ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, 
  $chart_data$jscomp$9$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, 250, $APP.$cljs$cst$5405$colors$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1200$free$$, "#000", $APP.$cljs$cst$1201$basic$$, "#35c", $APP.$cljs$cst$1202$standard$$, "#4b4", $APP.$cljs$cst$1203$pro$$, "#dc0"], null), $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$, $APP.$cljs$cst$4646$axis$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1089$x$$, 
  new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$25$type$$, $cljs$cst$5651$indexed$$, $APP.$cljs$cst$4650$tick$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$771$format$$, function($x$jscomp$1140$$) {
    return $x$jscomp$1140$$;
  }], null)], null)], null)], null)], null) : null], null);
}, $sensei$frontend$admin$rank_statistics$games_histogram$$ = function($data$jscomp$300_quality$jscomp$29$$) {
  $data$jscomp$300_quality$jscomp$29$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5667$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_game_histogram_data$$, $data$jscomp$300_quality$jscomp$29$$], null));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $data$jscomp$300_quality$jscomp$29$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$rank_statistics$chart_size$$, $APP.$cljs$cst$5405$colors$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1200$free$$, "#000", $APP.$cljs$cst$1201$basic$$, "#35c", $APP.$cljs$cst$1202$standard$$, 
  "#4b4", $APP.$cljs$cst$1203$pro$$, "#dc0"], null), $APP.$cljs$cst$4646$axis$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1089$x$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$25$type$$, $cljs$cst$5651$indexed$$, $APP.$cljs$cst$4650$tick$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$771$format$$, function($x$jscomp$1141$$) {
    return $APP.$sensei$common$rank$format$$($x$jscomp$1141$$);
  }], null)], null)], null)], null)], null);
}, $sensei$frontend$admin$rank_statistics$user_histogram$$ = function($data$jscomp$301_quality$jscomp$30$$) {
  $data$jscomp$301_quality$jscomp$30$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5668$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_user_histogram_data$$, $data$jscomp$301_quality$jscomp$30$$], null));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $data$jscomp$301_quality$jscomp$30$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$rank_statistics$chart_size$$, $APP.$cljs$cst$5405$colors$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1200$free$$, "#000", $APP.$cljs$cst$1201$basic$$, "#35c", $APP.$cljs$cst$1202$standard$$, 
  "#4b4", $APP.$cljs$cst$1203$pro$$, "#dc0"], null), $APP.$cljs$cst$4646$axis$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1089$x$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$25$type$$, $cljs$cst$5651$indexed$$, $APP.$cljs$cst$4650$tick$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$771$format$$, function($x$jscomp$1142$$) {
    return $APP.$sensei$common$rank$format$$($x$jscomp$1142$$);
  }], null)], null)], null)], null)], null);
}, $sensei$frontend$admin$rank_statistics$median$$ = function($coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$) {
  $coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$ = $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$);
  var $bottom_val_cnt$jscomp$37$$ = $APP.$cljs$core$count$$($coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$), $coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$ = $APP.$cljs$core$quot$$($bottom_val_cnt$jscomp$37$$, 2);
  if ($bottom_val_cnt$jscomp$37$$ > 0) {
    if (!$APP.$cljs$core$even_QMARK_$$($bottom_val_cnt$jscomp$37$$)) {
      return $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$, $coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$);
    }
    $bottom_val_cnt$jscomp$37$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$, $coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$ - 1);
    $coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$, $coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$);
    $coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$bottom_val_cnt$jscomp$37$$, $coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$], null);
    $coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$ = $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$_PLUS_$$, $coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$);
    $coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$ = $APP.$cljs$core$count$$($coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$);
    return $coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$ > 0 ? $coll$jscomp$1009_sorted$jscomp$4_sum$jscomp$inline_4673_top_val$$ / $coll$jscomp$inline_4672_count$jscomp$inline_4674_halfway$$ : 0;
  }
  return null;
}, $sensei$frontend$admin$roles$form$$ = function($my_uid$$, $all_roles$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3483$table_DOT_table_sm_GT_tbody$$, function() {
    return function $sensei$frontend$admin$roles$form_$_iter__210126$$($s__210127$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$490$$ = $APP.$cljs$core$seq$$($s__210127$$);
          if ($temp__5823__auto__$jscomp$490$$) {
            var $s__210127__$2$$ = $temp__5823__auto__$jscomp$490$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__210127__$2$$)) {
              var $c__5626__auto__$jscomp$197$$ = $APP.$cljs$core$_chunked_first$$($s__210127__$2$$), $size__5627__auto__$jscomp$197$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$197$$), $b__210129$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$197$$);
              return function() {
                for (var $i__210128$$ = 0;;) {
                  if ($i__210128$$ < $size__5627__auto__$jscomp$197$$) {
                    var $vec__210130$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$197$$, $i__210128$$), $uid$jscomp$234$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__210130$$, 0, null), $user_roles$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__210130$$, 1, null);
                    $APP.$cljs$core$chunk_append$$($b__210129$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5675$td_GT_div_DOT_form_group_DOT_form_check_label$$, $APP.$cljs$cst$64$name$$.$cljs$core$IFn$_invoke$arity$2$($user_roles$jscomp$1$$, $uid$jscomp$234$$)], null), function() {
                      return function($i__210128$jscomp$1$$, $vec__210130$jscomp$1$$, $uid$jscomp$235$$, $user_roles$jscomp$2$$, $c__5626__auto__$jscomp$198$$, $size__5627__auto__$jscomp$198$$, $b__210129$jscomp$1$$, $s__210127__$2$jscomp$1$$, $temp__5823__auto__$jscomp$491$$) {
                        return function $sensei$frontend$admin$roles$form_$_iter__210126_$_iter__210133$$($s__210134$$) {
                          return new $APP.$cljs$core$LazySeq$$(null, function($i__210128$jscomp$2$$, $vec__210130$jscomp$2$$, $uid$jscomp$236$$, $user_roles$jscomp$3$$, $c__5626__auto__$jscomp$199$$, $size__5627__auto__$jscomp$199$$, $b__210129$jscomp$2$$, $s__210127__$2$jscomp$2$$, $temp__5823__auto__$jscomp$492$$) {
                            return function() {
                              for (;;) {
                                var $temp__5823__auto____$1$jscomp$80$$ = $APP.$cljs$core$seq$$($s__210134$$);
                                if ($temp__5823__auto____$1$jscomp$80$$) {
                                  var $s__210134__$2$$ = $temp__5823__auto____$1$jscomp$80$$;
                                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__210134__$2$$)) {
                                    var $c__5626__auto____$1$jscomp$20$$ = $APP.$cljs$core$_chunked_first$$($s__210134__$2$$), $size__5627__auto____$1$jscomp$20$$ = $APP.$cljs$core$count$$($c__5626__auto____$1$jscomp$20$$), $b__210136$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$20$$);
                                    return function() {
                                      for (var $i__210135$$ = 0;;) {
                                        if ($i__210135$$ < $size__5627__auto____$1$jscomp$20$$) {
                                          var $role$jscomp$2$$ = $APP.$cljs$core$_nth$$($c__5626__auto____$1$jscomp$20$$, $i__210135$$);
                                          $APP.$cljs$core$chunk_append$$($b__210136$$, function() {
                                            var $has_role_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($user_roles$jscomp$3$$, $role$jscomp$2$$);
                                            return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5676$td_GT_div_DOT_form_group_DOT_form_check$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1355$input_DOT_form_check_input$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$1288$checkbox$$, $APP.$cljs$cst$1289$checked$$, 
                                            $APP.$cljs$core$boolean$0$$($has_role_QMARK_$$), $APP.$cljs$cst$835$disabled$$, function() {
                                              var $and__5140__auto__$jscomp$399_and__5140__auto____$1$jscomp$115$$ = $cljs$cst$5677$owner$$.$cljs$core$IFn$_invoke$arity$1$($user_roles$jscomp$3$$);
                                              return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$399_and__5140__auto____$1$jscomp$115$$) ? ($and__5140__auto__$jscomp$399_and__5140__auto____$1$jscomp$115$$ = $APP.$cljs$cst$3616$admin$$.$cljs$core$IFn$_invoke$arity$1$($user_roles$jscomp$3$$), $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$399_and__5140__auto____$1$jscomp$115$$) ? $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($role$jscomp$2$$, $APP.$cljs$cst$3616$admin$$) : $and__5140__auto__$jscomp$399_and__5140__auto____$1$jscomp$115$$) : 
                                              $and__5140__auto__$jscomp$399_and__5140__auto____$1$jscomp$115$$;
                                            }(), $APP.$cljs$cst$933$on_change$$, function($i__210135$jscomp$1$$, $i__210128$jscomp$3$$, $has_role_QMARK_$jscomp$1$$, $role$jscomp$3$$, $c__5626__auto____$1$jscomp$21$$, $size__5627__auto____$1$jscomp$21$$, $b__210136$jscomp$1$$, $s__210134__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$81$$, $vec__210130$jscomp$3$$, $uid$jscomp$237$$) {
                                              return function() {
                                                return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5674$write_role$$, $uid$jscomp$237$$, $role$jscomp$3$$, $APP.$cljs$core$not$$($has_role_QMARK_$jscomp$1$$)], null));
                                              };
                                            }($i__210135$$, $i__210128$jscomp$2$$, $has_role_QMARK_$$, $role$jscomp$2$$, $c__5626__auto____$1$jscomp$20$$, $size__5627__auto____$1$jscomp$20$$, $b__210136$$, $s__210134__$2$$, $temp__5823__auto____$1$jscomp$80$$, $vec__210130$jscomp$2$$, $uid$jscomp$236$$, $user_roles$jscomp$3$$, $c__5626__auto__$jscomp$199$$, $size__5627__auto__$jscomp$199$$, $b__210129$jscomp$2$$, $s__210127__$2$jscomp$2$$, $temp__5823__auto__$jscomp$492$$)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 
                                            2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5678$label_DOT_form_check_label_DOT_ms_1$$, $role$jscomp$2$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $role$jscomp$2$$], null));
                                          }());
                                          $i__210135$$ += 1;
                                        } else {
                                          return !0;
                                        }
                                      }
                                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__210136$$), $sensei$frontend$admin$roles$form_$_iter__210126_$_iter__210133$$($APP.$cljs$core$_chunked_rest$$($s__210134__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__210136$$), null);
                                  }
                                  var $role$jscomp$1$$ = $APP.$cljs$core$first$$($s__210134__$2$$);
                                  return $APP.$cljs$core$cons$$(function() {
                                    var $has_role_QMARK_$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($user_roles$jscomp$3$$, $role$jscomp$1$$);
                                    return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5676$td_GT_div_DOT_form_group_DOT_form_check$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1355$input_DOT_form_check_input$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$1288$checkbox$$, $APP.$cljs$cst$1289$checked$$, 
                                    $APP.$cljs$core$boolean$0$$($has_role_QMARK_$jscomp$2$$), $APP.$cljs$cst$835$disabled$$, function() {
                                      var $and__5140__auto__$jscomp$400_and__5140__auto____$1$jscomp$116$$ = $cljs$cst$5677$owner$$.$cljs$core$IFn$_invoke$arity$1$($user_roles$jscomp$3$$);
                                      return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$400_and__5140__auto____$1$jscomp$116$$) ? ($and__5140__auto__$jscomp$400_and__5140__auto____$1$jscomp$116$$ = $APP.$cljs$cst$3616$admin$$.$cljs$core$IFn$_invoke$arity$1$($user_roles$jscomp$3$$), $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$400_and__5140__auto____$1$jscomp$116$$) ? $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($role$jscomp$1$$, $APP.$cljs$cst$3616$admin$$) : $and__5140__auto__$jscomp$400_and__5140__auto____$1$jscomp$116$$) : 
                                      $and__5140__auto__$jscomp$400_and__5140__auto____$1$jscomp$116$$;
                                    }(), $APP.$cljs$cst$933$on_change$$, function($i__210128$jscomp$4$$, $has_role_QMARK_$jscomp$3$$, $role$jscomp$4$$, $s__210134__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$82$$, $vec__210130$jscomp$4$$, $uid$jscomp$238$$) {
                                      return function() {
                                        return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5674$write_role$$, $uid$jscomp$238$$, $role$jscomp$4$$, $APP.$cljs$core$not$$($has_role_QMARK_$jscomp$3$$)], null));
                                      };
                                    }($i__210128$jscomp$2$$, $has_role_QMARK_$jscomp$2$$, $role$jscomp$1$$, $s__210134__$2$$, $temp__5823__auto____$1$jscomp$80$$, $vec__210130$jscomp$2$$, $uid$jscomp$236$$, $user_roles$jscomp$3$$, $c__5626__auto__$jscomp$199$$, $size__5627__auto__$jscomp$199$$, $b__210129$jscomp$2$$, $s__210127__$2$jscomp$2$$, $temp__5823__auto__$jscomp$492$$)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5678$label_DOT_form_check_label_DOT_ms_1$$, 
                                    $role$jscomp$1$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $role$jscomp$1$$], null));
                                  }(), $sensei$frontend$admin$roles$form_$_iter__210126_$_iter__210133$$($APP.$cljs$core$rest$$($s__210134__$2$$)));
                                }
                                return null;
                              }
                            };
                          }($i__210128$jscomp$1$$, $vec__210130$jscomp$1$$, $uid$jscomp$235$$, $user_roles$jscomp$2$$, $c__5626__auto__$jscomp$198$$, $size__5627__auto__$jscomp$198$$, $b__210129$jscomp$1$$, $s__210127__$2$jscomp$1$$, $temp__5823__auto__$jscomp$491$$), null, null);
                        };
                      }($i__210128$$, $vec__210130$$, $uid$jscomp$234$$, $user_roles$jscomp$1$$, $c__5626__auto__$jscomp$197$$, $size__5627__auto__$jscomp$197$$, $b__210129$$, $s__210127__$2$$, $temp__5823__auto__$jscomp$490$$)($APP.$sensei$common$auth$roles$all_roles$$);
                    }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $uid$jscomp$234$$], null)));
                    $i__210128$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__210129$$), $sensei$frontend$admin$roles$form_$_iter__210126$$($APP.$cljs$core$_chunked_rest$$($s__210127__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__210129$$), null);
            }
            var $vec__210137$$ = $APP.$cljs$core$first$$($s__210127__$2$$), $uid$jscomp$233$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__210137$$, 0, null), $user_roles$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__210137$$, 1, null);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5675$td_GT_div_DOT_form_group_DOT_form_check_label$$, $APP.$cljs$cst$64$name$$.$cljs$core$IFn$_invoke$arity$2$($user_roles$$, $uid$jscomp$233$$)], null), function() {
              return function($vec__210137$jscomp$1$$, $uid$jscomp$239$$, $user_roles$jscomp$6$$, $s__210127__$2$jscomp$5$$, $temp__5823__auto__$jscomp$495$$) {
                return function $sensei$frontend$admin$roles$form_$_iter__210126_$_iter__210140$$($s__210141$$) {
                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                    for (;;) {
                      var $temp__5823__auto____$1$jscomp$83$$ = $APP.$cljs$core$seq$$($s__210141$$);
                      if ($temp__5823__auto____$1$jscomp$83$$) {
                        var $s__210141__$2$$ = $temp__5823__auto____$1$jscomp$83$$;
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__210141__$2$$)) {
                          var $c__5626__auto__$jscomp$202$$ = $APP.$cljs$core$_chunked_first$$($s__210141__$2$$), $size__5627__auto__$jscomp$202$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$202$$), $b__210143$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$202$$);
                          return function() {
                            for (var $i__210142$$ = 0;;) {
                              if ($i__210142$$ < $size__5627__auto__$jscomp$202$$) {
                                var $role$jscomp$6$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$202$$, $i__210142$$);
                                $APP.$cljs$core$chunk_append$$($b__210143$$, function() {
                                  var $has_role_QMARK_$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($user_roles$jscomp$6$$, $role$jscomp$6$$);
                                  return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5676$td_GT_div_DOT_form_group_DOT_form_check$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1355$input_DOT_form_check_input$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$1288$checkbox$$, $APP.$cljs$cst$1289$checked$$, 
                                  $APP.$cljs$core$boolean$0$$($has_role_QMARK_$jscomp$4$$), $APP.$cljs$cst$835$disabled$$, function() {
                                    var $and__5140__auto__$jscomp$401_and__5140__auto____$1$jscomp$117$$ = $cljs$cst$5677$owner$$.$cljs$core$IFn$_invoke$arity$1$($user_roles$jscomp$6$$);
                                    return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$401_and__5140__auto____$1$jscomp$117$$) ? ($and__5140__auto__$jscomp$401_and__5140__auto____$1$jscomp$117$$ = $APP.$cljs$cst$3616$admin$$.$cljs$core$IFn$_invoke$arity$1$($user_roles$jscomp$6$$), $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$401_and__5140__auto____$1$jscomp$117$$) ? $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($role$jscomp$6$$, $APP.$cljs$cst$3616$admin$$) : $and__5140__auto__$jscomp$401_and__5140__auto____$1$jscomp$117$$) : 
                                    $and__5140__auto__$jscomp$401_and__5140__auto____$1$jscomp$117$$;
                                  }(), $APP.$cljs$cst$933$on_change$$, function($i__210142$jscomp$1$$, $has_role_QMARK_$jscomp$5$$, $role$jscomp$7$$, $c__5626__auto__$jscomp$203$$, $size__5627__auto__$jscomp$203$$, $b__210143$jscomp$1$$, $s__210141__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$84$$, $vec__210137$jscomp$2$$, $uid$jscomp$240$$) {
                                    return function() {
                                      return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5674$write_role$$, $uid$jscomp$240$$, $role$jscomp$7$$, $APP.$cljs$core$not$$($has_role_QMARK_$jscomp$5$$)], null));
                                    };
                                  }($i__210142$$, $has_role_QMARK_$jscomp$4$$, $role$jscomp$6$$, $c__5626__auto__$jscomp$202$$, $size__5627__auto__$jscomp$202$$, $b__210143$$, $s__210141__$2$$, $temp__5823__auto____$1$jscomp$83$$, $vec__210137$jscomp$1$$, $uid$jscomp$239$$, $user_roles$jscomp$6$$, $s__210127__$2$jscomp$5$$, $temp__5823__auto__$jscomp$495$$)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5678$label_DOT_form_check_label_DOT_ms_1$$, 
                                  $role$jscomp$6$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $role$jscomp$6$$], null));
                                }());
                                $i__210142$$ += 1;
                              } else {
                                return !0;
                              }
                            }
                          }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__210143$$), $sensei$frontend$admin$roles$form_$_iter__210126_$_iter__210140$$($APP.$cljs$core$_chunked_rest$$($s__210141__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__210143$$), null);
                        }
                        var $role$jscomp$5$$ = $APP.$cljs$core$first$$($s__210141__$2$$);
                        return $APP.$cljs$core$cons$$(function() {
                          var $has_role_QMARK_$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($user_roles$jscomp$6$$, $role$jscomp$5$$);
                          return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5676$td_GT_div_DOT_form_group_DOT_form_check$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1355$input_DOT_form_check_input$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$1288$checkbox$$, $APP.$cljs$cst$1289$checked$$, 
                          $APP.$cljs$core$boolean$0$$($has_role_QMARK_$jscomp$6$$), $APP.$cljs$cst$835$disabled$$, function() {
                            var $and__5140__auto__$jscomp$402_and__5140__auto____$1$jscomp$118$$ = $cljs$cst$5677$owner$$.$cljs$core$IFn$_invoke$arity$1$($user_roles$jscomp$6$$);
                            return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$402_and__5140__auto____$1$jscomp$118$$) ? ($and__5140__auto__$jscomp$402_and__5140__auto____$1$jscomp$118$$ = $APP.$cljs$cst$3616$admin$$.$cljs$core$IFn$_invoke$arity$1$($user_roles$jscomp$6$$), $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$402_and__5140__auto____$1$jscomp$118$$) ? $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($role$jscomp$5$$, $APP.$cljs$cst$3616$admin$$) : $and__5140__auto__$jscomp$402_and__5140__auto____$1$jscomp$118$$) : 
                            $and__5140__auto__$jscomp$402_and__5140__auto____$1$jscomp$118$$;
                          }(), $APP.$cljs$cst$933$on_change$$, function($has_role_QMARK_$jscomp$7$$, $role$jscomp$8$$, $s__210141__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$85$$, $vec__210137$jscomp$3$$, $uid$jscomp$241$$) {
                            return function() {
                              return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5674$write_role$$, $uid$jscomp$241$$, $role$jscomp$8$$, $APP.$cljs$core$not$$($has_role_QMARK_$jscomp$7$$)], null));
                            };
                          }($has_role_QMARK_$jscomp$6$$, $role$jscomp$5$$, $s__210141__$2$$, $temp__5823__auto____$1$jscomp$83$$, $vec__210137$jscomp$1$$, $uid$jscomp$239$$, $user_roles$jscomp$6$$, $s__210127__$2$jscomp$5$$, $temp__5823__auto__$jscomp$495$$)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5678$label_DOT_form_check_label_DOT_ms_1$$, $role$jscomp$5$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
                          1, [$APP.$cljs$cst$70$key$$, $role$jscomp$5$$], null));
                        }(), $sensei$frontend$admin$roles$form_$_iter__210126_$_iter__210140$$($APP.$cljs$core$rest$$($s__210141__$2$$)));
                      }
                      return null;
                    }
                  }, null, null);
                };
              }($vec__210137$$, $uid$jscomp$233$$, $user_roles$$, $s__210127__$2$$, $temp__5823__auto__$jscomp$490$$)($APP.$sensei$common$auth$roles$all_roles$$);
            }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $uid$jscomp$233$$], null)), $sensei$frontend$admin$roles$form_$_iter__210126$$($APP.$cljs$core$rest$$($s__210127__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($all_roles$$);
  }()], null);
}, $sensei$frontend$admin$roles$role_editor$$ = function() {
  var $all_roles$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3623$users_with_roles$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$roles$form$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$953$current_uid$$], null))), $all_roles$jscomp$1$$], null);
}, $sensei$frontend$admin$statistics$date_range_select$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $APP.$cljs$cst$2723$stats$$, $sensei$frontend$admin$statistics$initial_start_date$$, $sensei$frontend$admin$statistics$initial_end_date$$], null);
}, $sensei$frontend$admin$statistics$registration_graph$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5689$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_chart_data$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5687$registrations$$], 
  null)], null)), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$statistics$chart_size$$, $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$statistics$colors$$, $APP.$cljs$cst$1341$grid$$, $sensei$frontend$admin$statistics$grid$$, $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$], null)], null);
}, $sensei$frontend$admin$statistics$subscriptions_graph$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5689$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_chart_data$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5688$total_basic_subscriptions$$, 
  $cljs$cst$5681$total_standard_subscriptions$$, $cljs$cst$5685$total_pro_subscriptions$$], null)], null)), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$statistics$chart_size$$, $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$statistics$colors$$, $APP.$cljs$cst$1341$grid$$, $sensei$frontend$admin$statistics$grid$$, $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$], null)], null);
}, $sensei$frontend$admin$statistics$revenue_graph$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5690$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_revenue_chart_data$$], null)), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$statistics$chart_size$$, 
  $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$statistics$colors$$, $APP.$cljs$cst$1341$grid$$, $sensei$frontend$admin$statistics$grid$$, $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$], null)], null);
}, $sensei$frontend$admin$statistics$active_free_users_graph$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5689$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_chart_data$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5682$active_free_users$$], 
  null)], null)), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$statistics$chart_size$$, $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$statistics$colors$$, $APP.$cljs$cst$1341$grid$$, $sensei$frontend$admin$statistics$grid$$, $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$], null)], null);
}, $sensei$frontend$admin$statistics$upload_graph$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5689$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_chart_data$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5686$free_uploads$$, 
  $cljs$cst$5680$basic_uploads$$, $cljs$cst$5684$standard_uploads$$, $cljs$cst$5683$pro_uploads$$], null)], null)), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$statistics$chart_size$$, $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$statistics$colors$$, $APP.$cljs$cst$1341$grid$$, $sensei$frontend$admin$statistics$grid$$, $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$], null)], null);
}, $sensei$frontend$admin$statistics$page$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1777$div_DOT_row$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2746$div_DOT_col_12$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$statistics$date_range_select$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4286$div_DOT_mt_4$$, new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Daily Registrations"], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$statistics$registration_graph$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4286$div_DOT_mt_4$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5517$h5$$, "Daily Uploads"], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$statistics$upload_graph$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4286$div_DOT_mt_4$$, new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Active Subscriptions"], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$statistics$subscriptions_graph$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4286$div_DOT_mt_4$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5517$h5$$, "Gross monthly revenue"], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$statistics$revenue_graph$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4286$div_DOT_mt_4$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Daily Free Uploading Users"], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$statistics$active_free_users_graph$$], null)], null)], null)], null)], null);
}, $sensei$frontend$admin$upload_stats$quality_histogram$$ = function($quality$jscomp$33$$) {
  var $chart_data$jscomp$11$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5693$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_chart_data$$, $quality$jscomp$33$$], null)), $total$jscomp$17$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5694$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_total$$, $quality$jscomp$33$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1773$h3$$, "User % with at most n uploads for ", $quality$jscomp$33$$, " (total: ", $total$jscomp$17$$, ")"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, 
  $chart_data$jscomp$11$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, 250, $APP.$cljs$cst$5405$colors$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1200$free$$, "#000", $APP.$cljs$cst$1201$basic$$, "#35c", $APP.$cljs$cst$1202$standard$$, "#4b4", $APP.$cljs$cst$1203$pro$$, "#dc0"], null), $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$, $APP.$cljs$cst$4646$axis$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1089$x$$, 
  new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$25$type$$, $cljs$cst$5651$indexed$$, $APP.$cljs$cst$4650$tick$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$771$format$$, function($x$jscomp$1143$$) {
    return $x$jscomp$1143$$;
  }], null)], null)], null)], null)], null)], null);
}, $sensei$frontend$admin$upload_stats$quality_header$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, "b"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, "d"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$2733$th$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$5695$border_right$$, "1px solid"], null)], null), "p"], null)], null);
}, $sensei$frontend$admin$upload_stats$quality_data$$ = function($stats$jscomp$10$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$cst$1201$basic$$.$cljs$core$IFn$_invoke$arity$2$($stats$jscomp$10$$, 0)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $APP.$cljs$cst$1202$standard$$.$cljs$core$IFn$_invoke$arity$2$($stats$jscomp$10$$, 
  0)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$5695$border_right$$, "1px solid"], null)], null), $APP.$cljs$cst$1203$pro$$.$cljs$core$IFn$_invoke$arity$2$($stats$jscomp$10$$, 0)], null)], null);
}, $sensei$frontend$admin$upload_stats$most_active_users_table$$ = function() {
  var $map__71393$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5696$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_table_data$$], null))), $map__71393__$1$$ = $APP.$cljs$core$__destructure_map$$($map__71393$$), $users$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71393__$1$$, $APP.$cljs$cst$2051$users$$), 
  $days$jscomp$13$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71393__$1$$, $APP.$cljs$cst$1234$days$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2732$table_DOT_table_DOT_table_sm_DOT_table_striped$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5697$thead_DOT_text_center$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$2733$th$$, "uid"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1261$col_span$$, 3], null), "total"], null), function() {
    return function $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71394$$($s__71395$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__71395__$2_temp__5823__auto__$jscomp$498$$ = $APP.$cljs$core$seq$$($s__71395$$);
          if ($s__71395__$2_temp__5823__auto__$jscomp$498$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71395__$2_temp__5823__auto__$jscomp$498$$)) {
              var $JSCompiler_inline_result$jscomp$996_c__5626__auto__$jscomp$204$$ = $APP.$cljs$core$_chunked_first$$($s__71395__$2_temp__5823__auto__$jscomp$498$$), $size__5627__auto__$jscomp$204$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$996_c__5626__auto__$jscomp$204$$), $b__71397_day$jscomp$25$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$204$$);
              a: {
                for (var $i__71396$jscomp$inline_4676$$ = 0;;) {
                  if ($i__71396$jscomp$inline_4676$$ < $size__5627__auto__$jscomp$204$$) {
                    var $day$jscomp$inline_4677_x$jscomp$inline_6788$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$996_c__5626__auto__$jscomp$204$$, $i__71396$jscomp$inline_4676$$), $b$jscomp$inline_6787$$ = $b__71397_day$jscomp$25$$;
                    $day$jscomp$inline_4677_x$jscomp$inline_6788$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1261$col_span$$, 3], null), $day$jscomp$inline_4677_x$jscomp$inline_6788$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $day$jscomp$inline_4677_x$jscomp$inline_6788$$], null));
                    $b$jscomp$inline_6787$$.add($day$jscomp$inline_4677_x$jscomp$inline_6788$$);
                    $i__71396$jscomp$inline_4676$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$996_c__5626__auto__$jscomp$204$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$996_c__5626__auto__$jscomp$204$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$996_c__5626__auto__$jscomp$204$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71397_day$jscomp$25$$), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71394$$($APP.$cljs$core$_chunked_rest$$($s__71395__$2_temp__5823__auto__$jscomp$498$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71397_day$jscomp$25$$), null);
            }
            $b__71397_day$jscomp$25$$ = $APP.$cljs$core$first$$($s__71395__$2_temp__5823__auto__$jscomp$498$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1261$col_span$$, 3], null), $b__71397_day$jscomp$25$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__71397_day$jscomp$25$$], null)), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71394$$($APP.$cljs$core$rest$$($s__71395__$2_temp__5823__auto__$jscomp$498$$)));
          }
          return null;
        }
      }, null, null);
    }($days$jscomp$13$$);
  }()], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_header$$], null), function() {
    return function $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71399$$($s__71400$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__71400__$2_temp__5823__auto__$jscomp$499$$ = $APP.$cljs$core$seq$$($s__71400$$);
          if ($s__71400__$2_temp__5823__auto__$jscomp$499$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71400__$2_temp__5823__auto__$jscomp$499$$)) {
              var $JSCompiler_inline_result$jscomp$997_c__5626__auto__$jscomp$205$$ = $APP.$cljs$core$_chunked_first$$($s__71400__$2_temp__5823__auto__$jscomp$499$$), $size__5627__auto__$jscomp$205$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$997_c__5626__auto__$jscomp$205$$), $b__71402_day$jscomp$27$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$205$$);
              a: {
                for (var $i__71401$jscomp$inline_4679$$ = 0;;) {
                  if ($i__71401$jscomp$inline_4679$$ < $size__5627__auto__$jscomp$205$$) {
                    var $day$jscomp$inline_4680_x$jscomp$inline_6791$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$997_c__5626__auto__$jscomp$205$$, $i__71401$jscomp$inline_4679$$), $b$jscomp$inline_6790$$ = $b__71402_day$jscomp$27$$;
                    $day$jscomp$inline_4680_x$jscomp$inline_6791$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_header$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $day$jscomp$inline_4680_x$jscomp$inline_6791$$], null));
                    $b$jscomp$inline_6790$$.add($day$jscomp$inline_4680_x$jscomp$inline_6791$$);
                    $i__71401$jscomp$inline_4679$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$997_c__5626__auto__$jscomp$205$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$997_c__5626__auto__$jscomp$205$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$997_c__5626__auto__$jscomp$205$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71402_day$jscomp$27$$), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71399$$($APP.$cljs$core$_chunked_rest$$($s__71400__$2_temp__5823__auto__$jscomp$499$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71402_day$jscomp$27$$), null);
            }
            $b__71402_day$jscomp$27$$ = $APP.$cljs$core$first$$($s__71400__$2_temp__5823__auto__$jscomp$499$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_header$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__71402_day$jscomp$27$$], null)), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71399$$($APP.$cljs$core$rest$$($s__71400__$2_temp__5823__auto__$jscomp$499$$)));
          }
          return null;
        }
      }, null, null);
    }($days$jscomp$13$$);
  }()], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5698$tbody_DOT_text_center$$, function() {
    return function $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71403$$($s__71404$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$500$$ = $APP.$cljs$core$seq$$($s__71404$$);
          if ($temp__5823__auto__$jscomp$500$$) {
            var $s__71404__$2$$ = $temp__5823__auto__$jscomp$500$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71404__$2$$)) {
              var $c__5626__auto__$jscomp$206$$ = $APP.$cljs$core$_chunked_first$$($s__71404__$2$$), $size__5627__auto__$jscomp$206$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$206$$), $b__71406$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$206$$);
              return function() {
                for (var $i__71405$$ = 0;;) {
                  if ($i__71405$$ < $size__5627__auto__$jscomp$206$$) {
                    var $vec__71407$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$206$$, $i__71405$$), $uid$jscomp$243$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71407$$, 0, null), $stats$jscomp$12$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71407$$, 1, null);
                    $APP.$cljs$core$chunk_append$$($b__71406$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $uid$jscomp$243$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_data$$, 
                    $APP.$cljs$cst$2023$total$$.$cljs$core$IFn$_invoke$arity$1$($stats$jscomp$12$$)], null), function() {
                      return function($i__71405$jscomp$1$$, $vec__71407$jscomp$1$$, $uid$jscomp$244$$, $stats$jscomp$13$$, $c__5626__auto__$jscomp$207$$, $size__5627__auto__$jscomp$207$$, $b__71406$jscomp$1$$, $s__71404__$2$jscomp$1$$, $temp__5823__auto__$jscomp$501$$, $map__71393$jscomp$1$$, $map__71393__$1$jscomp$1$$, $users$jscomp$5$$, $days$jscomp$14$$) {
                        return function $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71403_$_iter__71410$$($s__71411$$) {
                          return new $APP.$cljs$core$LazySeq$$(null, function($i__71405$jscomp$2$$, $vec__71407$jscomp$2$$, $uid$jscomp$245$$, $stats$jscomp$14$$) {
                            return function() {
                              for (;;) {
                                var $s__71411__$2_temp__5823__auto____$1$jscomp$86$$ = $APP.$cljs$core$seq$$($s__71411$$);
                                if ($s__71411__$2_temp__5823__auto____$1$jscomp$86$$) {
                                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71411__$2_temp__5823__auto____$1$jscomp$86$$)) {
                                    var $JSCompiler_inline_result$jscomp$998_c__5626__auto____$1$jscomp$22$$ = $APP.$cljs$core$_chunked_first$$($s__71411__$2_temp__5823__auto____$1$jscomp$86$$), $size__5627__auto____$1$jscomp$22$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$998_c__5626__auto____$1$jscomp$22$$), $b__71413_day$jscomp$29$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$22$$);
                                    a: {
                                      for (var $i__71412$jscomp$inline_4682$$ = 0;;) {
                                        if ($i__71412$jscomp$inline_4682$$ < $size__5627__auto____$1$jscomp$22$$) {
                                          var $day$jscomp$inline_4683_x$jscomp$inline_6794$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$998_c__5626__auto____$1$jscomp$22$$, $i__71412$jscomp$inline_4682$$), $b$jscomp$inline_6793$$ = $b__71413_day$jscomp$29$$;
                                          $day$jscomp$inline_4683_x$jscomp$inline_6794$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_data$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($stats$jscomp$14$$, $day$jscomp$inline_4683_x$jscomp$inline_6794$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $day$jscomp$inline_4683_x$jscomp$inline_6794$$], 
                                          null));
                                          $b$jscomp$inline_6793$$.add($day$jscomp$inline_4683_x$jscomp$inline_6794$$);
                                          $i__71412$jscomp$inline_4682$$ += 1;
                                        } else {
                                          $JSCompiler_inline_result$jscomp$998_c__5626__auto____$1$jscomp$22$$ = !0;
                                          break a;
                                        }
                                      }
                                      $JSCompiler_inline_result$jscomp$998_c__5626__auto____$1$jscomp$22$$ = void 0;
                                    }
                                    return $JSCompiler_inline_result$jscomp$998_c__5626__auto____$1$jscomp$22$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71413_day$jscomp$29$$), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71403_$_iter__71410$$($APP.$cljs$core$_chunked_rest$$($s__71411__$2_temp__5823__auto____$1$jscomp$86$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71413_day$jscomp$29$$), null);
                                  }
                                  $b__71413_day$jscomp$29$$ = $APP.$cljs$core$first$$($s__71411__$2_temp__5823__auto____$1$jscomp$86$$);
                                  return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_data$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($stats$jscomp$14$$, $b__71413_day$jscomp$29$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__71413_day$jscomp$29$$], null)), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71403_$_iter__71410$$($APP.$cljs$core$rest$$($s__71411__$2_temp__5823__auto____$1$jscomp$86$$)));
                                }
                                return null;
                              }
                            };
                          }($i__71405$jscomp$1$$, $vec__71407$jscomp$1$$, $uid$jscomp$244$$, $stats$jscomp$13$$, $c__5626__auto__$jscomp$207$$, $size__5627__auto__$jscomp$207$$, $b__71406$jscomp$1$$, $s__71404__$2$jscomp$1$$, $temp__5823__auto__$jscomp$501$$, $map__71393$jscomp$1$$, $map__71393__$1$jscomp$1$$, $users$jscomp$5$$, $days$jscomp$14$$), null, null);
                        };
                      }($i__71405$$, $vec__71407$$, $uid$jscomp$243$$, $stats$jscomp$12$$, $c__5626__auto__$jscomp$206$$, $size__5627__auto__$jscomp$206$$, $b__71406$$, $s__71404__$2$$, $temp__5823__auto__$jscomp$500$$, $map__71393$$, $map__71393__$1$$, $users$jscomp$4$$, $days$jscomp$13$$)($days$jscomp$13$$);
                    }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $uid$jscomp$243$$], null)));
                    $i__71405$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71406$$), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71403$$($APP.$cljs$core$_chunked_rest$$($s__71404__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71406$$), null);
            }
            var $vec__71417$$ = $APP.$cljs$core$first$$($s__71404__$2$$), $uid$jscomp$242$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71417$$, 0, null), $stats$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71417$$, 1, null);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $uid$jscomp$242$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_data$$, $APP.$cljs$cst$2023$total$$.$cljs$core$IFn$_invoke$arity$1$($stats$jscomp$11$$)], 
            null), function() {
              return function($vec__71417$jscomp$1$$, $uid$jscomp$246$$, $stats$jscomp$15$$) {
                return function $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71403_$_iter__71423$$($s__71424$$) {
                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                    for (;;) {
                      var $s__71424__$2_temp__5823__auto____$1$jscomp$87$$ = $APP.$cljs$core$seq$$($s__71424$$);
                      if ($s__71424__$2_temp__5823__auto____$1$jscomp$87$$) {
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71424__$2_temp__5823__auto____$1$jscomp$87$$)) {
                          var $JSCompiler_inline_result$jscomp$999_c__5626__auto__$jscomp$209$$ = $APP.$cljs$core$_chunked_first$$($s__71424__$2_temp__5823__auto____$1$jscomp$87$$), $size__5627__auto__$jscomp$209$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$999_c__5626__auto__$jscomp$209$$), $b__71426_day$jscomp$31$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$209$$);
                          a: {
                            for (var $i__71425$jscomp$inline_4685$$ = 0;;) {
                              if ($i__71425$jscomp$inline_4685$$ < $size__5627__auto__$jscomp$209$$) {
                                var $day$jscomp$inline_4686_x$jscomp$inline_6797$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$999_c__5626__auto__$jscomp$209$$, $i__71425$jscomp$inline_4685$$), $b$jscomp$inline_6796$$ = $b__71426_day$jscomp$31$$;
                                $day$jscomp$inline_4686_x$jscomp$inline_6797$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_data$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($stats$jscomp$15$$, $day$jscomp$inline_4686_x$jscomp$inline_6797$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $day$jscomp$inline_4686_x$jscomp$inline_6797$$], 
                                null));
                                $b$jscomp$inline_6796$$.add($day$jscomp$inline_4686_x$jscomp$inline_6797$$);
                                $i__71425$jscomp$inline_4685$$ += 1;
                              } else {
                                $JSCompiler_inline_result$jscomp$999_c__5626__auto__$jscomp$209$$ = !0;
                                break a;
                              }
                            }
                            $JSCompiler_inline_result$jscomp$999_c__5626__auto__$jscomp$209$$ = void 0;
                          }
                          return $JSCompiler_inline_result$jscomp$999_c__5626__auto__$jscomp$209$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71426_day$jscomp$31$$), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71403_$_iter__71423$$($APP.$cljs$core$_chunked_rest$$($s__71424__$2_temp__5823__auto____$1$jscomp$87$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71426_day$jscomp$31$$), null);
                        }
                        $b__71426_day$jscomp$31$$ = $APP.$cljs$core$first$$($s__71424__$2_temp__5823__auto____$1$jscomp$87$$);
                        return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_data$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($stats$jscomp$15$$, $b__71426_day$jscomp$31$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__71426_day$jscomp$31$$], null)), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71403_$_iter__71423$$($APP.$cljs$core$rest$$($s__71424__$2_temp__5823__auto____$1$jscomp$87$$)));
                      }
                      return null;
                    }
                  }, null, null);
                };
              }($vec__71417$$, $uid$jscomp$242$$, $stats$jscomp$11$$, $s__71404__$2$$, $temp__5823__auto__$jscomp$500$$, $map__71393$$, $map__71393__$1$$, $users$jscomp$4$$, $days$jscomp$13$$)($days$jscomp$13$$);
            }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $uid$jscomp$242$$], null)), $sensei$frontend$admin$upload_stats$most_active_users_table_$_iter__71403$$($APP.$cljs$core$rest$$($s__71404__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($users$jscomp$4$$);
  }()], null)], null);
}, $sensei$frontend$admin$upload_stats$upload_stats$$ = function($uploads$jscomp$3$$) {
  return $APP.$cljs$core$update_vals$$($APP.$cljs$core$group_by$$($APP.$cljs$cst$1503$quality$$, $uploads$jscomp$3$$), $APP.$cljs$core$count$$);
}, $sensei$frontend$admin$user_errors$group_by_prefix$$ = function($error_logs$$) {
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($logs$jscomp$11$$) {
    var $vec__71435$$ = $APP.$cljs$core$first$$($logs$jscomp$11$$);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71435$$, 0, null);
    var $message$jscomp$81$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71435$$, 1, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71435$$, 2, null);
    return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($APP.$cljs$core$first$$($logs$jscomp$11$$), 1, "(" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$count$$($logs$jscomp$11$$)) + ") " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($message$jscomp$81$$));
  }, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$count$$, $APP.$cljs$core$_GT_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$second$$, $APP.$cljs$core$group_by$$(function($p__71445$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71445$$, 0, null);
    var $message$jscomp$82$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71445$$, 1, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71445$$, 2, null);
    return $message$jscomp$82$$.substring(0, 20);
  }, $error_logs$$))));
}, $sensei$frontend$admin$voucher$create_voucher_dialog$$ = function() {
  var $with_let71590$$ = $APP.$reagent$ratom$with_let_values$$($cljs$cst$5723$with_let71590$$), $form_state$jscomp$9$$ = $with_let71590$$.length === 0 || $APP.$cljs$core$not$$($with_let71590$$.hasOwnProperty(0)) ? $with_let71590$$[0] = $APP.$reagent$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$3148$plan$$, $APP.$cljs$cst$1203$pro$$, $APP.$cljs$cst$161$duration$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$4800$amount$$, 
  1, $APP.$cljs$cst$4992$unit$$, $APP.$cljs$cst$1236$months$$], null), $cljs$cst$5724$voucher_count$$, 1], null)) : $with_let71590$$[0];
  return new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $sensei$frontend$widget$form$group$$("Plan", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$radio_group$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$796$options$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($plan$jscomp$80$$) {
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$80$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$836$label$$, $APP.$cljs$core$name$$($plan$jscomp$80$$)], null)], null);
  }, $APP.$cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$(1, $APP.$sensei$common$payment$regions$plan_types$$)), $APP.$cljs$cst$172$value$$, $APP.$cljs$cst$3148$plan$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$_deref$$($form_state$jscomp$9$$)), $APP.$cljs$cst$1367$on_select$$, function($plan$jscomp$81$$) {
    return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($form_state$jscomp$9$$, $APP.$cljs$core$assoc$$, $APP.$cljs$cst$3148$plan$$, $plan$jscomp$81$$);
  }], null)], null)), $sensei$frontend$widget$form$group$$("Duration", new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $sensei$frontend$widget$form$numeric_input$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1139$step$$, 1, $APP.$cljs$cst$1359$min$$, 1, $APP.$cljs$cst$172$value$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_deref$$($form_state$jscomp$9$$), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$161$duration$$, $APP.$cljs$cst$4800$amount$$], null)), $APP.$cljs$cst$933$on_change$$, function($p1__71583_SHARP_$$) {
    return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($form_state$jscomp$9$$, $APP.$cljs$core$assoc_in$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$161$duration$$, $APP.$cljs$cst$4800$amount$$], null), $p1__71583_SHARP_$$);
  }], null)), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$radio_group$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$796$options$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($unit$jscomp$8$$) {
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$unit$jscomp$8$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$836$label$$, $APP.$cljs$core$name$$($unit$jscomp$8$$)], null)], null);
  }, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1234$days$$, $APP.$cljs$cst$1236$months$$, $APP.$cljs$cst$4987$years$$], null)), $APP.$cljs$cst$172$value$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_deref$$($form_state$jscomp$9$$), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$161$duration$$, $APP.$cljs$cst$4992$unit$$], null)), 
  $APP.$cljs$cst$1367$on_select$$, function($p1__71584_SHARP_$$) {
    return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($form_state$jscomp$9$$, $APP.$cljs$core$assoc_in$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$161$duration$$, $APP.$cljs$cst$4992$unit$$], null), $p1__71584_SHARP_$$);
  }], null)], null)], null)), $sensei$frontend$widget$form$group$$("Comment", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$sensei$frontend$widget$form$text_area$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$172$value$$, $APP.$cljs$cst$142$comment$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$_deref$$($form_state$jscomp$9$$)), $APP.$cljs$cst$933$on_change$$, function($p1__71585_SHARP_$$) {
    return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($form_state$jscomp$9$$, $APP.$cljs$core$assoc$$, $APP.$cljs$cst$142$comment$$, $p1__71585_SHARP_$$);
  }], null))], null)), $sensei$frontend$widget$form$group$$("Multi-User Campaign", new $APP.$cljs$core$PersistentVector$$(null, 8, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1777$div_DOT_row$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1342$max_width$$, "30rem"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5725$div_DOT_col_6$$, "Voucher Code"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5725$div_DOT_col_6$$, $APP.$sensei$frontend$widget$form$input$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$172$value$$, $cljs$cst$5726$custom_code$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$_deref$$($form_state$jscomp$9$$)), $APP.$cljs$cst$933$on_change$$, function($p1__71586_SHARP_$$) {
    return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($form_state$jscomp$9$$, $APP.$cljs$core$assoc$$, $cljs$cst$5726$custom_code$$, $p1__71586_SHARP_$$);
  }], null))], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5725$div_DOT_col_6$$, "User limit"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5725$div_DOT_col_6$$, $APP.$sensei$frontend$widget$form$input$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$172$value$$, $cljs$cst$5717$user_limit$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$_deref$$($form_state$jscomp$9$$)), 
  $APP.$cljs$cst$933$on_change$$, function($p1__71587_SHARP_$$) {
    return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($form_state$jscomp$9$$, $APP.$cljs$core$assoc$$, $cljs$cst$5717$user_limit$$, $p1__71587_SHARP_$$);
  }], null))], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5725$div_DOT_col_6$$, "End Date"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5725$div_DOT_col_6$$, $sensei$frontend$widget$form$datepicker$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$172$value$$, $cljs$cst$5727$end_date$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$_deref$$($form_state$jscomp$9$$)), 
  $APP.$cljs$cst$933$on_change$$, function($p1__71588_SHARP_$$) {
    return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($form_state$jscomp$9$$, $APP.$cljs$core$assoc$$, $cljs$cst$5727$end_date$$, $p1__71588_SHARP_$$);
  }], null))], null)], null)), $sensei$frontend$widget$form$group$$("Mass create (beware)", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $sensei$frontend$widget$form$numeric_input$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1139$step$$, 1, $APP.$cljs$cst$1359$min$$, 1, $APP.$cljs$cst$172$value$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_deref$$($form_state$jscomp$9$$), 
  $cljs$cst$5724$voucher_count$$), $APP.$cljs$cst$933$on_change$$, function($p1__71589_SHARP_$$) {
    return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($form_state$jscomp$9$$, $APP.$cljs$core$assoc$$, $cljs$cst$5724$voucher_count$$, $p1__71589_SHARP_$$);
  }], null))], null)), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5728$button_DOT_btn_DOT_btn_primary_DOT_btn_round$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$core$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5721$create_voucher$$, $APP.$cljs$core$_deref$$($form_state$jscomp$9$$)], null));
  }], null), "Create Voucher(s)"], null)], null);
}, $sensei$frontend$admin$voucher$new_voucher_links$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1687$pre$$, $APP.$clojure$string$join$cljs$0core$0IFn$0_invoke$0arity$02$$("\n", $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__71617_SHARP_$$) {
    return "https://ai-sensei.com/redeem/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($p1__71617_SHARP_$$);
  }, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5719$sensei_DOT_frontend_DOT_admin_DOT_voucher_SLASH_new_vouchers$$], null)))))], null);
}, $sensei$frontend$admin$voucher$admin_voucher$$ = function() {
  var $vouchers$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5729$valid_vouchers$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1342$max_width$$, "80em"], null)], null), function() {
    return function $sensei$frontend$admin$voucher$admin_voucher_$_iter__71624$$($s__71625$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$505$$ = $APP.$cljs$core$seq$$($s__71625$$);
          if ($temp__5823__auto__$jscomp$505$$) {
            var $s__71625__$2$$ = $temp__5823__auto__$jscomp$505$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71625__$2$$)) {
              var $c__5626__auto__$jscomp$210$$ = $APP.$cljs$core$_chunked_first$$($s__71625__$2$$), $size__5627__auto__$jscomp$210$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$210$$), $b__71627$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$210$$);
              return function() {
                for (var $i__71626$$ = 0;;) {
                  if ($i__71626$$ < $size__5627__auto__$jscomp$210$$) {
                    var $vec__71633$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$210$$, $i__71626$$), $code$jscomp$38$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71633$$, 0, null), $map__71636$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71633$$, 1, null), $map__71636__$1$$ = $APP.$cljs$core$__destructure_map$$($map__71636$$), $plan$jscomp$83$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71636__$1$$, $APP.$cljs$cst$3148$plan$$), 
                    $duration$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71636__$1$$, $APP.$cljs$cst$161$duration$$), $comment$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71636__$1$$, $APP.$cljs$cst$142$comment$$), $expires_at$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71636__$1$$, $APP.$cljs$cst$4991$expires_at$$);
                    $APP.$cljs$core$chunk_append$$($b__71627$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5535$div_DOT_card_DOT_my_2_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5733$div_DOT_card_title_DOT_mb_0$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, 
                    new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3144$a$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$805$href$$, "/redeem/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($code$jscomp$38$$)], null), $code$jscomp$38$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5734$span_DOT_ms_4$$, $comment$jscomp$8$$], null)], 
                    null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5735$div_DOT_row_DOT_justify_content_end_DOT_align_items_end_DOT_ms_2$$, new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5736$div_DOT_col_auto_DOT_me_auto$$, $APP.$cljs$cst$4800$amount$$.$cljs$core$IFn$_invoke$arity$1$($duration$jscomp$3$$), " ", $APP.$cljs$core$name$$($APP.$cljs$cst$4992$unit$$.$cljs$core$IFn$_invoke$arity$1$($duration$jscomp$3$$)), 
                    " ", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$974$b$$, $APP.$cljs$core$name$$($plan$jscomp$83$$)], null), " subscription"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5737$div_DOT_col_auto$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$modal$delete_with_confirmation_button$$, 
                    new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$840$title$$, "Really delete voucher?", $APP.$cljs$cst$821$on_click$$, function($i__71626$jscomp$1$$, $vec__71633$jscomp$1$$, $code$jscomp$39$$) {
                      return function() {
                        return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5722$delete_voucher$$, $code$jscomp$39$$], null));
                      };
                    }($i__71626$$, $vec__71633$$, $code$jscomp$38$$, $map__71636$$, $map__71636__$1$$, $plan$jscomp$83$$, $duration$jscomp$3$$, $comment$jscomp$8$$, $expires_at$jscomp$3$$, $c__5626__auto__$jscomp$210$$, $size__5627__auto__$jscomp$210$$, $b__71627$$, $s__71625__$2$$, $temp__5823__auto__$jscomp$505$$, $vouchers$jscomp$1$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$938$p$$, "Delete this voucher?"], null)], 
                    null)], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $code$jscomp$38$$], null)));
                    $i__71626$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71627$$), $sensei$frontend$admin$voucher$admin_voucher_$_iter__71624$$($APP.$cljs$core$_chunked_rest$$($s__71625__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71627$$), null);
            }
            var $vec__71641$$ = $APP.$cljs$core$first$$($s__71625__$2$$), $code$jscomp$37$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71641$$, 0, null), $map__71644$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71641$$, 1, null), $map__71644__$1$$ = $APP.$cljs$core$__destructure_map$$($map__71644$$), $plan$jscomp$82$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71644__$1$$, $APP.$cljs$cst$3148$plan$$), $duration$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71644__$1$$, 
            $APP.$cljs$cst$161$duration$$), $comment$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71644__$1$$, $APP.$cljs$cst$142$comment$$), $expires_at$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71644__$1$$, $APP.$cljs$cst$4991$expires_at$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5535$div_DOT_card_DOT_my_2_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5733$div_DOT_card_title_DOT_mb_0$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, new $APP.$cljs$core$PersistentVector$$(null, 
            3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3144$a$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$805$href$$, "/redeem/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($code$jscomp$37$$)], null), $code$jscomp$37$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5734$span_DOT_ms_4$$, $comment$jscomp$7$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 
            3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5735$div_DOT_row_DOT_justify_content_end_DOT_align_items_end_DOT_ms_2$$, new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5736$div_DOT_col_auto_DOT_me_auto$$, $APP.$cljs$cst$4800$amount$$.$cljs$core$IFn$_invoke$arity$1$($duration$jscomp$2$$), " ", $APP.$cljs$core$name$$($APP.$cljs$cst$4992$unit$$.$cljs$core$IFn$_invoke$arity$1$($duration$jscomp$2$$)), " ", new $APP.$cljs$core$PersistentVector$$(null, 
            2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$974$b$$, $APP.$cljs$core$name$$($plan$jscomp$82$$)], null), " subscription"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5737$div_DOT_col_auto$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$modal$delete_with_confirmation_button$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
            2, [$APP.$cljs$cst$840$title$$, "Really delete voucher?", $APP.$cljs$cst$821$on_click$$, function($vec__71641$jscomp$1$$, $code$jscomp$40$$) {
              return function() {
                return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5722$delete_voucher$$, $code$jscomp$40$$], null));
              };
            }($vec__71641$$, $code$jscomp$37$$, $map__71644$$, $map__71644__$1$$, $plan$jscomp$82$$, $duration$jscomp$2$$, $comment$jscomp$7$$, $expires_at$jscomp$2$$, $s__71625__$2$$, $temp__5823__auto__$jscomp$505$$, $vouchers$jscomp$1$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$938$p$$, "Delete this voucher?"], null)], null)], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, 
            $code$jscomp$37$$], null)), $sensei$frontend$admin$voucher$admin_voucher_$_iter__71624$$($APP.$cljs$core$rest$$($s__71625__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($vouchers$jscomp$1$$);
  }()], null);
}, $sensei$frontend$admin$voucher_funnel$tabs$$ = function($current_tab$jscomp$5$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5738$div_DOT_d_flex_DOT_flex_wrap_DOT_discuss_page_selector$$, function() {
    return function $sensei$frontend$admin$voucher_funnel$tabs_$_iter__71526$$($s__71527$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$508$$ = $APP.$cljs$core$seq$$($s__71527$$);
          if ($temp__5823__auto__$jscomp$508$$) {
            var $s__71527__$2$$ = $temp__5823__auto__$jscomp$508$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71527__$2$$)) {
              var $c__5626__auto__$jscomp$212$$ = $APP.$cljs$core$_chunked_first$$($s__71527__$2$$), $size__5627__auto__$jscomp$212$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$212$$), $b__71529$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$212$$);
              return function() {
                for (var $i__71528$$ = 0;;) {
                  if ($i__71528$$ < $size__5627__auto__$jscomp$212$$) {
                    var $tab$jscomp$5$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$212$$, $i__71528$$);
                    $APP.$cljs$core$chunk_append$$($b__71529$$, function() {
                      var $active_QMARK_$jscomp$10$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($current_tab$jscomp$5$$, $tab$jscomp$5$$);
                      return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3387$span_DOT_badge_DOT_rounded_pill_DOT_tag_wrapper_DOT_pointer_DOT_d_flex_DOT_align_items_center_DOT_justify_content_center$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($i__71528$jscomp$1$$, $active_QMARK_$jscomp$11$$, $tab$jscomp$6$$) {
                        return function() {
                          return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5739$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_tab$$, $tab$jscomp$6$$], null));
                        };
                      }($i__71528$$, $active_QMARK_$jscomp$10$$, $tab$jscomp$5$$, $c__5626__auto__$jscomp$212$$, $size__5627__auto__$jscomp$212$$, $b__71529$$, $s__71527__$2$$, $temp__5823__auto__$jscomp$508$$), $APP.$cljs$cst$68$class$$, $active_QMARK_$jscomp$10$$ ? $APP.$cljs$cst$1602$active$$ : null], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5740$span_DOT_badge_DOT_rounded_pill_DOT_badge_selector_DOT_tag_DOT_m_0_DOT_d_flex_DOT_align_items_center$$, 
                      "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($tab$jscomp$5$$)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $tab$jscomp$5$$], null));
                    }());
                    $i__71528$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71529$$), $sensei$frontend$admin$voucher_funnel$tabs_$_iter__71526$$($APP.$cljs$core$_chunked_rest$$($s__71527__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71529$$), null);
            }
            var $tab$jscomp$4$$ = $APP.$cljs$core$first$$($s__71527__$2$$);
            return $APP.$cljs$core$cons$$(function() {
              var $active_QMARK_$jscomp$12$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($current_tab$jscomp$5$$, $tab$jscomp$4$$);
              return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3387$span_DOT_badge_DOT_rounded_pill_DOT_tag_wrapper_DOT_pointer_DOT_d_flex_DOT_align_items_center_DOT_justify_content_center$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($active_QMARK_$jscomp$13$$, $tab$jscomp$7$$) {
                return function() {
                  return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5739$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_tab$$, $tab$jscomp$7$$], null));
                };
              }($active_QMARK_$jscomp$12$$, $tab$jscomp$4$$, $s__71527__$2$$, $temp__5823__auto__$jscomp$508$$), $APP.$cljs$cst$68$class$$, $active_QMARK_$jscomp$12$$ ? $APP.$cljs$cst$1602$active$$ : null], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5740$span_DOT_badge_DOT_rounded_pill_DOT_badge_selector_DOT_tag_DOT_m_0_DOT_d_flex_DOT_align_items_center$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($tab$jscomp$4$$)], 
              null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $tab$jscomp$4$$], null));
            }(), $sensei$frontend$admin$voucher_funnel$tabs_$_iter__71526$$($APP.$cljs$core$rest$$($s__71527__$2$$)));
          }
          return null;
        }
      }, null, null);
    }(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5741$by_voucher_code$$, $cljs$cst$5742$by_voucher_comment$$], null));
  }()], null);
}, $sensei$frontend$admin$voucher_funnel$voucher_search$$ = function($current_tab$jscomp$6$$) {
  var $search_text$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5743$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_input_text$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1762$div_DOT_d_flex_DOT_align_items_center$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$with_label$$, function() {
    var $G__71542__$1$$ = $current_tab$jscomp$6$$ instanceof $APP.$cljs$core$Keyword$$ ? $current_tab$jscomp$6$$.$fqn$ : null;
    switch($G__71542__$1$$) {
      case "by-voucher-code":
        return "Voucher Code";
      case "by-voucher-comment":
        return "Voucher Comment";
      default:
        throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__71542__$1$$));
    }
  }(), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$input$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$172$value$$, $search_text$jscomp$1$$, $APP.$cljs$cst$933$on_change$$, function($p1__71541_SHARP_$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5744$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_input_text$$, $p1__71541_SHARP_$$], null));
  }], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5745$button_DOT_btn_DOT_btn_primary_DOT_ms_5$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5746$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_voucher_filter$$, $current_tab$jscomp$6$$, $search_text$jscomp$1$$], null));
  }], null), "Find voucher(s)"], null)], null);
}, $sensei$frontend$admin$voucher_funnel$result_table$$ = function() {
  var $temp__5821__auto__$jscomp$149_vouchers$jscomp$4$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5747$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_stats$$], null)));
  if ($APP.$cljs$core$truth_$$($temp__5821__auto__$jscomp$149_vouchers$jscomp$4$$)) {
    var $map__71554__$1_sub_rate$$ = $APP.$cljs$core$__destructure_map$$($temp__5821__auto__$jscomp$149_vouchers$jscomp$4$$);
    $temp__5821__auto__$jscomp$149_vouchers$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71554__$1_sub_rate$$, $cljs$cst$5731$vouchers$$);
    var $users$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71554__$1_sub_rate$$, $APP.$cljs$cst$2051$users$$), $subs$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71554__$1_sub_rate$$, $cljs$cst$5748$subs$$);
    $map__71554__$1_sub_rate$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71554__$1_sub_rate$$, $cljs$cst$5749$sub_rate$$);
    return new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5750$table_DOT_table_DOT_table_sm_DOT_table_striped_DOT_mt_5_GT_tbody$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, "Vouchers found"], null), new $APP.$cljs$core$PersistentVector$$(null, 
    2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $temp__5821__auto__$jscomp$149_vouchers$jscomp$4$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, "Redeemed by users"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
    [$APP.$cljs$cst$2734$td$$, $users$jscomp$8$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, "Subscribed after redeeming"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $subs$jscomp$2$$], null)], 
    null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, "Subscription rate"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $map__71554__$1_sub_rate$$, "%"], null)], null)], null);
  }
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1531$span$$, "No vouchers found."], null);
}, $sensei$frontend$admin$voucher_funnel$count_subs$$ = function($funnel_data$$) {
  return $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($data$jscomp$307_p__71593$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$307_p__71593$$, 0, null);
    var $redeem_date$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$307_p__71593$$, 1, null);
    $data$jscomp$307_p__71593$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$307_p__71593$$, 2, null);
    return $APP.$cljs$core$some$$(function($p__71597_v$jscomp$413$$) {
      var $and__5140__auto__$jscomp$407_k$jscomp$461_s$jscomp$inline_7072$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71597_v$jscomp$413$$, 0, null);
      $p__71597_v$jscomp$413$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71597_v$jscomp$413$$, 1, null);
      $and__5140__auto__$jscomp$407_k$jscomp$461_s$jscomp$inline_7072$$ = $APP.$cljs$core$name$$($and__5140__auto__$jscomp$407_k$jscomp$461_s$jscomp$inline_7072$$);
      return ($and__5140__auto__$jscomp$407_k$jscomp$461_s$jscomp$inline_7072$$ = $APP.$goog$string$internal$startsWith$$($and__5140__auto__$jscomp$407_k$jscomp$461_s$jscomp$inline_7072$$, "subscription-")) ? $APP.$tools$date$before_QMARK_$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$redeem_date$jscomp$1$$, $p__71597_v$jscomp$413$$])) : $and__5140__auto__$jscomp$407_k$jscomp$461_s$jscomp$inline_7072$$;
    }, $data$jscomp$307_p__71593$$);
  }, $funnel_data$$));
}, $sensei$frontend$admin$workers$queue_selector$$ = function($selected_queue$$, $on_select$jscomp$5$$) {
  var $base_queues$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["", $APP.$cljs$cst$702$done$$, $APP.$cljs$cst$2343$fast$$, $APP.$cljs$cst$2341$slow$$, $cljs$cst$5765$failures$$], null), $worker_queues$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5770$available_instances$$], 
  null))), $all_queues$jscomp$1$$ = $APP.$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($base_queues$$, $worker_queues$jscomp$1$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5782$select_DOT_form_control$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$172$value$$, $selected_queue$$, $APP.$cljs$cst$933$on_change$$, function($G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$) {
    $G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$ = $G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$.target.value;
    var $JSCompiler_inline_result$jscomp$inline_6800_fexpr__80307$jscomp$inline_6801$$ = new $APP.$cljs$core$PersistentHashSet$$(null, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, ["failures", null, "slow", null, "fast", null, "done", null], null), null);
    $JSCompiler_inline_result$jscomp$inline_6800_fexpr__80307$jscomp$inline_6801$$ = $JSCompiler_inline_result$jscomp$inline_6800_fexpr__80307$jscomp$inline_6801$$.$cljs$core$IFn$_invoke$arity$1$ ? $JSCompiler_inline_result$jscomp$inline_6800_fexpr__80307$jscomp$inline_6801$$.$cljs$core$IFn$_invoke$arity$1$($G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$) : $JSCompiler_inline_result$jscomp$inline_6800_fexpr__80307$jscomp$inline_6801$$.call(null, $G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$);
    $G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$ = $APP.$cljs$core$truth_$$($JSCompiler_inline_result$jscomp$inline_6800_fexpr__80307$jscomp$inline_6801$$) ? $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$) : $G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$;
    return $on_select$jscomp$5$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_select$jscomp$5$$.$cljs$core$IFn$_invoke$arity$1$($G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$) : $on_select$jscomp$5$$.call(null, $G__80313_evt$jscomp$48_queue_str$jscomp$inline_6799$$);
  }], null), function() {
    return function $sensei$frontend$admin$workers$queue_selector_$_iter__80315$$($s__80316$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__80316__$2_temp__5823__auto__$jscomp$512$$ = $APP.$cljs$core$seq$$($s__80316$$);
          if ($s__80316__$2_temp__5823__auto__$jscomp$512$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80316__$2_temp__5823__auto__$jscomp$512$$)) {
              var $JSCompiler_inline_result$jscomp$1008_c__5626__auto__$jscomp$214$$ = $APP.$cljs$core$_chunked_first$$($s__80316__$2_temp__5823__auto__$jscomp$512$$), $size__5627__auto__$jscomp$214$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$1008_c__5626__auto__$jscomp$214$$), $b__80318_queue$jscomp$12$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$214$$);
              a: {
                for (var $i__80317$jscomp$inline_4703$$ = 0;;) {
                  if ($i__80317$jscomp$inline_4703$$ < $size__5627__auto__$jscomp$214$$) {
                    var $queue$jscomp$inline_4704_x$jscomp$inline_6804$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$1008_c__5626__auto__$jscomp$214$$, $i__80317$jscomp$inline_4703$$), $b$jscomp$inline_6803$$ = $b__80318_queue$jscomp$12$$;
                    $queue$jscomp$inline_4704_x$jscomp$inline_6804$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1396$option$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$172$value$$, $queue$jscomp$inline_4704_x$jscomp$inline_6804$$], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($queue$jscomp$inline_4704_x$jscomp$inline_6804$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
                    1, [$APP.$cljs$cst$70$key$$, $queue$jscomp$inline_4704_x$jscomp$inline_6804$$], null));
                    $b$jscomp$inline_6803$$.add($queue$jscomp$inline_4704_x$jscomp$inline_6804$$);
                    $i__80317$jscomp$inline_4703$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$1008_c__5626__auto__$jscomp$214$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$1008_c__5626__auto__$jscomp$214$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$1008_c__5626__auto__$jscomp$214$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80318_queue$jscomp$12$$), $sensei$frontend$admin$workers$queue_selector_$_iter__80315$$($APP.$cljs$core$_chunked_rest$$($s__80316__$2_temp__5823__auto__$jscomp$512$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80318_queue$jscomp$12$$), null);
            }
            $b__80318_queue$jscomp$12$$ = $APP.$cljs$core$first$$($s__80316__$2_temp__5823__auto__$jscomp$512$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1396$option$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$172$value$$, $b__80318_queue$jscomp$12$$], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__80318_queue$jscomp$12$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__80318_queue$jscomp$12$$], 
            null)), $sensei$frontend$admin$workers$queue_selector_$_iter__80315$$($APP.$cljs$core$rest$$($s__80316__$2_temp__5823__auto__$jscomp$512$$)));
          }
          return null;
        }
      }, null, null);
    }($all_queues$jscomp$1$$);
  }()], null);
}, $sensei$frontend$admin$workers$select_queue$$ = function() {
  var $queue$jscomp$14$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5781$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_selected_queue$$], null)));
  $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["target queue", $queue$jscomp$14$$]));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$836$label$$, "Select queue:"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$workers$queue_selector$$, $queue$jscomp$14$$, function($p1__80320_SHARP_$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5779$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_set_selected_queue$$, $p1__80320_SHARP_$$], null));
  }], null)], null);
}, $sensei$frontend$admin$workers$min_max_str$$ = function($p__80321_start_node$jscomp$1$$) {
  var $end_node$jscomp$1_map__80322__$1$$ = $APP.$cljs$core$__destructure_map$$($p__80321_start_node$jscomp$1$$);
  $p__80321_start_node$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($end_node$jscomp$1_map__80322__$1$$, $APP.$cljs$cst$1018$start_node$$);
  $end_node$jscomp$1_map__80322__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($end_node$jscomp$1_map__80322__$1$$, $APP.$cljs$cst$3018$end_node$$);
  return " (" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($p__80321_start_node$jscomp$1$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($end_node$jscomp$1_map__80322__$1$$ - 1) + ")";
}, $sensei$frontend$admin$workers$show_board_checkbox$$ = function() {
  var $show_board_QMARK_$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1057$preference$$, $cljs$cst$5783$admin_worker_show_board_QMARK_$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$checkbox$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$836$label$$, "Show board?", $APP.$cljs$cst$172$value$$, $show_board_QMARK_$$, $APP.$cljs$cst$933$on_change$$, function($value$jscomp$407$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1417$set_preference$$, $cljs$cst$5783$admin_worker_show_board_QMARK_$$, $value$jscomp$407$$], null));
  }], null)], null);
}, $sensei$frontend$admin$workers$show_job_details_checkbox$$ = function() {
  var $show_job_details_QMARK_$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1057$preference$$, $cljs$cst$5784$admin_worker_show_job_details_QMARK_$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$checkbox$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$836$label$$, "Show job details?", $APP.$cljs$cst$172$value$$, $show_job_details_QMARK_$$, $APP.$cljs$cst$933$on_change$$, function($value$jscomp$408$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1417$set_preference$$, $cljs$cst$5784$admin_worker_show_job_details_QMARK_$$, $value$jscomp$408$$], null));
  }], null)], null);
}, $sensei$frontend$admin$workers$workers$$ = function() {
  var $queues_by_game$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5769$worker_queues_by_game$$], null))), $queue_names$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5768$worker_queue_names$$], 
  null))), $show_board_QMARK_$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1057$preference$$, $cljs$cst$5783$admin_worker_show_board_QMARK_$$], null))), $show_job_details_QMARK_$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 
  5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1057$preference$$, $cljs$cst$5784$admin_worker_show_job_details_QMARK_$$], null))), $target$jscomp$110$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5781$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_selected_queue$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5785$div_DOT_worker_table$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$workers$show_board_checkbox$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$workers$show_job_details_checkbox$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$workers$select_queue$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5620$div_DOT_css_table$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5786$div_DOT_tr_DOT_thead$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$], 
  null), $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
    return function $sensei$frontend$admin$workers$workers_$_iter__80328$$($s__80329$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__80329__$2_temp__5823__auto__$jscomp$513$$ = $APP.$cljs$core$seq$$($s__80329$$);
          if ($s__80329__$2_temp__5823__auto__$jscomp$513$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80329__$2_temp__5823__auto__$jscomp$513$$)) {
              var $JSCompiler_inline_result$jscomp$1009_c__5626__auto__$jscomp$215$$ = $APP.$cljs$core$_chunked_first$$($s__80329__$2_temp__5823__auto__$jscomp$513$$), $size__5627__auto__$jscomp$215$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$1009_c__5626__auto__$jscomp$215$$), $b__80331_q$jscomp$39$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$215$$);
              a: {
                for (var $i__80330$jscomp$inline_4706$$ = 0;;) {
                  if ($i__80330$jscomp$inline_4706$$ < $size__5627__auto__$jscomp$215$$) {
                    var $q$jscomp$inline_4707_x$jscomp$inline_6807$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$1009_c__5626__auto__$jscomp$215$$, $i__80330$jscomp$inline_4706$$), $b$jscomp$inline_6806$$ = $b__80331_q$jscomp$39$$;
                    $q$jscomp$inline_4707_x$jscomp$inline_6807$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5787$div_DOT_th_GT_div_DOT_rotate$$, $q$jscomp$inline_4707_x$jscomp$inline_6807$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $q$jscomp$inline_4707_x$jscomp$inline_6807$$], null));
                    $b$jscomp$inline_6806$$.add($q$jscomp$inline_4707_x$jscomp$inline_6807$$);
                    $i__80330$jscomp$inline_4706$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$1009_c__5626__auto__$jscomp$215$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$1009_c__5626__auto__$jscomp$215$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$1009_c__5626__auto__$jscomp$215$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80331_q$jscomp$39$$), $sensei$frontend$admin$workers$workers_$_iter__80328$$($APP.$cljs$core$_chunked_rest$$($s__80329__$2_temp__5823__auto__$jscomp$513$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80331_q$jscomp$39$$), null);
            }
            $b__80331_q$jscomp$39$$ = $APP.$cljs$core$first$$($s__80329__$2_temp__5823__auto__$jscomp$513$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5787$div_DOT_th_GT_div_DOT_rotate$$, $b__80331_q$jscomp$39$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__80331_q$jscomp$39$$], null)), $sensei$frontend$admin$workers$workers_$_iter__80328$$($APP.$cljs$core$rest$$($s__80329__$2_temp__5823__auto__$jscomp$513$$)));
          }
          return null;
        }
      }, null, null);
    }($queue_names$$);
  }())], null), $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
    return function $sensei$frontend$admin$workers$workers_$_iter__80332$$($s__80333$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$514$$ = $APP.$cljs$core$seq$$($s__80333$$);
          if ($temp__5823__auto__$jscomp$514$$) {
            var $s__80333__$2$$ = $temp__5823__auto__$jscomp$514$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80333__$2$$)) {
              var $c__5626__auto__$jscomp$216$$ = $APP.$cljs$core$_chunked_first$$($s__80333__$2$$), $size__5627__auto__$jscomp$216$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$216$$), $b__80335$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$216$$);
              return function() {
                for (var $i__80334$$ = 0;;) {
                  if ($i__80334$$ < $size__5627__auto__$jscomp$216$$) {
                    var $vec__80336$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$216$$, $i__80334$$), $game_id$jscomp$493$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__80336$$, 0, null), $jobs$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__80336$$, 1, null);
                    $APP.$cljs$core$chunk_append$$($b__80335$$, function() {
                      var $game_uid$jscomp$197$$ = $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$first$$($jobs$jscomp$10$$), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1, 0, $APP.$cljs$cst$722$uid$$], null)), $game$jscomp$47$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                      [$APP.$cljs$cst$1502$upload$$, $game_uid$jscomp$197$$, $game_id$jscomp$493$$], null)));
                      return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5621$div_DOT_tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, $APP.$cljs$core$truth_$$($show_board_QMARK_$jscomp$1$$) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$game_list$view$single_game_table$$, $game_uid$jscomp$197$$, 
                      $game_id$jscomp$493$$], null) : new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$players$player_names$$, $APP.$cljs$cst$1497$sgf_info$$.$cljs$core$IFn$_invoke$arity$1$($game$jscomp$47$$), null], null)], null), $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
                        return function($i__80334$jscomp$1$$, $game_uid$jscomp$198$$, $game$jscomp$48$$, $vec__80336$jscomp$1$$, $game_id$jscomp$494$$, $jobs$jscomp$11$$, $c__5626__auto__$jscomp$217$$, $size__5627__auto__$jscomp$217$$, $b__80335$jscomp$1$$, $s__80333__$2$jscomp$1$$, $temp__5823__auto__$jscomp$515$$, $queues_by_game$jscomp$1$$, $queue_names$jscomp$1$$, $show_board_QMARK_$jscomp$2$$, $show_job_details_QMARK_$jscomp$2$$, $target$jscomp$111$$) {
                          return function $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80343$$($s__80344$$) {
                            return new $APP.$cljs$core$LazySeq$$(null, function($i__80334$jscomp$2$$, $game_uid$jscomp$199$$, $game$jscomp$49$$, $vec__80336$jscomp$2$$, $game_id$jscomp$495$$, $jobs$jscomp$12$$, $c__5626__auto__$jscomp$218$$, $size__5627__auto__$jscomp$218$$, $b__80335$jscomp$2$$, $s__80333__$2$jscomp$2$$, $temp__5823__auto__$jscomp$516$$, $queues_by_game$jscomp$2$$, $queue_names$jscomp$2$$, $show_board_QMARK_$jscomp$3$$, $show_job_details_QMARK_$jscomp$3$$, $target$jscomp$112$$) {
                              return function() {
                                for (;;) {
                                  var $temp__5823__auto____$1$jscomp$88$$ = $APP.$cljs$core$seq$$($s__80344$$);
                                  if ($temp__5823__auto____$1$jscomp$88$$) {
                                    var $s__80344__$2$$ = $temp__5823__auto____$1$jscomp$88$$;
                                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80344__$2$$)) {
                                      var $c__5626__auto____$1$jscomp$23$$ = $APP.$cljs$core$_chunked_first$$($s__80344__$2$$), $size__5627__auto____$1$jscomp$23$$ = $APP.$cljs$core$count$$($c__5626__auto____$1$jscomp$23$$), $b__80346$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$23$$);
                                      return function() {
                                        for (var $i__80345$$ = 0;;) {
                                          if ($i__80345$$ < $size__5627__auto____$1$jscomp$23$$) {
                                            var $q$jscomp$42$$ = $APP.$cljs$core$_nth$$($c__5626__auto____$1$jscomp$23$$, $i__80345$$);
                                            $APP.$cljs$core$chunk_append$$($b__80346$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, function() {
                                              var $q_jobs$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$cst$466$priority$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($jobs$jscomp$12$$, $q$jscomp$42$$));
                                              return $APP.$cljs$core$truth_$$($show_job_details_QMARK_$jscomp$3$$) ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5788$div_DOT_mx_1$$, $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
                                                return function($i__80345$jscomp$1$$, $i__80334$jscomp$3$$, $q_jobs$jscomp$1$$, $q$jscomp$43$$, $c__5626__auto____$1$jscomp$24$$, $size__5627__auto____$1$jscomp$24$$, $b__80346$jscomp$1$$, $s__80344__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$89$$, $game_uid$jscomp$200$$, $game$jscomp$50$$, $vec__80336$jscomp$3$$, $game_id$jscomp$496$$, $jobs$jscomp$13$$, $c__5626__auto__$jscomp$219$$, $size__5627__auto__$jscomp$219$$, $b__80335$jscomp$3$$, $s__80333__$2$jscomp$3$$, 
                                                $temp__5823__auto__$jscomp$517$$, $queues_by_game$jscomp$3$$, $queue_names$jscomp$3$$, $show_board_QMARK_$jscomp$4$$, $show_job_details_QMARK_$jscomp$4$$, $target$jscomp$113$$) {
                                                  return function $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80343_$_iter__80349$$($s__80350$$) {
                                                    return new $APP.$cljs$core$LazySeq$$(null, function($i__80345$jscomp$2$$, $i__80334$jscomp$4$$, $q_jobs$jscomp$2$$, $q$jscomp$44$$, $c__5626__auto____$1$jscomp$25$$, $size__5627__auto____$1$jscomp$25$$, $b__80346$jscomp$2$$, $s__80344__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$90$$, $game_uid$jscomp$201$$, $game$jscomp$51$$, $vec__80336$jscomp$4$$, $game_id$jscomp$497$$, $jobs$jscomp$14$$, $c__5626__auto__$jscomp$220$$, $size__5627__auto__$jscomp$220$$, 
                                                    $b__80335$jscomp$4$$, $s__80333__$2$jscomp$4$$, $temp__5823__auto__$jscomp$518$$, $queues_by_game$jscomp$4$$, $queue_names$jscomp$4$$, $show_board_QMARK_$jscomp$5$$, $show_job_details_QMARK_$jscomp$5$$, $target$jscomp$114$$) {
                                                      return function() {
                                                        for (;;) {
                                                          var $temp__5823__auto____$2$jscomp$9$$ = $APP.$cljs$core$seq$$($s__80350$$);
                                                          if ($temp__5823__auto____$2$jscomp$9$$) {
                                                            var $s__80350__$2$$ = $temp__5823__auto____$2$jscomp$9$$;
                                                            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80350__$2$$)) {
                                                              var $c__5626__auto____$2$jscomp$1$$ = $APP.$cljs$core$_chunked_first$$($s__80350__$2$$), $size__5627__auto____$2$jscomp$1$$ = $APP.$cljs$core$count$$($c__5626__auto____$2$jscomp$1$$), $b__80352$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$2$jscomp$1$$);
                                                              return function() {
                                                                for (var $i__80351$$ = 0;;) {
                                                                  if ($i__80351$$ < $size__5627__auto____$2$jscomp$1$$) {
                                                                    var $map__80354$$ = $APP.$cljs$core$_nth$$($c__5626__auto____$2$jscomp$1$$, $i__80351$$), $map__80354__$1$$ = $APP.$cljs$core$__destructure_map$$($map__80354$$), $job$jscomp$11$$ = $map__80354__$1$$, $error_count$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80354__$1$$, $cljs$cst$5777$error_count$$);
                                                                    $APP.$cljs$core$chunk_append$$($b__80352$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($target$jscomp$114$$) ? $APP.$cljs$core$not_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$114$$, 
                                                                    $q$jscomp$44$$) : $target$jscomp$114$$) ? function() {
                                                                      $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["target", $target$jscomp$114$$]));
                                                                      return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($i__80351$jscomp$1$$, $i__80345$jscomp$3$$, $i__80334$jscomp$5$$, $map__80354$jscomp$1$$, $map__80354__$1$jscomp$1$$, $job$jscomp$12$$, $error_count$jscomp$2$$, $c__5626__auto____$2$jscomp$2$$, $size__5627__auto____$2$jscomp$2$$, $b__80352$jscomp$1$$, $s__80350__$2$jscomp$1$$, $temp__5823__auto____$2$jscomp$10$$, $q_jobs$jscomp$3$$, 
                                                                      $q$jscomp$45$$, $c__5626__auto____$1$jscomp$26$$, $size__5627__auto____$1$jscomp$26$$, $b__80346$jscomp$3$$, $s__80344__$2$jscomp$3$$, $temp__5823__auto____$1$jscomp$91$$, $game_uid$jscomp$202$$, $game$jscomp$52$$, $vec__80336$jscomp$5$$, $game_id$jscomp$498$$, $jobs$jscomp$15$$, $c__5626__auto__$jscomp$221$$, $size__5627__auto__$jscomp$221$$, $b__80335$jscomp$5$$, $s__80333__$2$jscomp$5$$, $temp__5823__auto__$jscomp$519$$, $queues_by_game$jscomp$5$$, 
                                                                      $queue_names$jscomp$5$$, $show_board_QMARK_$jscomp$6$$, $show_job_details_QMARK_$jscomp$6$$, $target$jscomp$115$$) {
                                                                        return function() {
                                                                          $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["click", $q$jscomp$45$$, $target$jscomp$115$$]));
                                                                          return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$115$$, $APP.$cljs$cst$702$done$$) ? $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5778$mark_done$$, $job$jscomp$12$$, $q$jscomp$45$$], null)) : $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                                          [$cljs$cst$5775$move_job$$, $job$jscomp$12$$, $q$jscomp$45$$, $target$jscomp$115$$], null));
                                                                        };
                                                                      }($i__80351$$, $i__80345$jscomp$2$$, $i__80334$jscomp$4$$, $map__80354$$, $map__80354__$1$$, $job$jscomp$11$$, $error_count$jscomp$1$$, $c__5626__auto____$2$jscomp$1$$, $size__5627__auto____$2$jscomp$1$$, $b__80352$$, $s__80350__$2$$, $temp__5823__auto____$2$jscomp$9$$, $q_jobs$jscomp$2$$, $q$jscomp$44$$, $c__5626__auto____$1$jscomp$25$$, $size__5627__auto____$1$jscomp$25$$, $b__80346$jscomp$2$$, $s__80344__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$90$$, 
                                                                      $game_uid$jscomp$201$$, $game$jscomp$51$$, $vec__80336$jscomp$4$$, $game_id$jscomp$497$$, $jobs$jscomp$14$$, $c__5626__auto__$jscomp$220$$, $size__5627__auto__$jscomp$220$$, $b__80335$jscomp$4$$, $s__80333__$2$jscomp$4$$, $temp__5823__auto__$jscomp$518$$, $queues_by_game$jscomp$4$$, $queue_names$jscomp$4$$, $show_board_QMARK_$jscomp$5$$, $show_job_details_QMARK_$jscomp$5$$, $target$jscomp$114$$), $APP.$cljs$cst$68$class$$, "clickable-job"], 
                                                                      null);
                                                                    }() : null, $sensei$frontend$admin$workers$min_max_str$$($job$jscomp$11$$)], null), $error_count$jscomp$1$$ > 0 ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5789$div_DOT_text_danger$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$821$on_click$$, function($i__80351$jscomp$2$$, $i__80345$jscomp$4$$, $i__80334$jscomp$6$$, $map__80354$jscomp$2$$, $map__80354__$1$jscomp$2$$, 
                                                                    $job$jscomp$13$$, $error_count$jscomp$3$$, $c__5626__auto____$2$jscomp$3$$, $size__5627__auto____$2$jscomp$3$$, $b__80352$jscomp$2$$, $s__80350__$2$jscomp$2$$, $temp__5823__auto____$2$jscomp$11$$, $q_jobs$jscomp$4$$, $q$jscomp$46$$) {
                                                                      return function() {
                                                                        return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5776$reset_error_count$$, $job$jscomp$13$$, $q$jscomp$46$$], null));
                                                                      };
                                                                    }($i__80351$$, $i__80345$jscomp$2$$, $i__80334$jscomp$4$$, $map__80354$$, $map__80354__$1$$, $job$jscomp$11$$, $error_count$jscomp$1$$, $c__5626__auto____$2$jscomp$1$$, $size__5627__auto____$2$jscomp$1$$, $b__80352$$, $s__80350__$2$$, $temp__5823__auto____$2$jscomp$9$$, $q_jobs$jscomp$2$$, $q$jscomp$44$$, $c__5626__auto____$1$jscomp$25$$, $size__5627__auto____$1$jscomp$25$$, $b__80346$jscomp$2$$, $s__80344__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$90$$, 
                                                                    $game_uid$jscomp$201$$, $game$jscomp$51$$, $vec__80336$jscomp$4$$, $game_id$jscomp$497$$, $jobs$jscomp$14$$, $c__5626__auto__$jscomp$220$$, $size__5627__auto__$jscomp$220$$, $b__80335$jscomp$4$$, $s__80333__$2$jscomp$4$$, $temp__5823__auto__$jscomp$518$$, $queues_by_game$jscomp$4$$, $queue_names$jscomp$4$$, $show_board_QMARK_$jscomp$5$$, $show_job_details_QMARK_$jscomp$5$$, $target$jscomp$114$$), $APP.$cljs$cst$68$class$$, "clickable-job", 
                                                                    $APP.$cljs$cst$840$title$$, "Click to reset!"], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error_count$jscomp$1$$) + " errors"], null) : null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$11$$)], null)));
                                                                    $i__80351$$ += 1;
                                                                  } else {
                                                                    return !0;
                                                                  }
                                                                }
                                                              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80352$$), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80343_$_iter__80349$$($APP.$cljs$core$_chunked_rest$$($s__80350__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80352$$), null);
                                                            }
                                                            var $map__80355$$ = $APP.$cljs$core$first$$($s__80350__$2$$), $map__80355__$1$$ = $APP.$cljs$core$__destructure_map$$($map__80355$$), $job$jscomp$10$$ = $map__80355__$1$$, $error_count$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80355__$1$$, $cljs$cst$5777$error_count$$);
                                                            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($target$jscomp$114$$) ? $APP.$cljs$core$not_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$114$$, 
                                                            $q$jscomp$44$$) : $target$jscomp$114$$) ? function() {
                                                              $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["target", $target$jscomp$114$$]));
                                                              return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($i__80345$jscomp$5$$, $i__80334$jscomp$7$$, $map__80355$jscomp$1$$, $map__80355__$1$jscomp$1$$, $job$jscomp$14$$, $error_count$jscomp$4$$, $s__80350__$2$jscomp$3$$, $temp__5823__auto____$2$jscomp$12$$, $q_jobs$jscomp$5$$, $q$jscomp$47$$, $c__5626__auto____$1$jscomp$28$$, $size__5627__auto____$1$jscomp$28$$, $b__80346$jscomp$5$$, $s__80344__$2$jscomp$5$$, 
                                                              $temp__5823__auto____$1$jscomp$93$$, $game_uid$jscomp$204$$, $game$jscomp$54$$, $vec__80336$jscomp$7$$, $game_id$jscomp$500$$, $jobs$jscomp$17$$, $c__5626__auto__$jscomp$223$$, $size__5627__auto__$jscomp$223$$, $b__80335$jscomp$7$$, $s__80333__$2$jscomp$7$$, $temp__5823__auto__$jscomp$521$$, $queues_by_game$jscomp$7$$, $queue_names$jscomp$7$$, $show_board_QMARK_$jscomp$8$$, $show_job_details_QMARK_$jscomp$8$$, $target$jscomp$117$$) {
                                                                return function() {
                                                                  $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["click", $q$jscomp$47$$, $target$jscomp$117$$]));
                                                                  return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$117$$, $APP.$cljs$cst$702$done$$) ? $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5778$mark_done$$, $job$jscomp$14$$, $q$jscomp$47$$], null)) : $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                                  [$cljs$cst$5775$move_job$$, $job$jscomp$14$$, $q$jscomp$47$$, $target$jscomp$117$$], null));
                                                                };
                                                              }($i__80345$jscomp$2$$, $i__80334$jscomp$4$$, $map__80355$$, $map__80355__$1$$, $job$jscomp$10$$, $error_count$$, $s__80350__$2$$, $temp__5823__auto____$2$jscomp$9$$, $q_jobs$jscomp$2$$, $q$jscomp$44$$, $c__5626__auto____$1$jscomp$25$$, $size__5627__auto____$1$jscomp$25$$, $b__80346$jscomp$2$$, $s__80344__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$90$$, $game_uid$jscomp$201$$, $game$jscomp$51$$, $vec__80336$jscomp$4$$, $game_id$jscomp$497$$, 
                                                              $jobs$jscomp$14$$, $c__5626__auto__$jscomp$220$$, $size__5627__auto__$jscomp$220$$, $b__80335$jscomp$4$$, $s__80333__$2$jscomp$4$$, $temp__5823__auto__$jscomp$518$$, $queues_by_game$jscomp$4$$, $queue_names$jscomp$4$$, $show_board_QMARK_$jscomp$5$$, $show_job_details_QMARK_$jscomp$5$$, $target$jscomp$114$$), $APP.$cljs$cst$68$class$$, "clickable-job"], null);
                                                            }() : null, $sensei$frontend$admin$workers$min_max_str$$($job$jscomp$10$$)], null), $error_count$$ > 0 ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5789$div_DOT_text_danger$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$821$on_click$$, function($i__80345$jscomp$6$$, $i__80334$jscomp$8$$, $map__80355$jscomp$2$$, $map__80355__$1$jscomp$2$$, $job$jscomp$15$$, 
                                                            $error_count$jscomp$5$$, $s__80350__$2$jscomp$4$$, $temp__5823__auto____$2$jscomp$13$$, $q_jobs$jscomp$6$$, $q$jscomp$48$$) {
                                                              return function() {
                                                                return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5776$reset_error_count$$, $job$jscomp$15$$, $q$jscomp$48$$], null));
                                                              };
                                                            }($i__80345$jscomp$2$$, $i__80334$jscomp$4$$, $map__80355$$, $map__80355__$1$$, $job$jscomp$10$$, $error_count$$, $s__80350__$2$$, $temp__5823__auto____$2$jscomp$9$$, $q_jobs$jscomp$2$$, $q$jscomp$44$$, $c__5626__auto____$1$jscomp$25$$, $size__5627__auto____$1$jscomp$25$$, $b__80346$jscomp$2$$, $s__80344__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$90$$, $game_uid$jscomp$201$$, $game$jscomp$51$$, $vec__80336$jscomp$4$$, $game_id$jscomp$497$$, 
                                                            $jobs$jscomp$14$$, $c__5626__auto__$jscomp$220$$, $size__5627__auto__$jscomp$220$$, $b__80335$jscomp$4$$, $s__80333__$2$jscomp$4$$, $temp__5823__auto__$jscomp$518$$, $queues_by_game$jscomp$4$$, $queue_names$jscomp$4$$, $show_board_QMARK_$jscomp$5$$, $show_job_details_QMARK_$jscomp$5$$, $target$jscomp$114$$), $APP.$cljs$cst$68$class$$, "clickable-job", $APP.$cljs$cst$840$title$$, "Click to reset!"], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error_count$$) + 
                                                            " errors"], null) : null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$10$$)], null)), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80343_$_iter__80349$$($APP.$cljs$core$rest$$($s__80350__$2$$)));
                                                          }
                                                          return null;
                                                        }
                                                      };
                                                    }($i__80345$jscomp$1$$, $i__80334$jscomp$3$$, $q_jobs$jscomp$1$$, $q$jscomp$43$$, $c__5626__auto____$1$jscomp$24$$, $size__5627__auto____$1$jscomp$24$$, $b__80346$jscomp$1$$, $s__80344__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$89$$, $game_uid$jscomp$200$$, $game$jscomp$50$$, $vec__80336$jscomp$3$$, $game_id$jscomp$496$$, $jobs$jscomp$13$$, $c__5626__auto__$jscomp$219$$, $size__5627__auto__$jscomp$219$$, $b__80335$jscomp$3$$, $s__80333__$2$jscomp$3$$, 
                                                    $temp__5823__auto__$jscomp$517$$, $queues_by_game$jscomp$3$$, $queue_names$jscomp$3$$, $show_board_QMARK_$jscomp$4$$, $show_job_details_QMARK_$jscomp$4$$, $target$jscomp$113$$), null, null);
                                                  };
                                                }($i__80345$$, $i__80334$jscomp$2$$, $q_jobs$$, $q$jscomp$42$$, $c__5626__auto____$1$jscomp$23$$, $size__5627__auto____$1$jscomp$23$$, $b__80346$$, $s__80344__$2$$, $temp__5823__auto____$1$jscomp$88$$, $game_uid$jscomp$199$$, $game$jscomp$49$$, $vec__80336$jscomp$2$$, $game_id$jscomp$495$$, $jobs$jscomp$12$$, $c__5626__auto__$jscomp$218$$, $size__5627__auto__$jscomp$218$$, $b__80335$jscomp$2$$, $s__80333__$2$jscomp$2$$, $temp__5823__auto__$jscomp$516$$, 
                                                $queues_by_game$jscomp$2$$, $queue_names$jscomp$2$$, $show_board_QMARK_$jscomp$3$$, $show_job_details_QMARK_$jscomp$3$$, $target$jscomp$112$$)($q_jobs$$);
                                              }())], null) : new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5790$div_DOT_text_center$$, $APP.$cljs$core$count$$($q_jobs$$)], null);
                                            }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $q$jscomp$42$$], null)));
                                            $i__80345$$ += 1;
                                          } else {
                                            return !0;
                                          }
                                        }
                                      }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80346$$), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80343$$($APP.$cljs$core$_chunked_rest$$($s__80344__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80346$$), null);
                                    }
                                    var $q$jscomp$41$$ = $APP.$cljs$core$first$$($s__80344__$2$$);
                                    return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, function() {
                                      var $q_jobs$jscomp$7$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$cst$466$priority$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($jobs$jscomp$12$$, $q$jscomp$41$$));
                                      return $APP.$cljs$core$truth_$$($show_job_details_QMARK_$jscomp$3$$) ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5788$div_DOT_mx_1$$, $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
                                        return function($i__80334$jscomp$9$$, $q_jobs$jscomp$8$$, $q$jscomp$49$$, $s__80344__$2$jscomp$7$$, $temp__5823__auto____$1$jscomp$95$$, $game_uid$jscomp$206$$, $game$jscomp$56$$, $vec__80336$jscomp$9$$, $game_id$jscomp$502$$, $jobs$jscomp$19$$, $c__5626__auto__$jscomp$225$$, $size__5627__auto__$jscomp$225$$, $b__80335$jscomp$9$$, $s__80333__$2$jscomp$9$$, $temp__5823__auto__$jscomp$523$$, $queues_by_game$jscomp$9$$, $queue_names$jscomp$9$$, $show_board_QMARK_$jscomp$10$$, 
                                        $show_job_details_QMARK_$jscomp$10$$, $target$jscomp$119$$) {
                                          return function $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80343_$_iter__80356$$($s__80357$$) {
                                            return new $APP.$cljs$core$LazySeq$$(null, function($i__80334$jscomp$10$$, $q_jobs$jscomp$9$$, $q$jscomp$50$$, $s__80344__$2$jscomp$8$$, $temp__5823__auto____$1$jscomp$96$$, $game_uid$jscomp$207$$, $game$jscomp$57$$, $vec__80336$jscomp$10$$, $game_id$jscomp$503$$, $jobs$jscomp$20$$, $c__5626__auto__$jscomp$226$$, $size__5627__auto__$jscomp$226$$, $b__80335$jscomp$10$$, $s__80333__$2$jscomp$10$$, $temp__5823__auto__$jscomp$524$$, $queues_by_game$jscomp$10$$, 
                                            $queue_names$jscomp$10$$, $show_board_QMARK_$jscomp$11$$, $show_job_details_QMARK_$jscomp$11$$, $target$jscomp$120$$) {
                                              return function() {
                                                for (;;) {
                                                  var $temp__5823__auto____$2$jscomp$14$$ = $APP.$cljs$core$seq$$($s__80357$$);
                                                  if ($temp__5823__auto____$2$jscomp$14$$) {
                                                    var $s__80357__$2$$ = $temp__5823__auto____$2$jscomp$14$$;
                                                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80357__$2$$)) {
                                                      var $c__5626__auto____$1$jscomp$30$$ = $APP.$cljs$core$_chunked_first$$($s__80357__$2$$), $size__5627__auto____$1$jscomp$30$$ = $APP.$cljs$core$count$$($c__5626__auto____$1$jscomp$30$$), $b__80359$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$30$$);
                                                      return function() {
                                                        for (var $i__80358$$ = 0;;) {
                                                          if ($i__80358$$ < $size__5627__auto____$1$jscomp$30$$) {
                                                            var $map__80360$$ = $APP.$cljs$core$_nth$$($c__5626__auto____$1$jscomp$30$$, $i__80358$$), $map__80360__$1$$ = $APP.$cljs$core$__destructure_map$$($map__80360$$), $job$jscomp$17$$ = $map__80360__$1$$, $error_count$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80360__$1$$, $cljs$cst$5777$error_count$$);
                                                            $APP.$cljs$core$chunk_append$$($b__80359$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($target$jscomp$120$$) ? $APP.$cljs$core$not_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$120$$, 
                                                            $q$jscomp$50$$) : $target$jscomp$120$$) ? function() {
                                                              $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["target", $target$jscomp$120$$]));
                                                              return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($i__80358$jscomp$1$$, $i__80334$jscomp$11$$, $map__80360$jscomp$1$$, $map__80360__$1$jscomp$1$$, $job$jscomp$18$$, $error_count$jscomp$8$$, $c__5626__auto____$1$jscomp$31$$, $size__5627__auto____$1$jscomp$31$$, $b__80359$jscomp$1$$, $s__80357__$2$jscomp$1$$, $temp__5823__auto____$2$jscomp$15$$, $q_jobs$jscomp$10$$, $q$jscomp$51$$, $s__80344__$2$jscomp$9$$, 
                                                              $temp__5823__auto____$1$jscomp$97$$, $game_uid$jscomp$208$$, $game$jscomp$58$$, $vec__80336$jscomp$11$$, $game_id$jscomp$504$$, $jobs$jscomp$21$$, $c__5626__auto__$jscomp$227$$, $size__5627__auto__$jscomp$227$$, $b__80335$jscomp$11$$, $s__80333__$2$jscomp$11$$, $temp__5823__auto__$jscomp$525$$, $queues_by_game$jscomp$11$$, $queue_names$jscomp$11$$, $show_board_QMARK_$jscomp$12$$, $show_job_details_QMARK_$jscomp$12$$, $target$jscomp$121$$) {
                                                                return function() {
                                                                  $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["click", $q$jscomp$51$$, $target$jscomp$121$$]));
                                                                  return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$121$$, $APP.$cljs$cst$702$done$$) ? $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5778$mark_done$$, $job$jscomp$18$$, $q$jscomp$51$$], null)) : $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                                  [$cljs$cst$5775$move_job$$, $job$jscomp$18$$, $q$jscomp$51$$, $target$jscomp$121$$], null));
                                                                };
                                                              }($i__80358$$, $i__80334$jscomp$10$$, $map__80360$$, $map__80360__$1$$, $job$jscomp$17$$, $error_count$jscomp$7$$, $c__5626__auto____$1$jscomp$30$$, $size__5627__auto____$1$jscomp$30$$, $b__80359$$, $s__80357__$2$$, $temp__5823__auto____$2$jscomp$14$$, $q_jobs$jscomp$9$$, $q$jscomp$50$$, $s__80344__$2$jscomp$8$$, $temp__5823__auto____$1$jscomp$96$$, $game_uid$jscomp$207$$, $game$jscomp$57$$, $vec__80336$jscomp$10$$, $game_id$jscomp$503$$, 
                                                              $jobs$jscomp$20$$, $c__5626__auto__$jscomp$226$$, $size__5627__auto__$jscomp$226$$, $b__80335$jscomp$10$$, $s__80333__$2$jscomp$10$$, $temp__5823__auto__$jscomp$524$$, $queues_by_game$jscomp$10$$, $queue_names$jscomp$10$$, $show_board_QMARK_$jscomp$11$$, $show_job_details_QMARK_$jscomp$11$$, $target$jscomp$120$$), $APP.$cljs$cst$68$class$$, "clickable-job"], null);
                                                            }() : null, $sensei$frontend$admin$workers$min_max_str$$($job$jscomp$17$$)], null), $error_count$jscomp$7$$ > 0 ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5789$div_DOT_text_danger$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$821$on_click$$, function($i__80358$jscomp$2$$, $i__80334$jscomp$12$$, $map__80360$jscomp$2$$, $map__80360__$1$jscomp$2$$, $job$jscomp$19$$, 
                                                            $error_count$jscomp$9$$, $c__5626__auto____$1$jscomp$32$$, $size__5627__auto____$1$jscomp$32$$, $b__80359$jscomp$2$$, $s__80357__$2$jscomp$2$$, $temp__5823__auto____$2$jscomp$16$$, $q_jobs$jscomp$11$$, $q$jscomp$52$$) {
                                                              return function() {
                                                                return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5776$reset_error_count$$, $job$jscomp$19$$, $q$jscomp$52$$], null));
                                                              };
                                                            }($i__80358$$, $i__80334$jscomp$10$$, $map__80360$$, $map__80360__$1$$, $job$jscomp$17$$, $error_count$jscomp$7$$, $c__5626__auto____$1$jscomp$30$$, $size__5627__auto____$1$jscomp$30$$, $b__80359$$, $s__80357__$2$$, $temp__5823__auto____$2$jscomp$14$$, $q_jobs$jscomp$9$$, $q$jscomp$50$$, $s__80344__$2$jscomp$8$$, $temp__5823__auto____$1$jscomp$96$$, $game_uid$jscomp$207$$, $game$jscomp$57$$, $vec__80336$jscomp$10$$, $game_id$jscomp$503$$, 
                                                            $jobs$jscomp$20$$, $c__5626__auto__$jscomp$226$$, $size__5627__auto__$jscomp$226$$, $b__80335$jscomp$10$$, $s__80333__$2$jscomp$10$$, $temp__5823__auto__$jscomp$524$$, $queues_by_game$jscomp$10$$, $queue_names$jscomp$10$$, $show_board_QMARK_$jscomp$11$$, $show_job_details_QMARK_$jscomp$11$$, $target$jscomp$120$$), $APP.$cljs$cst$68$class$$, "clickable-job", $APP.$cljs$cst$840$title$$, "Click to reset!"], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error_count$jscomp$7$$) + 
                                                            " errors"], null) : null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$17$$)], null)));
                                                            $i__80358$$ += 1;
                                                          } else {
                                                            return !0;
                                                          }
                                                        }
                                                      }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80359$$), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80343_$_iter__80356$$($APP.$cljs$core$_chunked_rest$$($s__80357__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80359$$), null);
                                                    }
                                                    var $map__80373$$ = $APP.$cljs$core$first$$($s__80357__$2$$), $map__80373__$1$$ = $APP.$cljs$core$__destructure_map$$($map__80373$$), $job$jscomp$16$$ = $map__80373__$1$$, $error_count$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80373__$1$$, $cljs$cst$5777$error_count$$);
                                                    return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($target$jscomp$120$$) ? $APP.$cljs$core$not_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$120$$, 
                                                    $q$jscomp$50$$) : $target$jscomp$120$$) ? function() {
                                                      $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["target", $target$jscomp$120$$]));
                                                      return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($i__80334$jscomp$13$$, $map__80373$jscomp$1$$, $map__80373__$1$jscomp$1$$, $job$jscomp$20$$, $error_count$jscomp$10$$, $s__80357__$2$jscomp$3$$, $temp__5823__auto____$2$jscomp$17$$, $q_jobs$jscomp$12$$, $q$jscomp$53$$, $s__80344__$2$jscomp$11$$, $temp__5823__auto____$1$jscomp$99$$, $game_uid$jscomp$210$$, $game$jscomp$60$$, $vec__80336$jscomp$13$$, 
                                                      $game_id$jscomp$506$$, $jobs$jscomp$23$$, $c__5626__auto__$jscomp$229$$, $size__5627__auto__$jscomp$229$$, $b__80335$jscomp$13$$, $s__80333__$2$jscomp$13$$, $temp__5823__auto__$jscomp$527$$, $queues_by_game$jscomp$13$$, $queue_names$jscomp$13$$, $show_board_QMARK_$jscomp$14$$, $show_job_details_QMARK_$jscomp$14$$, $target$jscomp$123$$) {
                                                        return function() {
                                                          $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["click", $q$jscomp$53$$, $target$jscomp$123$$]));
                                                          return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$123$$, $APP.$cljs$cst$702$done$$) ? $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5778$mark_done$$, $job$jscomp$20$$, $q$jscomp$53$$], null)) : $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                          [$cljs$cst$5775$move_job$$, $job$jscomp$20$$, $q$jscomp$53$$, $target$jscomp$123$$], null));
                                                        };
                                                      }($i__80334$jscomp$10$$, $map__80373$$, $map__80373__$1$$, $job$jscomp$16$$, $error_count$jscomp$6$$, $s__80357__$2$$, $temp__5823__auto____$2$jscomp$14$$, $q_jobs$jscomp$9$$, $q$jscomp$50$$, $s__80344__$2$jscomp$8$$, $temp__5823__auto____$1$jscomp$96$$, $game_uid$jscomp$207$$, $game$jscomp$57$$, $vec__80336$jscomp$10$$, $game_id$jscomp$503$$, $jobs$jscomp$20$$, $c__5626__auto__$jscomp$226$$, $size__5627__auto__$jscomp$226$$, $b__80335$jscomp$10$$, 
                                                      $s__80333__$2$jscomp$10$$, $temp__5823__auto__$jscomp$524$$, $queues_by_game$jscomp$10$$, $queue_names$jscomp$10$$, $show_board_QMARK_$jscomp$11$$, $show_job_details_QMARK_$jscomp$11$$, $target$jscomp$120$$), $APP.$cljs$cst$68$class$$, "clickable-job"], null);
                                                    }() : null, $sensei$frontend$admin$workers$min_max_str$$($job$jscomp$16$$)], null), $error_count$jscomp$6$$ > 0 ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5789$div_DOT_text_danger$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$821$on_click$$, function($i__80334$jscomp$14$$, $map__80373$jscomp$2$$, $map__80373__$1$jscomp$2$$, $job$jscomp$21$$, $error_count$jscomp$11$$, 
                                                    $s__80357__$2$jscomp$4$$, $temp__5823__auto____$2$jscomp$18$$, $q_jobs$jscomp$13$$, $q$jscomp$54$$) {
                                                      return function() {
                                                        return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5776$reset_error_count$$, $job$jscomp$21$$, $q$jscomp$54$$], null));
                                                      };
                                                    }($i__80334$jscomp$10$$, $map__80373$$, $map__80373__$1$$, $job$jscomp$16$$, $error_count$jscomp$6$$, $s__80357__$2$$, $temp__5823__auto____$2$jscomp$14$$, $q_jobs$jscomp$9$$, $q$jscomp$50$$, $s__80344__$2$jscomp$8$$, $temp__5823__auto____$1$jscomp$96$$, $game_uid$jscomp$207$$, $game$jscomp$57$$, $vec__80336$jscomp$10$$, $game_id$jscomp$503$$, $jobs$jscomp$20$$, $c__5626__auto__$jscomp$226$$, $size__5627__auto__$jscomp$226$$, $b__80335$jscomp$10$$, 
                                                    $s__80333__$2$jscomp$10$$, $temp__5823__auto__$jscomp$524$$, $queues_by_game$jscomp$10$$, $queue_names$jscomp$10$$, $show_board_QMARK_$jscomp$11$$, $show_job_details_QMARK_$jscomp$11$$, $target$jscomp$120$$), $APP.$cljs$cst$68$class$$, "clickable-job", $APP.$cljs$cst$840$title$$, "Click to reset!"], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error_count$jscomp$6$$) + " errors"], null) : null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
                                                    1, [$APP.$cljs$cst$70$key$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$16$$)], null)), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80343_$_iter__80356$$($APP.$cljs$core$rest$$($s__80357__$2$$)));
                                                  }
                                                  return null;
                                                }
                                              };
                                            }($i__80334$jscomp$9$$, $q_jobs$jscomp$8$$, $q$jscomp$49$$, $s__80344__$2$jscomp$7$$, $temp__5823__auto____$1$jscomp$95$$, $game_uid$jscomp$206$$, $game$jscomp$56$$, $vec__80336$jscomp$9$$, $game_id$jscomp$502$$, $jobs$jscomp$19$$, $c__5626__auto__$jscomp$225$$, $size__5627__auto__$jscomp$225$$, $b__80335$jscomp$9$$, $s__80333__$2$jscomp$9$$, $temp__5823__auto__$jscomp$523$$, $queues_by_game$jscomp$9$$, $queue_names$jscomp$9$$, $show_board_QMARK_$jscomp$10$$, 
                                            $show_job_details_QMARK_$jscomp$10$$, $target$jscomp$119$$), null, null);
                                          };
                                        }($i__80334$jscomp$2$$, $q_jobs$jscomp$7$$, $q$jscomp$41$$, $s__80344__$2$$, $temp__5823__auto____$1$jscomp$88$$, $game_uid$jscomp$199$$, $game$jscomp$49$$, $vec__80336$jscomp$2$$, $game_id$jscomp$495$$, $jobs$jscomp$12$$, $c__5626__auto__$jscomp$218$$, $size__5627__auto__$jscomp$218$$, $b__80335$jscomp$2$$, $s__80333__$2$jscomp$2$$, $temp__5823__auto__$jscomp$516$$, $queues_by_game$jscomp$2$$, $queue_names$jscomp$2$$, $show_board_QMARK_$jscomp$3$$, $show_job_details_QMARK_$jscomp$3$$, 
                                        $target$jscomp$112$$)($q_jobs$jscomp$7$$);
                                      }())], null) : new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5790$div_DOT_text_center$$, $APP.$cljs$core$count$$($q_jobs$jscomp$7$$)], null);
                                    }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $q$jscomp$41$$], null)), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80343$$($APP.$cljs$core$rest$$($s__80344__$2$$)));
                                  }
                                  return null;
                                }
                              };
                            }($i__80334$jscomp$1$$, $game_uid$jscomp$198$$, $game$jscomp$48$$, $vec__80336$jscomp$1$$, $game_id$jscomp$494$$, $jobs$jscomp$11$$, $c__5626__auto__$jscomp$217$$, $size__5627__auto__$jscomp$217$$, $b__80335$jscomp$1$$, $s__80333__$2$jscomp$1$$, $temp__5823__auto__$jscomp$515$$, $queues_by_game$jscomp$1$$, $queue_names$jscomp$1$$, $show_board_QMARK_$jscomp$2$$, $show_job_details_QMARK_$jscomp$2$$, $target$jscomp$111$$), null, null);
                          };
                        }($i__80334$$, $game_uid$jscomp$197$$, $game$jscomp$47$$, $vec__80336$$, $game_id$jscomp$493$$, $jobs$jscomp$10$$, $c__5626__auto__$jscomp$216$$, $size__5627__auto__$jscomp$216$$, $b__80335$$, $s__80333__$2$$, $temp__5823__auto__$jscomp$514$$, $queues_by_game$$, $queue_names$$, $show_board_QMARK_$jscomp$1$$, $show_job_details_QMARK_$jscomp$1$$, $target$jscomp$110$$)($queue_names$$);
                      }())], null);
                    }());
                    $i__80334$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80335$$), $sensei$frontend$admin$workers$workers_$_iter__80332$$($APP.$cljs$core$_chunked_rest$$($s__80333__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80335$$), null);
            }
            var $vec__80376$$ = $APP.$cljs$core$first$$($s__80333__$2$$), $game_id$jscomp$492$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__80376$$, 0, null), $jobs$jscomp$9$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__80376$$, 1, null);
            return $APP.$cljs$core$cons$$(function() {
              var $game_uid$jscomp$212$$ = $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$first$$($jobs$jscomp$9$$), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1, 0, $APP.$cljs$cst$722$uid$$], null)), $game$jscomp$62$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1502$upload$$, 
              $game_uid$jscomp$212$$, $game_id$jscomp$492$$], null)));
              return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5621$div_DOT_tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5622$div_DOT_th$$, $APP.$cljs$core$truth_$$($show_board_QMARK_$jscomp$1$$) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$game_list$view$single_game_table$$, $game_uid$jscomp$212$$, 
              $game_id$jscomp$492$$], null) : new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$players$player_names$$, $APP.$cljs$cst$1497$sgf_info$$.$cljs$core$IFn$_invoke$arity$1$($game$jscomp$62$$), null], null)], null), $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
                return function($game_uid$jscomp$213$$, $game$jscomp$63$$, $vec__80376$jscomp$1$$, $game_id$jscomp$508$$, $jobs$jscomp$25$$, $s__80333__$2$jscomp$15$$, $temp__5823__auto__$jscomp$529$$, $queues_by_game$jscomp$15$$, $queue_names$jscomp$15$$, $show_board_QMARK_$jscomp$16$$, $show_job_details_QMARK_$jscomp$16$$, $target$jscomp$125$$) {
                  return function $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80379$$($s__80380$$) {
                    return new $APP.$cljs$core$LazySeq$$(null, function() {
                      for (;;) {
                        var $temp__5823__auto____$1$jscomp$101$$ = $APP.$cljs$core$seq$$($s__80380$$);
                        if ($temp__5823__auto____$1$jscomp$101$$) {
                          var $s__80380__$2$$ = $temp__5823__auto____$1$jscomp$101$$;
                          if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80380__$2$$)) {
                            var $c__5626__auto__$jscomp$231$$ = $APP.$cljs$core$_chunked_first$$($s__80380__$2$$), $size__5627__auto__$jscomp$231$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$231$$), $b__80382$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$231$$);
                            return function() {
                              for (var $i__80381$$ = 0;;) {
                                if ($i__80381$$ < $size__5627__auto__$jscomp$231$$) {
                                  var $q$jscomp$56$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$231$$, $i__80381$$);
                                  $APP.$cljs$core$chunk_append$$($b__80382$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, function() {
                                    var $q_jobs$jscomp$14$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$cst$466$priority$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($jobs$jscomp$25$$, $q$jscomp$56$$));
                                    return $APP.$cljs$core$truth_$$($show_job_details_QMARK_$jscomp$16$$) ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5788$div_DOT_mx_1$$, $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
                                      return function($i__80381$jscomp$1$$, $q_jobs$jscomp$15$$, $q$jscomp$57$$, $c__5626__auto__$jscomp$232$$, $size__5627__auto__$jscomp$232$$, $b__80382$jscomp$1$$, $s__80380__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$102$$, $game_uid$jscomp$214$$, $game$jscomp$64$$, $vec__80376$jscomp$2$$, $game_id$jscomp$509$$, $jobs$jscomp$26$$, $s__80333__$2$jscomp$16$$, $temp__5823__auto__$jscomp$530$$, $queues_by_game$jscomp$16$$, $queue_names$jscomp$16$$, $show_board_QMARK_$jscomp$17$$, 
                                      $show_job_details_QMARK_$jscomp$17$$, $target$jscomp$126$$) {
                                        return function $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80379_$_iter__80383$$($s__80384$$) {
                                          return new $APP.$cljs$core$LazySeq$$(null, function($i__80381$jscomp$2$$, $q_jobs$jscomp$16$$, $q$jscomp$58$$, $c__5626__auto__$jscomp$233$$, $size__5627__auto__$jscomp$233$$, $b__80382$jscomp$2$$, $s__80380__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$103$$, $game_uid$jscomp$215$$, $game$jscomp$65$$, $vec__80376$jscomp$3$$, $game_id$jscomp$510$$, $jobs$jscomp$27$$, $s__80333__$2$jscomp$17$$, $temp__5823__auto__$jscomp$531$$, $queues_by_game$jscomp$17$$, 
                                          $queue_names$jscomp$17$$, $show_board_QMARK_$jscomp$18$$, $show_job_details_QMARK_$jscomp$18$$, $target$jscomp$127$$) {
                                            return function() {
                                              for (;;) {
                                                var $temp__5823__auto____$2$jscomp$19$$ = $APP.$cljs$core$seq$$($s__80384$$);
                                                if ($temp__5823__auto____$2$jscomp$19$$) {
                                                  var $s__80384__$2$$ = $temp__5823__auto____$2$jscomp$19$$;
                                                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80384__$2$$)) {
                                                    var $c__5626__auto____$1$jscomp$33$$ = $APP.$cljs$core$_chunked_first$$($s__80384__$2$$), $size__5627__auto____$1$jscomp$33$$ = $APP.$cljs$core$count$$($c__5626__auto____$1$jscomp$33$$), $b__80386$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$33$$);
                                                    return function() {
                                                      for (var $i__80385$$ = 0;;) {
                                                        if ($i__80385$$ < $size__5627__auto____$1$jscomp$33$$) {
                                                          var $map__80387$$ = $APP.$cljs$core$_nth$$($c__5626__auto____$1$jscomp$33$$, $i__80385$$), $map__80387__$1$$ = $APP.$cljs$core$__destructure_map$$($map__80387$$), $job$jscomp$23$$ = $map__80387__$1$$, $error_count$jscomp$13$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80387__$1$$, $cljs$cst$5777$error_count$$);
                                                          $APP.$cljs$core$chunk_append$$($b__80386$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($target$jscomp$127$$) ? $APP.$cljs$core$not_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$127$$, 
                                                          $q$jscomp$58$$) : $target$jscomp$127$$) ? function() {
                                                            $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["target", $target$jscomp$127$$]));
                                                            return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($i__80385$jscomp$1$$, $i__80381$jscomp$3$$, $map__80387$jscomp$1$$, $map__80387__$1$jscomp$1$$, $job$jscomp$24$$, $error_count$jscomp$14$$, $c__5626__auto____$1$jscomp$34$$, $size__5627__auto____$1$jscomp$34$$, $b__80386$jscomp$1$$, $s__80384__$2$jscomp$1$$, $temp__5823__auto____$2$jscomp$20$$, $q_jobs$jscomp$17$$, $q$jscomp$59$$, $c__5626__auto__$jscomp$234$$, 
                                                            $size__5627__auto__$jscomp$234$$, $b__80382$jscomp$3$$, $s__80380__$2$jscomp$3$$, $temp__5823__auto____$1$jscomp$104$$, $game_uid$jscomp$216$$, $game$jscomp$66$$, $vec__80376$jscomp$4$$, $game_id$jscomp$511$$, $jobs$jscomp$28$$, $s__80333__$2$jscomp$18$$, $temp__5823__auto__$jscomp$532$$, $queues_by_game$jscomp$18$$, $queue_names$jscomp$18$$, $show_board_QMARK_$jscomp$19$$, $show_job_details_QMARK_$jscomp$19$$, $target$jscomp$128$$) {
                                                              return function() {
                                                                $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["click", $q$jscomp$59$$, $target$jscomp$128$$]));
                                                                return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$128$$, $APP.$cljs$cst$702$done$$) ? $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5778$mark_done$$, $job$jscomp$24$$, $q$jscomp$59$$], null)) : $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                                [$cljs$cst$5775$move_job$$, $job$jscomp$24$$, $q$jscomp$59$$, $target$jscomp$128$$], null));
                                                              };
                                                            }($i__80385$$, $i__80381$jscomp$2$$, $map__80387$$, $map__80387__$1$$, $job$jscomp$23$$, $error_count$jscomp$13$$, $c__5626__auto____$1$jscomp$33$$, $size__5627__auto____$1$jscomp$33$$, $b__80386$$, $s__80384__$2$$, $temp__5823__auto____$2$jscomp$19$$, $q_jobs$jscomp$16$$, $q$jscomp$58$$, $c__5626__auto__$jscomp$233$$, $size__5627__auto__$jscomp$233$$, $b__80382$jscomp$2$$, $s__80380__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$103$$, 
                                                            $game_uid$jscomp$215$$, $game$jscomp$65$$, $vec__80376$jscomp$3$$, $game_id$jscomp$510$$, $jobs$jscomp$27$$, $s__80333__$2$jscomp$17$$, $temp__5823__auto__$jscomp$531$$, $queues_by_game$jscomp$17$$, $queue_names$jscomp$17$$, $show_board_QMARK_$jscomp$18$$, $show_job_details_QMARK_$jscomp$18$$, $target$jscomp$127$$), $APP.$cljs$cst$68$class$$, "clickable-job"], null);
                                                          }() : null, $sensei$frontend$admin$workers$min_max_str$$($job$jscomp$23$$)], null), $error_count$jscomp$13$$ > 0 ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5789$div_DOT_text_danger$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$821$on_click$$, function($i__80385$jscomp$2$$, $i__80381$jscomp$4$$, $map__80387$jscomp$2$$, $map__80387__$1$jscomp$2$$, $job$jscomp$25$$, 
                                                          $error_count$jscomp$15$$, $c__5626__auto____$1$jscomp$35$$, $size__5627__auto____$1$jscomp$35$$, $b__80386$jscomp$2$$, $s__80384__$2$jscomp$2$$, $temp__5823__auto____$2$jscomp$21$$, $q_jobs$jscomp$18$$, $q$jscomp$60$$) {
                                                            return function() {
                                                              return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5776$reset_error_count$$, $job$jscomp$25$$, $q$jscomp$60$$], null));
                                                            };
                                                          }($i__80385$$, $i__80381$jscomp$2$$, $map__80387$$, $map__80387__$1$$, $job$jscomp$23$$, $error_count$jscomp$13$$, $c__5626__auto____$1$jscomp$33$$, $size__5627__auto____$1$jscomp$33$$, $b__80386$$, $s__80384__$2$$, $temp__5823__auto____$2$jscomp$19$$, $q_jobs$jscomp$16$$, $q$jscomp$58$$, $c__5626__auto__$jscomp$233$$, $size__5627__auto__$jscomp$233$$, $b__80382$jscomp$2$$, $s__80380__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$103$$, $game_uid$jscomp$215$$, 
                                                          $game$jscomp$65$$, $vec__80376$jscomp$3$$, $game_id$jscomp$510$$, $jobs$jscomp$27$$, $s__80333__$2$jscomp$17$$, $temp__5823__auto__$jscomp$531$$, $queues_by_game$jscomp$17$$, $queue_names$jscomp$17$$, $show_board_QMARK_$jscomp$18$$, $show_job_details_QMARK_$jscomp$18$$, $target$jscomp$127$$), $APP.$cljs$cst$68$class$$, "clickable-job", $APP.$cljs$cst$840$title$$, "Click to reset!"], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error_count$jscomp$13$$) + 
                                                          " errors"], null) : null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$23$$)], null)));
                                                          $i__80385$$ += 1;
                                                        } else {
                                                          return !0;
                                                        }
                                                      }
                                                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80386$$), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80379_$_iter__80383$$($APP.$cljs$core$_chunked_rest$$($s__80384__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80386$$), null);
                                                  }
                                                  var $map__80388$$ = $APP.$cljs$core$first$$($s__80384__$2$$), $map__80388__$1$$ = $APP.$cljs$core$__destructure_map$$($map__80388$$), $job$jscomp$22$$ = $map__80388__$1$$, $error_count$jscomp$12$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80388__$1$$, $cljs$cst$5777$error_count$$);
                                                  return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($target$jscomp$127$$) ? $APP.$cljs$core$not_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$127$$, 
                                                  $q$jscomp$58$$) : $target$jscomp$127$$) ? function() {
                                                    $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["target", $target$jscomp$127$$]));
                                                    return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($i__80381$jscomp$5$$, $map__80388$jscomp$1$$, $map__80388__$1$jscomp$1$$, $job$jscomp$26$$, $error_count$jscomp$16$$, $s__80384__$2$jscomp$3$$, $temp__5823__auto____$2$jscomp$22$$, $q_jobs$jscomp$19$$, $q$jscomp$61$$, $c__5626__auto__$jscomp$236$$, $size__5627__auto__$jscomp$236$$, $b__80382$jscomp$5$$, $s__80380__$2$jscomp$5$$, $temp__5823__auto____$1$jscomp$106$$, 
                                                    $game_uid$jscomp$218$$, $game$jscomp$68$$, $vec__80376$jscomp$6$$, $game_id$jscomp$513$$, $jobs$jscomp$30$$, $s__80333__$2$jscomp$20$$, $temp__5823__auto__$jscomp$534$$, $queues_by_game$jscomp$20$$, $queue_names$jscomp$20$$, $show_board_QMARK_$jscomp$21$$, $show_job_details_QMARK_$jscomp$21$$, $target$jscomp$130$$) {
                                                      return function() {
                                                        $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["click", $q$jscomp$61$$, $target$jscomp$130$$]));
                                                        return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$130$$, $APP.$cljs$cst$702$done$$) ? $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5778$mark_done$$, $job$jscomp$26$$, $q$jscomp$61$$], null)) : $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                        [$cljs$cst$5775$move_job$$, $job$jscomp$26$$, $q$jscomp$61$$, $target$jscomp$130$$], null));
                                                      };
                                                    }($i__80381$jscomp$2$$, $map__80388$$, $map__80388__$1$$, $job$jscomp$22$$, $error_count$jscomp$12$$, $s__80384__$2$$, $temp__5823__auto____$2$jscomp$19$$, $q_jobs$jscomp$16$$, $q$jscomp$58$$, $c__5626__auto__$jscomp$233$$, $size__5627__auto__$jscomp$233$$, $b__80382$jscomp$2$$, $s__80380__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$103$$, $game_uid$jscomp$215$$, $game$jscomp$65$$, $vec__80376$jscomp$3$$, $game_id$jscomp$510$$, $jobs$jscomp$27$$, 
                                                    $s__80333__$2$jscomp$17$$, $temp__5823__auto__$jscomp$531$$, $queues_by_game$jscomp$17$$, $queue_names$jscomp$17$$, $show_board_QMARK_$jscomp$18$$, $show_job_details_QMARK_$jscomp$18$$, $target$jscomp$127$$), $APP.$cljs$cst$68$class$$, "clickable-job"], null);
                                                  }() : null, $sensei$frontend$admin$workers$min_max_str$$($job$jscomp$22$$)], null), $error_count$jscomp$12$$ > 0 ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5789$div_DOT_text_danger$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$821$on_click$$, function($i__80381$jscomp$6$$, $map__80388$jscomp$2$$, $map__80388__$1$jscomp$2$$, $job$jscomp$27$$, $error_count$jscomp$17$$, 
                                                  $s__80384__$2$jscomp$4$$, $temp__5823__auto____$2$jscomp$23$$, $q_jobs$jscomp$20$$, $q$jscomp$62$$) {
                                                    return function() {
                                                      return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5776$reset_error_count$$, $job$jscomp$27$$, $q$jscomp$62$$], null));
                                                    };
                                                  }($i__80381$jscomp$2$$, $map__80388$$, $map__80388__$1$$, $job$jscomp$22$$, $error_count$jscomp$12$$, $s__80384__$2$$, $temp__5823__auto____$2$jscomp$19$$, $q_jobs$jscomp$16$$, $q$jscomp$58$$, $c__5626__auto__$jscomp$233$$, $size__5627__auto__$jscomp$233$$, $b__80382$jscomp$2$$, $s__80380__$2$jscomp$2$$, $temp__5823__auto____$1$jscomp$103$$, $game_uid$jscomp$215$$, $game$jscomp$65$$, $vec__80376$jscomp$3$$, $game_id$jscomp$510$$, $jobs$jscomp$27$$, 
                                                  $s__80333__$2$jscomp$17$$, $temp__5823__auto__$jscomp$531$$, $queues_by_game$jscomp$17$$, $queue_names$jscomp$17$$, $show_board_QMARK_$jscomp$18$$, $show_job_details_QMARK_$jscomp$18$$, $target$jscomp$127$$), $APP.$cljs$cst$68$class$$, "clickable-job", $APP.$cljs$cst$840$title$$, "Click to reset!"], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error_count$jscomp$12$$) + " errors"], null) : null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
                                                  1, [$APP.$cljs$cst$70$key$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$22$$)], null)), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80379_$_iter__80383$$($APP.$cljs$core$rest$$($s__80384__$2$$)));
                                                }
                                                return null;
                                              }
                                            };
                                          }($i__80381$jscomp$1$$, $q_jobs$jscomp$15$$, $q$jscomp$57$$, $c__5626__auto__$jscomp$232$$, $size__5627__auto__$jscomp$232$$, $b__80382$jscomp$1$$, $s__80380__$2$jscomp$1$$, $temp__5823__auto____$1$jscomp$102$$, $game_uid$jscomp$214$$, $game$jscomp$64$$, $vec__80376$jscomp$2$$, $game_id$jscomp$509$$, $jobs$jscomp$26$$, $s__80333__$2$jscomp$16$$, $temp__5823__auto__$jscomp$530$$, $queues_by_game$jscomp$16$$, $queue_names$jscomp$16$$, $show_board_QMARK_$jscomp$17$$, 
                                          $show_job_details_QMARK_$jscomp$17$$, $target$jscomp$126$$), null, null);
                                        };
                                      }($i__80381$$, $q_jobs$jscomp$14$$, $q$jscomp$56$$, $c__5626__auto__$jscomp$231$$, $size__5627__auto__$jscomp$231$$, $b__80382$$, $s__80380__$2$$, $temp__5823__auto____$1$jscomp$101$$, $game_uid$jscomp$213$$, $game$jscomp$63$$, $vec__80376$jscomp$1$$, $game_id$jscomp$508$$, $jobs$jscomp$25$$, $s__80333__$2$jscomp$15$$, $temp__5823__auto__$jscomp$529$$, $queues_by_game$jscomp$15$$, $queue_names$jscomp$15$$, $show_board_QMARK_$jscomp$16$$, $show_job_details_QMARK_$jscomp$16$$, 
                                      $target$jscomp$125$$)($q_jobs$jscomp$14$$);
                                    }())], null) : new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5790$div_DOT_text_center$$, $APP.$cljs$core$count$$($q_jobs$jscomp$14$$)], null);
                                  }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $q$jscomp$56$$], null)));
                                  $i__80381$$ += 1;
                                } else {
                                  return !0;
                                }
                              }
                            }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80382$$), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80379$$($APP.$cljs$core$_chunked_rest$$($s__80380__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80382$$), null);
                          }
                          var $q$jscomp$55$$ = $APP.$cljs$core$first$$($s__80380__$2$$);
                          return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5623$div_DOT_td$$, function() {
                            var $q_jobs$jscomp$21$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$cst$466$priority$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($jobs$jscomp$25$$, $q$jscomp$55$$));
                            return $APP.$cljs$core$truth_$$($show_job_details_QMARK_$jscomp$16$$) ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5788$div_DOT_mx_1$$, $APP.$cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$(function() {
                              return function($q_jobs$jscomp$22$$, $q$jscomp$63$$, $s__80380__$2$jscomp$7$$, $temp__5823__auto____$1$jscomp$108$$, $game_uid$jscomp$220$$, $game$jscomp$70$$, $vec__80376$jscomp$8$$, $game_id$jscomp$515$$, $jobs$jscomp$32$$, $s__80333__$2$jscomp$22$$, $temp__5823__auto__$jscomp$536$$, $queues_by_game$jscomp$22$$, $queue_names$jscomp$22$$, $show_board_QMARK_$jscomp$23$$, $show_job_details_QMARK_$jscomp$23$$, $target$jscomp$132$$) {
                                return function $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80379_$_iter__80389$$($s__80390$$) {
                                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                                    for (;;) {
                                      var $temp__5823__auto____$2$jscomp$24$$ = $APP.$cljs$core$seq$$($s__80390$$);
                                      if ($temp__5823__auto____$2$jscomp$24$$) {
                                        var $s__80390__$2$$ = $temp__5823__auto____$2$jscomp$24$$;
                                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80390__$2$$)) {
                                          var $c__5626__auto__$jscomp$238$$ = $APP.$cljs$core$_chunked_first$$($s__80390__$2$$), $size__5627__auto__$jscomp$238$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$238$$), $b__80392$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$238$$);
                                          return function() {
                                            for (var $i__80391$$ = 0;;) {
                                              if ($i__80391$$ < $size__5627__auto__$jscomp$238$$) {
                                                var $map__80393$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$238$$, $i__80391$$), $map__80393__$1$$ = $APP.$cljs$core$__destructure_map$$($map__80393$$), $job$jscomp$29$$ = $map__80393__$1$$, $error_count$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80393__$1$$, $cljs$cst$5777$error_count$$);
                                                $APP.$cljs$core$chunk_append$$($b__80392$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($target$jscomp$132$$) ? $APP.$cljs$core$not_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$132$$, 
                                                $q$jscomp$63$$) : $target$jscomp$132$$) ? function() {
                                                  $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["target", $target$jscomp$132$$]));
                                                  return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($i__80391$jscomp$1$$, $map__80393$jscomp$1$$, $map__80393__$1$jscomp$1$$, $job$jscomp$30$$, $error_count$jscomp$20$$, $c__5626__auto__$jscomp$239$$, $size__5627__auto__$jscomp$239$$, $b__80392$jscomp$1$$, $s__80390__$2$jscomp$1$$, $temp__5823__auto____$2$jscomp$25$$, $q_jobs$jscomp$23$$, $q$jscomp$64$$, $s__80380__$2$jscomp$8$$, $temp__5823__auto____$1$jscomp$109$$, 
                                                  $game_uid$jscomp$221$$, $game$jscomp$71$$, $vec__80376$jscomp$9$$, $game_id$jscomp$516$$, $jobs$jscomp$33$$, $s__80333__$2$jscomp$23$$, $temp__5823__auto__$jscomp$537$$, $queues_by_game$jscomp$23$$, $queue_names$jscomp$23$$, $show_board_QMARK_$jscomp$24$$, $show_job_details_QMARK_$jscomp$24$$, $target$jscomp$133$$) {
                                                    return function() {
                                                      $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["click", $q$jscomp$64$$, $target$jscomp$133$$]));
                                                      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$133$$, $APP.$cljs$cst$702$done$$) ? $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5778$mark_done$$, $job$jscomp$30$$, $q$jscomp$64$$], null)) : $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
                                                      [$cljs$cst$5775$move_job$$, $job$jscomp$30$$, $q$jscomp$64$$, $target$jscomp$133$$], null));
                                                    };
                                                  }($i__80391$$, $map__80393$$, $map__80393__$1$$, $job$jscomp$29$$, $error_count$jscomp$19$$, $c__5626__auto__$jscomp$238$$, $size__5627__auto__$jscomp$238$$, $b__80392$$, $s__80390__$2$$, $temp__5823__auto____$2$jscomp$24$$, $q_jobs$jscomp$22$$, $q$jscomp$63$$, $s__80380__$2$jscomp$7$$, $temp__5823__auto____$1$jscomp$108$$, $game_uid$jscomp$220$$, $game$jscomp$70$$, $vec__80376$jscomp$8$$, $game_id$jscomp$515$$, $jobs$jscomp$32$$, $s__80333__$2$jscomp$22$$, 
                                                  $temp__5823__auto__$jscomp$536$$, $queues_by_game$jscomp$22$$, $queue_names$jscomp$22$$, $show_board_QMARK_$jscomp$23$$, $show_job_details_QMARK_$jscomp$23$$, $target$jscomp$132$$), $APP.$cljs$cst$68$class$$, "clickable-job"], null);
                                                }() : null, $sensei$frontend$admin$workers$min_max_str$$($job$jscomp$29$$)], null), $error_count$jscomp$19$$ > 0 ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5789$div_DOT_text_danger$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$821$on_click$$, function($i__80391$jscomp$2$$, $map__80393$jscomp$2$$, $map__80393__$1$jscomp$2$$, $job$jscomp$31$$, $error_count$jscomp$21$$, 
                                                $c__5626__auto__$jscomp$240$$, $size__5627__auto__$jscomp$240$$, $b__80392$jscomp$2$$, $s__80390__$2$jscomp$2$$, $temp__5823__auto____$2$jscomp$26$$, $q_jobs$jscomp$24$$, $q$jscomp$65$$) {
                                                  return function() {
                                                    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5776$reset_error_count$$, $job$jscomp$31$$, $q$jscomp$65$$], null));
                                                  };
                                                }($i__80391$$, $map__80393$$, $map__80393__$1$$, $job$jscomp$29$$, $error_count$jscomp$19$$, $c__5626__auto__$jscomp$238$$, $size__5627__auto__$jscomp$238$$, $b__80392$$, $s__80390__$2$$, $temp__5823__auto____$2$jscomp$24$$, $q_jobs$jscomp$22$$, $q$jscomp$63$$, $s__80380__$2$jscomp$7$$, $temp__5823__auto____$1$jscomp$108$$, $game_uid$jscomp$220$$, $game$jscomp$70$$, $vec__80376$jscomp$8$$, $game_id$jscomp$515$$, $jobs$jscomp$32$$, $s__80333__$2$jscomp$22$$, 
                                                $temp__5823__auto__$jscomp$536$$, $queues_by_game$jscomp$22$$, $queue_names$jscomp$22$$, $show_board_QMARK_$jscomp$23$$, $show_job_details_QMARK_$jscomp$23$$, $target$jscomp$132$$), $APP.$cljs$cst$68$class$$, "clickable-job", $APP.$cljs$cst$840$title$$, "Click to reset!"], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error_count$jscomp$19$$) + " errors"], null) : null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, 
                                                $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$29$$)], null)));
                                                $i__80391$$ += 1;
                                              } else {
                                                return !0;
                                              }
                                            }
                                          }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80392$$), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80379_$_iter__80389$$($APP.$cljs$core$_chunked_rest$$($s__80390__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80392$$), null);
                                        }
                                        var $map__80394$$ = $APP.$cljs$core$first$$($s__80390__$2$$), $map__80394__$1$$ = $APP.$cljs$core$__destructure_map$$($map__80394$$), $job$jscomp$28$$ = $map__80394__$1$$, $error_count$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80394__$1$$, $cljs$cst$5777$error_count$$);
                                        return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($target$jscomp$132$$) ? $APP.$cljs$core$not_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$132$$, 
                                        $q$jscomp$63$$) : $target$jscomp$132$$) ? function() {
                                          $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["target", $target$jscomp$132$$]));
                                          return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$821$on_click$$, function($map__80394$jscomp$1$$, $map__80394__$1$jscomp$1$$, $job$jscomp$32$$, $error_count$jscomp$22$$, $s__80390__$2$jscomp$3$$, $temp__5823__auto____$2$jscomp$27$$, $q_jobs$jscomp$25$$, $q$jscomp$66$$, $s__80380__$2$jscomp$10$$, $temp__5823__auto____$1$jscomp$111$$, $game_uid$jscomp$223$$, $game$jscomp$73$$, $vec__80376$jscomp$11$$, $game_id$jscomp$518$$, $jobs$jscomp$35$$, 
                                          $s__80333__$2$jscomp$25$$, $temp__5823__auto__$jscomp$539$$, $queues_by_game$jscomp$25$$, $queue_names$jscomp$25$$, $show_board_QMARK_$jscomp$26$$, $show_job_details_QMARK_$jscomp$26$$, $target$jscomp$135$$) {
                                            return function() {
                                              $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["click", $q$jscomp$66$$, $target$jscomp$135$$]));
                                              return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($target$jscomp$135$$, $APP.$cljs$cst$702$done$$) ? $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5778$mark_done$$, $job$jscomp$32$$, $q$jscomp$66$$], null)) : $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5775$move_job$$, 
                                              $job$jscomp$32$$, $q$jscomp$66$$, $target$jscomp$135$$], null));
                                            };
                                          }($map__80394$$, $map__80394__$1$$, $job$jscomp$28$$, $error_count$jscomp$18$$, $s__80390__$2$$, $temp__5823__auto____$2$jscomp$24$$, $q_jobs$jscomp$22$$, $q$jscomp$63$$, $s__80380__$2$jscomp$7$$, $temp__5823__auto____$1$jscomp$108$$, $game_uid$jscomp$220$$, $game$jscomp$70$$, $vec__80376$jscomp$8$$, $game_id$jscomp$515$$, $jobs$jscomp$32$$, $s__80333__$2$jscomp$22$$, $temp__5823__auto__$jscomp$536$$, $queues_by_game$jscomp$22$$, $queue_names$jscomp$22$$, 
                                          $show_board_QMARK_$jscomp$23$$, $show_job_details_QMARK_$jscomp$23$$, $target$jscomp$132$$), $APP.$cljs$cst$68$class$$, "clickable-job"], null);
                                        }() : null, $sensei$frontend$admin$workers$min_max_str$$($job$jscomp$28$$)], null), $error_count$jscomp$18$$ > 0 ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5789$div_DOT_text_danger$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$821$on_click$$, function($map__80394$jscomp$2$$, $map__80394__$1$jscomp$2$$, $job$jscomp$33$$, $error_count$jscomp$23$$, $s__80390__$2$jscomp$4$$, 
                                        $temp__5823__auto____$2$jscomp$28$$, $q_jobs$jscomp$26$$, $q$jscomp$67$$) {
                                          return function() {
                                            return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5776$reset_error_count$$, $job$jscomp$33$$, $q$jscomp$67$$], null));
                                          };
                                        }($map__80394$$, $map__80394__$1$$, $job$jscomp$28$$, $error_count$jscomp$18$$, $s__80390__$2$$, $temp__5823__auto____$2$jscomp$24$$, $q_jobs$jscomp$22$$, $q$jscomp$63$$, $s__80380__$2$jscomp$7$$, $temp__5823__auto____$1$jscomp$108$$, $game_uid$jscomp$220$$, $game$jscomp$70$$, $vec__80376$jscomp$8$$, $game_id$jscomp$515$$, $jobs$jscomp$32$$, $s__80333__$2$jscomp$22$$, $temp__5823__auto__$jscomp$536$$, $queues_by_game$jscomp$22$$, $queue_names$jscomp$22$$, $show_board_QMARK_$jscomp$23$$, 
                                        $show_job_details_QMARK_$jscomp$23$$, $target$jscomp$132$$), $APP.$cljs$cst$68$class$$, "clickable-job", $APP.$cljs$cst$840$title$$, "Click to reset!"], null), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error_count$jscomp$18$$) + " errors"], null) : null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$28$$)], null)), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80379_$_iter__80389$$($APP.$cljs$core$rest$$($s__80390__$2$$)));
                                      }
                                      return null;
                                    }
                                  }, null, null);
                                };
                              }($q_jobs$jscomp$21$$, $q$jscomp$55$$, $s__80380__$2$$, $temp__5823__auto____$1$jscomp$101$$, $game_uid$jscomp$213$$, $game$jscomp$63$$, $vec__80376$jscomp$1$$, $game_id$jscomp$508$$, $jobs$jscomp$25$$, $s__80333__$2$jscomp$15$$, $temp__5823__auto__$jscomp$529$$, $queues_by_game$jscomp$15$$, $queue_names$jscomp$15$$, $show_board_QMARK_$jscomp$16$$, $show_job_details_QMARK_$jscomp$16$$, $target$jscomp$125$$)($q_jobs$jscomp$21$$);
                            }())], null) : new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5790$div_DOT_text_center$$, $APP.$cljs$core$count$$($q_jobs$jscomp$21$$)], null);
                          }()], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $q$jscomp$55$$], null)), $sensei$frontend$admin$workers$workers_$_iter__80332_$_iter__80379$$($APP.$cljs$core$rest$$($s__80380__$2$$)));
                        }
                        return null;
                      }
                    }, null, null);
                  };
                }($game_uid$jscomp$212$$, $game$jscomp$62$$, $vec__80376$$, $game_id$jscomp$492$$, $jobs$jscomp$9$$, $s__80333__$2$$, $temp__5823__auto__$jscomp$514$$, $queues_by_game$$, $queue_names$$, $show_board_QMARK_$jscomp$1$$, $show_job_details_QMARK_$jscomp$1$$, $target$jscomp$110$$)($queue_names$$);
              }())], null);
            }(), $sensei$frontend$admin$workers$workers_$_iter__80332$$($APP.$cljs$core$rest$$($s__80333__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($queues_by_game$$);
  }())], null)], null);
}, $sensei$frontend$admin$workers$main$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$workers$workers$$], null);
}, $sensei$frontend$admin$worker_errors$active_filter$$ = function() {
  var $temp__5823__auto__$jscomp$541$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5792$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filter_vm$$], null)));
  return $APP.$cljs$core$truth_$$($temp__5823__auto__$jscomp$541$$) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5793$div_DOT_d_flex_DOT_align_items_center_DOT_mb_4$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1773$h3$$, $temp__5823__auto__$jscomp$541$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3360$button_DOT_btn_DOT_btn_sm_DOT_btn_link$$, 
  new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5794$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_set_filter_vm$$, null], null));
  }], null), "Clear"], null)], null) : null;
}, $sensei$frontend$admin$worker_errors$event_graph$$ = function($chart_data$jscomp$13_event$jscomp$119$$) {
  $chart_data$jscomp$13_event$jscomp$119$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5795$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_event_chart_data$$, $chart_data$jscomp$13_event$jscomp$119$$], null));
  return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data$jscomp$13_event$jscomp$119$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data$jscomp$13_event$jscomp$119$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$worker_errors$chart_size$$, $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$worker_errors$colors$$, $APP.$cljs$cst$25$type$$, 
  $APP.$cljs$cst$302$line$$, $APP.$cljs$cst$4646$axis$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$1089$x$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$5410$timeseries$$], null), $APP.$cljs$cst$1090$y$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1359$min$$, 0, $APP.$cljs$cst$4749$padding$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1119$bottom$$, 0], null), $APP.$cljs$cst$25$type$$, 
  $APP.$cljs$cst$569$linear$$], null)], null)], null)], null) : null;
}, $sensei$frontend$admin$worker_errors$vm_events_table$$ = function($event$jscomp$120$$) {
  var $data$jscomp$309$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5796$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_total_count_by_vm$$, $event$jscomp$120$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2732$table_DOT_table_DOT_table_sm_DOT_table_striped$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1258$thead$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$2733$th$$, "VM"], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, "Count"], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1263$tbody$$, function() {
    return function $sensei$frontend$admin$worker_errors$vm_events_table_$_iter__71662$$($s__71663$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$542$$ = $APP.$cljs$core$seq$$($s__71663$$);
          if ($temp__5823__auto__$jscomp$542$$) {
            var $s__71663__$2$$ = $temp__5823__auto__$jscomp$542$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71663__$2$$)) {
              var $c__5626__auto__$jscomp$241$$ = $APP.$cljs$core$_chunked_first$$($s__71663__$2$$), $size__5627__auto__$jscomp$241$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$241$$), $b__71665$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$241$$);
              return function() {
                for (var $i__71664$$ = 0;;) {
                  if ($i__71664$$ < $size__5627__auto__$jscomp$241$$) {
                    var $vec__71667$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$241$$, $i__71664$$), $vm$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71667$$, 0, null), $count$jscomp$78$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71667$$, 1, null);
                    $APP.$cljs$core$chunk_append$$($b__71665$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $vm$jscomp$2$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, new $APP.$cljs$core$PersistentVector$$(null, 
                    3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3360$button_DOT_btn_DOT_btn_sm_DOT_btn_link$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function($i__71664$jscomp$1$$, $vec__71667$jscomp$1$$, $vm$jscomp$3$$) {
                      return function() {
                        return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5794$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_set_filter_vm$$, $vm$jscomp$3$$], null));
                      };
                    }($i__71664$$, $vec__71667$$, $vm$jscomp$2$$, $count$jscomp$78$$, $c__5626__auto__$jscomp$241$$, $size__5627__auto__$jscomp$241$$, $b__71665$$, $s__71663__$2$$, $temp__5823__auto__$jscomp$542$$, $data$jscomp$309$$)], null), "Focus"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $count$jscomp$78$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, 
                    $vm$jscomp$2$$], null)));
                    $i__71664$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71665$$), $sensei$frontend$admin$worker_errors$vm_events_table_$_iter__71662$$($APP.$cljs$core$_chunked_rest$$($s__71663__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71665$$), null);
            }
            var $vec__71674$$ = $APP.$cljs$core$first$$($s__71663__$2$$), $vm$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71674$$, 0, null), $count$jscomp$77$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__71674$$, 1, null);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $vm$jscomp$1$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, new $APP.$cljs$core$PersistentVector$$(null, 
            3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3360$button_DOT_btn_DOT_btn_sm_DOT_btn_link$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function($vec__71674$jscomp$1$$, $vm$jscomp$4$$) {
              return function() {
                return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5794$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_set_filter_vm$$, $vm$jscomp$4$$], null));
              };
            }($vec__71674$$, $vm$jscomp$1$$, $count$jscomp$77$$, $s__71663__$2$$, $temp__5823__auto__$jscomp$542$$, $data$jscomp$309$$)], null), "Focus"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $count$jscomp$77$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $vm$jscomp$1$$], null)), $sensei$frontend$admin$worker_errors$vm_events_table_$_iter__71662$$($APP.$cljs$core$rest$$($s__71663__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($data$jscomp$309$$);
  }()], null)], null);
}, $sensei$frontend$admin$view$link$$ = function($path$jscomp$167$$, $label$jscomp$73$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3144$a$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$805$href$$, $path$jscomp$167$$], null), $APP.$clojure$string$join$cljs$0core$0IFn$0_invoke$0arity$02$$(" ", $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$clojure$string$capitalize$$, $APP.$clojure$string$split$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$name$$($label$jscomp$73$$), 
  "-")))], null);
}, $sensei$frontend$admin$view$admin_page_link$$ = function($key$jscomp$361$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$view$link$$, "/admin/" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$name$$($key$jscomp$361$$)), $key$jscomp$361$$], null);
}, $sensei$frontend$admin$view$back_link$$ = function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5806$a_DOT_backlink$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$805$href$$, "/admin"], null), "Back"], null);
}, $sensei$frontend$admin$view$start_stop$$ = function($map__80421__$1_p__80420_page$jscomp$23_page__$1$$, $k$jscomp$462$$) {
  $map__80421__$1_p__80420_page$jscomp$23_page__$1$$ = $APP.$cljs$core$__destructure_map$$($map__80421__$1_p__80420_page$jscomp$23_page__$1$$);
  $map__80421__$1_p__80420_page$jscomp$23_page__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80421__$1_p__80420_page$jscomp$23_page__$1$$, $APP.$cljs$cst$1169$page$$);
  $map__80421__$1_p__80420_page$jscomp$23_page__$1$$ = $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($map__80421__$1_p__80420_page$jscomp$23_page__$1$$);
  $APP.$cljs$core$println$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["(start-stop)", $map__80421__$1_p__80420_page$jscomp$23_page__$1$$, $k$jscomp$462$$, $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($sensei$frontend$admin$view$admin_pages_start_stop$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$map__80421__$1_p__80420_page$jscomp$23_page__$1$$, $k$jscomp$462$$], null))]));
  return $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($sensei$frontend$admin$view$admin_pages_start_stop$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$map__80421__$1_p__80420_page$jscomp$23_page__$1$$, $k$jscomp$462$$], null));
}, $cljs$core$_STAR_$$ = function $cljs$core$_STAR_$$($var_args$jscomp$134$$) {
  switch(arguments.length) {
    case 0:
      return $cljs$core$_STAR_$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$_STAR_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$_STAR_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      for (var $args_arr__5901__auto__$jscomp$16_argseq__5902__auto__$jscomp$16$$ = [], $len__5876__auto___188790$$ = arguments.length, $i__5877__auto___188791$$ = 0;;) {
        if ($i__5877__auto___188791$$ < $len__5876__auto___188790$$) {
          $args_arr__5901__auto__$jscomp$16_argseq__5902__auto__$jscomp$16$$.push(arguments[$i__5877__auto___188791$$]), $i__5877__auto___188791$$ += 1;
        } else {
          break;
        }
      }
      $args_arr__5901__auto__$jscomp$16_argseq__5902__auto__$jscomp$16$$ = 2 < $args_arr__5901__auto__$jscomp$16_argseq__5902__auto__$jscomp$16$$.length ? new $APP.$cljs$core$IndexedSeq$$($args_arr__5901__auto__$jscomp$16_argseq__5902__auto__$jscomp$16$$.slice(2), 0, null) : null;
      return $cljs$core$_STAR_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], $args_arr__5901__auto__$jscomp$16_argseq__5902__auto__$jscomp$16$$);
  }
};
$cljs$core$_STAR_$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return 1;
};
$cljs$core$_STAR_$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$204$$) {
  return $x$jscomp$204$$;
};
$cljs$core$_STAR_$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$205$$, $y$jscomp$95$$) {
  return $x$jscomp$205$$ * $y$jscomp$95$$;
};
$cljs$core$_STAR_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($x$jscomp$206$$, $y$jscomp$96$$, $more$jscomp$4$$) {
  return $APP.$cljs$core$reduce$$.$cljs$core$IFn$_invoke$arity$3$($cljs$core$_STAR_$$, $x$jscomp$206$$ * $y$jscomp$96$$, $more$jscomp$4$$);
};
$cljs$core$_STAR_$$.$cljs$lang$applyTo$ = function($G__187089_seq187087$$) {
  var $G__187088$$ = $APP.$cljs$core$first$$($G__187089_seq187087$$), $seq187087__$1_seq187087__$2$$ = $APP.$cljs$core$next$$($G__187089_seq187087$$);
  $G__187089_seq187087$$ = $APP.$cljs$core$first$$($seq187087__$1_seq187087__$2$$);
  $seq187087__$1_seq187087__$2$$ = $APP.$cljs$core$next$$($seq187087__$1_seq187087__$2$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__187088$$, $G__187089_seq187087$$, $seq187087__$1_seq187087__$2$$);
};
$cljs$core$_STAR_$$.$cljs$lang$maxFixedArity$ = 2;
var $cljs$cst$5687$registrations$$ = new $APP.$cljs$core$Keyword$$(null, "registrations", "registrations", 1750245115), $cljs$cst$5634$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_set_logs_end_timestamp$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-logs", "set-logs-end-timestamp", "sensei.frontend.admin.worker-logs/set-logs-end-timestamp", 252123107), $cljs$cst$5795$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_event_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-errors", 
"event-chart-data", "sensei.frontend.admin.worker-errors/event-chart-data", -301832605), $cljs$cst$5730$sensei_DOT_frontend_DOT_admin_DOT_voucher_SLASH_vouchers$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher", "vouchers", "sensei.frontend.admin.voucher/vouchers", 569313014), $cljs$cst$5660$play_ai_stats$$ = new $APP.$cljs$core$Keyword$$(null, "play-ai-stats", "play-ai-stats", -722890498), $cljs$cst$5704$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_end_date$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-errors", 
"end-date", "sensei.frontend.admin.user-errors/end-date", -858604565), $cljs$cst$5729$valid_vouchers$$ = new $APP.$cljs$core$Keyword$$(null, "valid-vouchers", "valid-vouchers", 1411620428), $cljs$cst$5545$tutorial_visible$$ = new $APP.$cljs$core$Keyword$$(null, "tutorial-visible", "tutorial-visible", -1160851578), $cljs$cst$5676$td_GT_div_DOT_form_group_DOT_form_check$$ = new $APP.$cljs$core$Keyword$$(null, "td\x3ediv.form-group.form-check", "td\x3ediv.form-group.form-check", 1756477895), $cljs$cst$5746$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_voucher_filter$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", "set-voucher-filter", "sensei.frontend.admin.voucher-funnel/set-voucher-filter", 2092278529), $cljs$cst$5740$span_DOT_badge_DOT_rounded_pill_DOT_badge_selector_DOT_tag_DOT_m_0_DOT_d_flex_DOT_align_items_center$$ = new $APP.$cljs$core$Keyword$$(null, "span.badge.rounded-pill.badge-selector.tag.m-0.d-flex.align-items-center", "span.badge.rounded-pill.badge-selector.tag.m-0.d-flex.align-items-center", 918213421), $cljs$cst$5583$stayed_on_site_0$$ = 
new $APP.$cljs$core$Keyword$$(null, "stayed-on-site-0", "stayed-on-site-0", 223901047), $cljs$cst$5705$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_set_end_date_str$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-errors", "set-end-date-str", "sensei.frontend.admin.user-errors/set-end-date-str", -203696615), $cljs$cst$5631$sensei_DOT_frontend_DOT_admin_DOT_paypal_statistics_SLASH_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.paypal-statistics", "chart-data", 
"sensei.frontend.admin.paypal-statistics/chart-data", 1591976063), $cljs$cst$5675$td_GT_div_DOT_form_group_DOT_form_check_label$$ = new $APP.$cljs$core$Keyword$$(null, "td\x3ediv.form-group.form-check-label", "td\x3ediv.form-group.form-check-label", 248681205), $cljs$cst$5779$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_set_selected_queue$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.workers", "set-selected-queue", "sensei.frontend.admin.workers/set-selected-queue", 736218052), $cljs$cst$5755$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_selected_users$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", "selected-users", "sensei.frontend.admin.voucher-funnel/selected-users", -898866371), $cljs$cst$5608$time_by_worker$$ = new $APP.$cljs$core$Keyword$$(null, "time-by-worker", "time-by-worker", 1004605517), $cljs$cst$5738$div_DOT_d_flex_DOT_flex_wrap_DOT_discuss_page_selector$$ = new $APP.$cljs$core$Keyword$$(null, "div.d-flex.flex-wrap.discuss-page-selector", "div.d-flex.flex-wrap.discuss-page-selector", -350086121), $cljs$cst$5539$div_DOT_admin_form_row$$ = 
new $APP.$cljs$core$Keyword$$(null, "div.admin-form-row", "div.admin-form-row", -297103556), $cljs$cst$5683$pro_uploads$$ = new $APP.$cljs$core$Keyword$$(null, "pro-uploads", "pro-uploads", -905287727), $cljs$cst$5752$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_voucher_filter$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", "voucher-filter", "sensei.frontend.admin.voucher-funnel/voucher-filter", -579780305), $cljs$cst$5641$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_displayed_logs$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-logs", "displayed-logs", "sensei.frontend.admin.worker-logs/displayed-logs", 329709149), $cljs$cst$5593$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_ltv_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.life-time-value", "ltv-data", "sensei.frontend.admin.life-time-value/ltv-data", 1606471884), $cljs$cst$5685$total_pro_subscriptions$$ = new $APP.$cljs$core$Keyword$$(null, "total-pro-subscriptions", "total-pro-subscriptions", 
-1045451341), $cljs$cst$5518$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_stats_by_day$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.game-analysis", "stats-by-day", "sensei.frontend.admin.game-analysis/stats-by-day", -670991487), $cljs$cst$5563$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_stats$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "user-stats", "sensei.frontend.admin.funnel/user-stats", -164612813), $cljs$cst$5571$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_language$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "user-language", "sensei.frontend.admin.funnel/user-language", -78193858), $cljs$cst$5710$main_DOT_my_container_DOT_my_wrapper$$ = new $APP.$cljs$core$Keyword$$(null, "main.my-container.my-wrapper", "main.my-container.my-wrapper", -183567966), $cljs$cst$5600$live_workers$$ = new $APP.$cljs$core$Keyword$$(null, "live-workers", "live-workers", 587122186), $cljs$cst$5703$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_end_date_str$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-errors", "end-date-str", "sensei.frontend.admin.user-errors/end-date-str", -1582456475), $cljs$cst$5530$delete_feedback$$ = new $APP.$cljs$core$Keyword$$(null, "delete-feedback", "delete-feedback", -820728811), $cljs$cst$5643$vm_name$$ = new $APP.$cljs$core$Keyword$$(null, "vm-name", "vm-name", 78078449), $cljs$cst$5748$subs$$ = new $APP.$cljs$core$Keyword$$(null, "subs", "subs", -186681991), $cljs$cst$5543$main_DOT_my_container$$ = new $APP.$cljs$core$Keyword$$(null, 
"main.my-container", "main.my-container", 1192585047), $cljs$cst$5783$admin_worker_show_board_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "admin-worker-show-board?", "admin-worker-show-board?", -887084215), $cljs$cst$5512$button_DOT_btn_DOT_btn_sm_DOT_btn_secondary_DOT_ms_1$$ = new $APP.$cljs$core$Keyword$$(null, "button.btn.btn-sm.btn-secondary.ms-1", "button.btn.btn-sm.btn-secondary.ms-1", -2092594635), $cljs$cst$5523$table_DOT_table_DOT_table_sm_DOT_table_striped_DOT_border_DOT_border_dark$$ = 
new $APP.$cljs$core$Keyword$$(null, "table.table.table-sm.table-striped.border.border-dark", "table.table.table-sm.table-striped.border.border-dark", -1373106327), $cljs$cst$5673$upload_game$$ = new $APP.$cljs$core$Keyword$$(null, "upload-game", "upload-game", 948683708), $cljs$cst$5508$input_DOT_mx_2$$ = new $APP.$cljs$core$Keyword$$(null, "input.mx-2", "input.mx-2", 1109076044), $cljs$cst$5767$all_queues$$ = new $APP.$cljs$core$Keyword$$(null, "all-queues", "all-queues", 1552423501), $cljs$cst$5552$span_DOT_ms_1_DOT_d_flex$$ = 
new $APP.$cljs$core$Keyword$$(null, "span.ms-1.d-flex", "span.ms-1.d-flex", 1518844768), $cljs$cst$5669$div_DOT_my_container_DOT_my_wrapper$$ = new $APP.$cljs$core$Keyword$$(null, "div.my-container.my-wrapper", "div.my-container.my-wrapper", -1004435348), $cljs$cst$5671$div_DOT_chart_grid$$ = new $APP.$cljs$core$Keyword$$(null, "div.chart-grid", "div.chart-grid", -994258736), $cljs$cst$5780$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_admin_selected_queue$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.workers", 
"admin-selected-queue", "sensei.frontend.admin.workers/admin-selected-queue", -563195132), $cljs$cst$5689$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.statistics", "chart-data", "sensei.frontend.admin.statistics/chart-data", 1080409461), $cljs$cst$5580$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_fetch_users$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "fetch-users", "sensei.frontend.admin.funnel/fetch-users", 
-468333887), $cljs$cst$5632$sensei_DOT_frontend_DOT_admin_DOT_paypal_statistics_SLASH_stats$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.paypal-statistics", "stats", "sensei.frontend.admin.paypal-statistics/stats", -1251111768), $cljs$cst$5672$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_games$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.rank-statistics", "games", "sensei.frontend.admin.rank-statistics/games", -1923299078), $cljs$cst$5718$create_voucher_success$$ = 
new $APP.$cljs$core$Keyword$$(null, "create-voucher-success", "create-voucher-success", 506485906), $cljs$cst$5547$user_trace$$ = new $APP.$cljs$core$Keyword$$(null, "user-trace", "user-trace", -345213915), $cljs$cst$5525$small$$ = new $APP.$cljs$core$Keyword$$(null, "small", "small", 2133478704), $cljs$cst$5771$healthy_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "healthy?", "healthy?", 1027593366), $cljs$cst$5688$total_basic_subscriptions$$ = new $APP.$cljs$core$Keyword$$(null, "total-basic-subscriptions", 
"total-basic-subscriptions", 769064318), $cljs$cst$5532$p_DOT_mb_1_DOT_small$$ = new $APP.$cljs$core$Keyword$$(null, "p.mb-1.small", "p.mb-1.small", -68478891), $cljs$cst$5698$tbody_DOT_text_center$$ = new $APP.$cljs$core$Keyword$$(null, "tbody.text-center", "tbody.text-center", 560761670), $cljs$cst$5596$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_cancel_events$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.life-time-value", "cancel-events", "sensei.frontend.admin.life-time-value/cancel-events", 
729349168), $cljs$cst$5699$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_upload_logs$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.upload-stats", "upload-logs", "sensei.frontend.admin.upload-stats/upload-logs", 1897960053), $cljs$cst$5663$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_problem_added_logs$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.problem-stats", "problem-added-logs", "sensei.frontend.admin.problem-stats/problem-added-logs", 1592896107), $cljs$cst$5519$stats_by_day$$ = 
new $APP.$cljs$core$Keyword$$(null, "stats-by-day", "stats-by-day", 1977169362), $cljs$cst$5706$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_set_grouped$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-errors", "set-grouped", "sensei.frontend.admin.user-errors/set-grouped", 1284880688), $cljs$cst$5540$uid_input$$ = new $APP.$cljs$core$Keyword$$(null, "uid-input", "uid-input", 1669040130), $cljs$cst$5716$multi_user_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "multi-user?", "multi-user?", 
754570216), $cljs$cst$5736$div_DOT_col_auto_DOT_me_auto$$ = new $APP.$cljs$core$Keyword$$(null, "div.col-auto.me-auto", "div.col-auto.me-auto", 748675273), $cljs$cst$5750$table_DOT_table_DOT_table_sm_DOT_table_striped_DOT_mt_5_GT_tbody$$ = new $APP.$cljs$core$Keyword$$(null, "table.table.table-sm.table-striped.mt-5\x3etbody", "table.table.table-sm.table-striped.mt-5\x3etbody", 1288830229), $cljs$cst$5629$billing_agreement_id$$ = new $APP.$cljs$core$Keyword$$(null, "billing_agreement_id", "billing_agreement_id", 
-1313661210), $cljs$cst$5564$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_grouped_stats$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "grouped-stats", "sensei.frontend.admin.funnel/grouped-stats", -2079895872), $cljs$cst$5677$owner$$ = new $APP.$cljs$core$Keyword$$(null, "owner", "owner", -392611939), $cljs$cst$5731$vouchers$$ = new $APP.$cljs$core$Keyword$$(null, "vouchers", "vouchers", 1053770736), $cljs$cst$5521$domain_visits$$ = new $APP.$cljs$core$Keyword$$(null, "domain-visits", 
"domain-visits", 1069221388), $cljs$cst$5774$worker_status$$ = new $APP.$cljs$core$Keyword$$(null, "worker-status", "worker-status", -863081317), $cljs$cst$5531$div_DOT_card_title$$ = new $APP.$cljs$core$Keyword$$(null, "div.card-title", "div.card-title", 2090281294), $cljs$cst$5777$error_count$$ = new $APP.$cljs$core$Keyword$$(null, "error-count", "error-count", 1790949450), $cljs$cst$5599$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_churn_rates$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.life-time-value", 
"churn-rates", "sensei.frontend.admin.life-time-value/churn-rates", 1551116660), $cljs$cst$5515$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_playout_time_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.game-analysis", "playout-time-chart-data", "sensei.frontend.admin.game-analysis/playout-time-chart-data", -1098920750), $cljs$cst$5784$admin_worker_show_job_details_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "admin-worker-show-job-details?", "admin-worker-show-job-details?", 
-479386045), $cljs$cst$5625$event_id$$ = new $APP.$cljs$core$Keyword$$(null, "event-id", "event-id", 2130210178), $cljs$cst$5585$life_time_value$$ = new $APP.$cljs$core$Keyword$$(null, "life-time-value", "life-time-value", -1720580844), $cljs$cst$5597$subscription_cancelled$$ = new $APP.$cljs$core$Keyword$$(null, "subscription-cancelled", "subscription-cancelled", 1868207049), $cljs$cst$5577$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_show_detailed_logs$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", 
"show-detailed-logs", "sensei.frontend.admin.funnel/show-detailed-logs", -259174013), $cljs$cst$5793$div_DOT_d_flex_DOT_align_items_center_DOT_mb_4$$ = new $APP.$cljs$core$Keyword$$(null, "div.d-flex.align-items-center.mb-4", "div.d-flex.align-items-center.mb-4", 1637484804), $cljs$cst$5610$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_stats_by_day$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-workers", "stats-by-day", "sensei.frontend.admin.live-workers/stats-by-day", 1428241486), 
$cljs$cst$5513$analysis_stats$$ = new $APP.$cljs$core$Keyword$$(null, "analysis-stats", "analysis-stats", 224113214), $cljs$cst$5584$tutorial_seen_register$$ = new $APP.$cljs$core$Keyword$$(null, "tutorial-seen-register", "tutorial-seen-register", -2001421057), $cljs$cst$5739$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_tab$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", "set-tab", "sensei.frontend.admin.voucher-funnel/set-tab", 1456759948), $cljs$cst$5662$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_total$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.problem-stats", "histogram-total", "sensei.frontend.admin.problem-stats/histogram-total", -231347841), $cljs$cst$5598$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_cancellations_by_month$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.life-time-value", "cancellations-by-month", "sensei.frontend.admin.life-time-value/cancellations-by-month", -837910826), $cljs$cst$5765$failures$$ = new $APP.$cljs$core$Keyword$$(null, "failures", 
"failures", -912916356), $cljs$cst$5796$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_total_count_by_vm$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-errors", "total-count-by-vm", "sensei.frontend.admin.worker-errors/total-count-by-vm", 1452888788), $cljs$cst$5756$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_funnel_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", "funnel-data", "sensei.frontend.admin.voucher-funnel/funnel-data", 433103156), 
$cljs$cst$5497$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_initial_from_date$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "initial-from-date", "sensei.frontend.widget.date-range/initial-from-date", 1411597759), $cljs$cst$5559$span_DOT_ms_1_DOT_pointer$$ = new $APP.$cljs$core$Keyword$$(null, "span.ms-1.pointer", "span.ms-1.pointer", 428842299), $cljs$cst$5684$standard_uploads$$ = new $APP.$cljs$core$Keyword$$(null, "standard-uploads", "standard-uploads", -591451822), 
$cljs$cst$5693$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.upload-stats", "histogram-chart-data", "sensei.frontend.admin.upload-stats/histogram-chart-data", 1211084101), $cljs$cst$5661$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.problem-stats", "histogram-chart-data", "sensei.frontend.admin.problem-stats/histogram-chart-data", 
1490639403), $cljs$cst$5790$div_DOT_text_center$$ = new $APP.$cljs$core$Keyword$$(null, "div.text-center", "div.text-center", 921869624), $cljs$cst$5690$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_revenue_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.statistics", "revenue-chart-data", "sensei.frontend.admin.statistics/revenue-chart-data", 470100934), $cljs$cst$5612$live_worker$$ = new $APP.$cljs$core$Keyword$$(null, "live-worker", "live-worker", -543195186), $cljs$cst$5679$revenue$$ = 
new $APP.$cljs$core$Keyword$$(null, "revenue", "revenue", 943993380), $cljs$cst$5758$worker_queues$$ = new $APP.$cljs$core$Keyword$$(null, "worker-queues", "worker-queues", -1614683417), $cljs$cst$5702$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_grouped_QMARK_$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-errors", "grouped?", "sensei.frontend.admin.user-errors/grouped?", -487729937), $cljs$cst$5628$resource$$ = new $APP.$cljs$core$Keyword$$(null, "resource", "resource", 251898836), 
$cljs$cst$5700$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.upload-stats", "histogram-data", "sensei.frontend.admin.upload-stats/histogram-data", -87018604), $cljs$cst$5514$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_simple_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.game-analysis", "simple-chart-data", "sensei.frontend.admin.game-analysis/simple-chart-data", 414842681), $cljs$cst$5678$label_DOT_form_check_label_DOT_ms_1$$ = 
new $APP.$cljs$core$Keyword$$(null, "label.form-check-label.ms-1", "label.form-check-label.ms-1", -1657571664), $cljs$cst$5529$page_views$$ = new $APP.$cljs$core$Keyword$$(null, "page-views", "page-views", 559529695), $cljs$cst$5808$div_DOT_admin_layout$$ = new $APP.$cljs$core$Keyword$$(null, "div.admin-layout", "div.admin-layout", 737617388), $cljs$cst$5656$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_custom_by_user_chart$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.play-ai-stats", 
"custom-by-user-chart", "sensei.frontend.admin.play-ai-stats/custom-by-user-chart", -1935422653), $cljs$cst$5782$select_DOT_form_control$$ = new $APP.$cljs$core$Keyword$$(null, "select.form-control", "select.form-control", 696610397), $cljs$cst$5607$success_by_worker$$ = new $APP.$cljs$core$Keyword$$(null, "success-by-worker", "success-by-worker", 201630427), $cljs$cst$5696$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_table_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.upload-stats", 
"table-data", "sensei.frontend.admin.upload-stats/table-data", 543078608), $cljs$cst$5633$paypal_stats$$ = new $APP.$cljs$core$Keyword$$(null, "paypal-stats", "paypal-stats", -652051315), $cljs$cst$5695$border_right$$ = new $APP.$cljs$core$Keyword$$(null, "border-right", "border-right", -668932860), $cljs$cst$5496$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_from_date$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "from-date", "sensei.frontend.widget.date-range/from-date", 
1389291167), $cljs$cst$5533$h6_DOT_mt_0$$ = new $APP.$cljs$core$Keyword$$(null, "h6.mt-0", "h6.mt-0", 1756763695), $cljs$cst$5664$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.problem-stats", "histogram-data", "sensei.frontend.admin.problem-stats/histogram-data", -268869310), $cljs$cst$5776$reset_error_count$$ = new $APP.$cljs$core$Keyword$$(null, "reset-error-count", "reset-error-count", 1383294591), $cljs$cst$5800$starting_vm$$ = 
new $APP.$cljs$core$Keyword$$(null, "starting-vm", "starting-vm", -865709928), $cljs$cst$5528$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_raw_referral_logs$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.domain-visits", "raw-referral-logs", "sensei.frontend.admin.domain-visits/raw-referral-logs", 1155737898), $cljs$cst$5785$div_DOT_worker_table$$ = new $APP.$cljs$core$Keyword$$(null, "div.worker-table", "div.worker-table", 368711000), $cljs$cst$5551$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_filter$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "set-filter", "sensei.frontend.admin.funnel/set-filter", 1439055494), $cljs$cst$5500$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_date_range$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "tmp-date-range", "sensei.frontend.widget.date-range/tmp-date-range", -747712227), $cljs$cst$5733$div_DOT_card_title_DOT_mb_0$$ = new $APP.$cljs$core$Keyword$$(null, "div.card-title.mb-0", "div.card-title.mb-0", 1524075187), 
$cljs$cst$5626$sub_id$$ = new $APP.$cljs$core$Keyword$$(null, "sub-id", "sub-id", -35437494), $cljs$cst$5709$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_start_date$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-errors", "start-date", "sensei.frontend.admin.user-errors/start-date", 1381619934), $cljs$cst$5639$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs_end_timestamp$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-logs", "logs-end-timestamp", "sensei.frontend.admin.worker-logs/logs-end-timestamp", 
887508069), $cljs$cst$5722$delete_voucher$$ = new $APP.$cljs$core$Keyword$$(null, "delete-voucher", "delete-voucher", 1533527030), $cljs$cst$5735$div_DOT_row_DOT_justify_content_end_DOT_align_items_end_DOT_ms_2$$ = new $APP.$cljs$core$Keyword$$(null, "div.row.justify-content-end.align-items-end.ms-2", "div.row.justify-content-end.align-items-end.ms-2", -652797605), $cljs$cst$5554$btn_outline_success$$ = new $APP.$cljs$core$Keyword$$(null, "btn-outline-success", "btn-outline-success", -495092801), 
$cljs$cst$5565$tr_DOT_fw_bold$$ = new $APP.$cljs$core$Keyword$$(null, "tr.fw-bold", "tr.fw-bold", 528854254), $cljs$cst$5613$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_start$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-worker-queues", "start", "sensei.frontend.admin.live-worker-queues/start", -567160013), $cljs$cst$5647$old_state$$ = new $APP.$cljs$core$Keyword$$(null, "old-state", "old-state", 1039580704), $cljs$cst$5697$thead_DOT_text_center$$ = new $APP.$cljs$core$Keyword$$(null, 
"thead.text-center", "thead.text-center", -1588640662), $cljs$cst$5666$rank_statistics$$ = new $APP.$cljs$core$Keyword$$(null, "rank-statistics", "rank-statistics", 1426159098), $cljs$cst$5636$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_end_timestamp$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-logs", "end-timestamp", "sensei.frontend.admin.worker-logs/end-timestamp", -427270184), $cljs$cst$5743$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_input_text$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", 
"input-text", "sensei.frontend.admin.voucher-funnel/input-text", 44337159), $cljs$cst$5650$override_user$$ = new $APP.$cljs$core$Keyword$$(null, "override-user", "override-user", -1012732815), $cljs$cst$5556$span_DOT_badge_DOT_rounded_pill_DOT_ms_1$$ = new $APP.$cljs$core$Keyword$$(null, "span.badge.rounded-pill.ms-1", "span.badge.rounded-pill.ms-1", -1090565147), $cljs$cst$5589$ltv$$ = new $APP.$cljs$core$Keyword$$(null, "ltv", "ltv", 35183026), $cljs$cst$5788$div_DOT_mx_1$$ = new $APP.$cljs$core$Keyword$$(null, 
"div.mx-1", "div.mx-1", -425167132), $cljs$cst$5807$div_DOT_mx_5$$ = new $APP.$cljs$core$Keyword$$(null, "div.mx-5", "div.mx-5", -2019521403), $cljs$cst$5555$btn_outline_danger$$ = new $APP.$cljs$core$Keyword$$(null, "btn-outline-danger", "btn-outline-danger", -629030506), $cljs$cst$5604$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_performance_by_playouts_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-workers", "performance-by-playouts-chart-data", "sensei.frontend.admin.live-workers/performance-by-playouts-chart-data", 
343757566), $cljs$cst$5550$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_filters$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "filters", "sensei.frontend.admin.funnel/filters", 1047423653), $cljs$cst$5667$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_game_histogram_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.rank-statistics", "game-histogram-data", "sensei.frontend.admin.rank-statistics/game-histogram-data", 777081457), $cljs$cst$5708$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_error_logs$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-errors", "error-logs", "sensei.frontend.admin.user-errors/error-logs", -117629342), $cljs$cst$5654$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_total_users$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.play-ai-stats", "total-users", "sensei.frontend.admin.play-ai-stats/total-users", 316106949), $cljs$cst$5570$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_user_type$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", 
"set-user-type", "sensei.frontend.admin.funnel/set-user-type", 1429711049), $cljs$cst$5792$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filter_vm$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-errors", "filter-vm", "sensei.frontend.admin.worker-errors/filter-vm", 1137489226), $cljs$cst$5711$div_DOT_my_form_row$$ = new $APP.$cljs$core$Keyword$$(null, "div.my-form-row", "div.my-form-row", -1760343458), $cljs$cst$5766$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_failures_queue$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.workers", "failures-queue", "sensei.frontend.admin.workers/failures-queue", -1844425990), $cljs$cst$5562$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_clear_filters$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "clear-filters", "sensei.frontend.admin.funnel/clear-filters", 563758747), $cljs$cst$5620$div_DOT_css_table$$ = new $APP.$cljs$core$Keyword$$(null, "div.css-table", "div.css-table", 713175466), $cljs$cst$5527$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_stayed_on_site_60_logs$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.domain-visits", "stayed-on-site-60-logs", "sensei.frontend.admin.domain-visits/stayed-on-site-60-logs", -155442203), $cljs$cst$5506$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_update_date_range$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "update-date-range", "sensei.frontend.widget.date-range/update-date-range", 1127494514), $cljs$cst$5494$date_range$$ = new $APP.$cljs$core$Keyword$$(null, "date-range", "date-range", 
63083517), $cljs$cst$5791$worker_errors$$ = new $APP.$cljs$core$Keyword$$(null, "worker-errors", "worker-errors", -373780341), $cljs$cst$5611$daily_stats$$ = new $APP.$cljs$core$Keyword$$(null, "daily-stats", "daily-stats", 1490259529), $cljs$cst$5686$free_uploads$$ = new $APP.$cljs$core$Keyword$$(null, "free-uploads", "free-uploads", 150101882), $cljs$cst$5602$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_total_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-workers", "total-data", 
"sensei.frontend.admin.live-workers/total-data", 681328603), $cljs$cst$5590$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_churn_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.life-time-value", "churn-data", "sensei.frontend.admin.life-time-value/churn-data", -777853072), $cljs$cst$5568$div_DOT_progress$$ = new $APP.$cljs$core$Keyword$$(null, "div.progress", "div.progress", 169531213), $cljs$cst$5658$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_game_start_logs$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.play-ai-stats", "game-start-logs", "sensei.frontend.admin.play-ai-stats/game-start-logs", 1103418673), $cljs$cst$5601$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_total_by_item_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-workers", "total-by-item-data", "sensei.frontend.admin.live-workers/total-by-item-data", 1946159648), $cljs$cst$5809$div_DOT_card_DOT_m_4$$ = new $APP.$cljs$core$Keyword$$(null, "div.card.m-4", "div.card.m-4", 
-1918646520), $cljs$cst$5789$div_DOT_text_danger$$ = new $APP.$cljs$core$Keyword$$(null, "div.text-danger", "div.text-danger", -1781819271), $cljs$cst$5617$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_live_queue_info$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-worker-queues", "live-queue-info", "sensei.frontend.admin.live-worker-queues/live-queue-info", 2044167929), $cljs$cst$5773$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_aw$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.workers", 
"aw", "sensei.frontend.admin.workers/aw", 297400765), $cljs$cst$5573$user_id$$ = new $APP.$cljs$core$Keyword$$(null, "user-id", "user-id", -206822291), $cljs$cst$5728$button_DOT_btn_DOT_btn_primary_DOT_btn_round$$ = new $APP.$cljs$core$Keyword$$(null, "button.btn.btn-primary.btn-round", "button.btn.btn-primary.btn-round", -1993963141), $cljs$cst$5579$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_detailed_logs$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "set-detailed-logs", 
"sensei.frontend.admin.funnel/set-detailed-logs", -1741474765), $cljs$cst$5806$a_DOT_backlink$$ = new $APP.$cljs$core$Keyword$$(null, "a.backlink", "a.backlink", 1314721844), $cljs$cst$5567$td_GT_div_DOT_d_flex_DOT_align_items_center_DOT_justify_content_between$$ = new $APP.$cljs$core$Keyword$$(null, "td\x3ediv.d-flex.align-items-center.justify-content-between", "td\x3ediv.d-flex.align-items-center.justify-content-between", -1275532767), $cljs$cst$5653$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_total_games$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.play-ai-stats", "total-games", "sensei.frontend.admin.play-ai-stats/total-games", 1151283651), $cljs$cst$5603$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_failed_by_worker_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-workers", "failed-by-worker-data", "sensei.frontend.admin.live-workers/failed-by-worker-data", 814449668), $cljs$cst$5768$worker_queue_names$$ = new $APP.$cljs$core$Keyword$$(null, "worker-queue-names", 
"worker-queue-names", -1454981006), $cljs$cst$5778$mark_done$$ = new $APP.$cljs$core$Keyword$$(null, "mark-done", "mark-done", 898708036), $cljs$cst$5648$div_SHARP_log_table$$ = new $APP.$cljs$core$Keyword$$(null, "div#log-table", "div#log-table", -806684491), $cljs$cst$5591$table_DOT_table_DOT_table_sm_DOT_table_bordered$$ = new $APP.$cljs$core$Keyword$$(null, "table.table.table-sm.table-bordered", "table.table.table-sm.table-bordered", 933113518), $cljs$cst$5575$div_DOT_d_flex_DOT_mb_2_DOT_align_items_center$$ = 
new $APP.$cljs$core$Keyword$$(null, "div.d-flex.mb-2.align-items-center", "div.d-flex.mb-2.align-items-center", -712784818), $cljs$cst$5715$redeemed$$ = new $APP.$cljs$core$Keyword$$(null, "redeemed", "redeemed", -1858834936), $cljs$cst$5682$active_free_users$$ = new $APP.$cljs$core$Keyword$$(null, "active-free-users", "active-free-users", -2022722192), $cljs$cst$5640$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs_vm_name_filter$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-logs", 
"logs-vm-name-filter", "sensei.frontend.admin.worker-logs/logs-vm-name-filter", -1568500135), $cljs$cst$5535$div_DOT_card_DOT_my_2_GT_div_DOT_card_body$$ = new $APP.$cljs$core$Keyword$$(null, "div.card.my-2\x3ediv.card-body", "div.card.my-2\x3ediv.card-body", 1836905885), $cljs$cst$5674$write_role$$ = new $APP.$cljs$core$Keyword$$(null, "write-role", "write-role", -307145958), $cljs$cst$5726$custom_code$$ = new $APP.$cljs$core$Keyword$$(null, "custom-code", "custom-code", -986160000), $cljs$cst$5526$div_DOT_row_GT_div_DOT_col_lg_6$$ = 
new $APP.$cljs$core$Keyword$$(null, "div.row\x3ediv.col-lg-6", "div.row\x3ediv.col-lg-6", 701811659), $cljs$cst$5803$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filtered_worker_events$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-errors", "filtered-worker-events", "sensei.frontend.admin.worker-errors/filtered-worker-events", 239451292), $cljs$cst$5615$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_poll_for_queue_info$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-worker-queues", 
"poll-for-queue-info", "sensei.frontend.admin.live-worker-queues/poll-for-queue-info", 139263285), $cljs$cst$5802$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_worker_events$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-errors", "worker-events", "sensei.frontend.admin.worker-errors/worker-events", -1281760867), $cljs$cst$5657$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_max_daily_games_chart$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.play-ai-stats", 
"max-daily-games-chart", "sensei.frontend.admin.play-ai-stats/max-daily-games-chart", 1596078682), $cljs$cst$5498$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_to_date$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "to-date", "sensei.frontend.widget.date-range/to-date", 443356741), $cljs$cst$5644$div_DOT_admin_log_nav_DOT_d_flex_DOT_justify_content_between_DOT_flex_row$$ = new $APP.$cljs$core$Keyword$$(null, "div.admin-log-nav.d-flex.justify-content-between.flex-row", 
"div.admin-log-nav.d-flex.justify-content-between.flex-row", 1370448793), $cljs$cst$5588$monthly_revenue$$ = new $APP.$cljs$core$Keyword$$(null, "monthly-revenue", "monthly-revenue", 401157343), $cljs$cst$5511$button_DOT_btn_DOT_btn_sm_DOT_btn_primary_DOT_ms_3$$ = new $APP.$cljs$core$Keyword$$(null, "button.btn.btn-sm.btn-primary.ms-3", "button.btn.btn-sm.btn-primary.ms-3", 720869739), $cljs$cst$5630$paypal_statistics$$ = new $APP.$cljs$core$Keyword$$(null, "paypal-statistics", "paypal-statistics", 
1323434733), $cljs$cst$5723$with_let71590$$ = new $APP.$cljs$core$Keyword$$(null, "with-let71590", "with-let71590", -1266060229), $cljs$cst$5517$h5$$ = new $APP.$cljs$core$Keyword$$(null, "h5", "h5", -1829156625), $cljs$cst$5574$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_user_trace_index$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "set-user-trace-index", "sensei.frontend.admin.funnel/set-user-trace-index", 22831015), $cljs$cst$5742$by_voucher_comment$$ = new $APP.$cljs$core$Keyword$$(null, 
"by-voucher-comment", "by-voucher-comment", -976516855), $cljs$cst$5754$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_vouchers_by_comment$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", "vouchers-by-comment", "sensei.frontend.admin.voucher-funnel/vouchers-by-comment", -1759666849), $cljs$cst$5761$jobs$$ = new $APP.$cljs$core$Keyword$$(null, "jobs", "jobs", -313607120), $cljs$cst$5747$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_stats$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", 
"stats", "sensei.frontend.admin.voucher-funnel/stats", -263004576), $cljs$cst$5725$div_DOT_col_6$$ = new $APP.$cljs$core$Keyword$$(null, "div.col-6", "div.col-6", -2040623677), $cljs$cst$5576$div_DOT_equal_columns$$ = new $APP.$cljs$core$Keyword$$(null, "div.equal-columns", "div.equal-columns", -1057739580), $cljs$cst$5507$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_cancel_date_range$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "cancel-date-range", "sensei.frontend.widget.date-range/cancel-date-range", 
-2120496645), $cljs$cst$5680$basic_uploads$$ = new $APP.$cljs$core$Keyword$$(null, "basic-uploads", "basic-uploads", 479019915), $cljs$cst$5561$div_DOT_btn_DOT_btn_link$$ = new $APP.$cljs$core$Keyword$$(null, "div.btn.btn-link", "div.btn.btn-link", -1726211311), $cljs$cst$5524$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_raw_referral_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.domain-visits", "raw-referral-data", "sensei.frontend.admin.domain-visits/raw-referral-data", 
-2014950452), $cljs$cst$5787$div_DOT_th_GT_div_DOT_rotate$$ = new $APP.$cljs$core$Keyword$$(null, "div.th\x3ediv.rotate", "div.th\x3ediv.rotate", -427234262), $cljs$cst$5578$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_detailed_logs_QMARK_$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "detailed-logs?", "sensei.frontend.admin.funnel/detailed-logs?", 1356129215), $cljs$cst$5805$live_worker_queues$$ = new $APP.$cljs$core$Keyword$$(null, "live-worker-queues", "live-worker-queues", 
-784352623), $cljs$cst$5645$span_DOT_filter$$ = new $APP.$cljs$core$Keyword$$(null, "span.filter", "span.filter", 702739891), $cljs$cst$5572$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_user_language$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "set-user-language", "sensei.frontend.admin.funnel/set-user-language", 591228622), $cljs$cst$5549$stayed_on_page_game_0$$ = new $APP.$cljs$core$Keyword$$(null, "stayed-on-page-game-0", "stayed-on-page-game-0", 1407868392), $cljs$cst$5694$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_total$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.upload-stats", "histogram-total", "sensei.frontend.admin.upload-stats/histogram-total", -351349939), $cljs$cst$5544$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_detailed_user_logs$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-trace", "detailed-user-logs", "sensei.frontend.admin.user-trace/detailed-user-logs", 1571396776), $cljs$cst$5751$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_tab$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", 
"tab", "sensei.frontend.admin.voucher-funnel/tab", -328449958), $cljs$cst$5586$churn$$ = new $APP.$cljs$core$Keyword$$(null, "churn", "churn", -102747092), $cljs$cst$5503$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_form_date_range$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "form-date-range", "sensei.frontend.widget.date-range/form-date-range", 684698858), $cljs$cst$5764$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_slow_queue$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.workers", 
"slow-queue", "sensei.frontend.admin.workers/slow-queue", -1332959798), $cljs$cst$5536$td_DOT_text_nowrap$$ = new $APP.$cljs$core$Keyword$$(null, "td.text-nowrap", "td.text-nowrap", -265961464), $cljs$cst$5651$indexed$$ = new $APP.$cljs$core$Keyword$$(null, "indexed", "indexed", 390758624), $cljs$cst$5642$worker$$ = new $APP.$cljs$core$Keyword$$(null, "worker", "worker", 938239996), $cljs$cst$5546$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_detailed_anonymous_logs$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-trace", 
"detailed-anonymous-logs", "sensei.frontend.admin.user-trace/detailed-anonymous-logs", -553674283), $cljs$cst$5801$stopping_vm$$ = new $APP.$cljs$core$Keyword$$(null, "stopping-vm", "stopping-vm", -520129601), $cljs$cst$5502$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_to_date$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "tmp-to-date", "sensei.frontend.widget.date-range/tmp-to-date", -472442981), $cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "date-range", "sensei.frontend.widget.date-range/date-range", -21938370), $cljs$cst$5775$move_job$$ = new $APP.$cljs$core$Keyword$$(null, "move-job", "move-job", 652955741), $cljs$cst$5659$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_by_user$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.play-ai-stats", "by-user", "sensei.frontend.admin.play-ai-stats/by-user", -1780260526), $cljs$cst$5606$time_by_playouts$$ = new $APP.$cljs$core$Keyword$$(null, 
"time-by-playouts", "time-by-playouts", -1188102494), $cljs$cst$5737$div_DOT_col_auto$$ = new $APP.$cljs$core$Keyword$$(null, "div.col-auto", "div.col-auto", -872131075), $cljs$cst$5732$created_at$$ = new $APP.$cljs$core$Keyword$$(null, "created-at", "created-at", -89248644), $cljs$cst$5741$by_voucher_code$$ = new $APP.$cljs$core$Keyword$$(null, "by-voucher-code", "by-voucher-code", -1248183480), $cljs$cst$5557$bg_success$$ = new $APP.$cljs$core$Keyword$$(null, "bg-success", "bg-success", -1382845655), 
$cljs$cst$5541$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_set_input_uid$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-trace", "set-input-uid", "sensei.frontend.admin.user-trace/set-input-uid", -1398968510), $cljs$cst$5624$sensei_DOT_frontend_DOT_admin_DOT_paypal_events_SLASH_all_events$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.paypal-events", "all-events", "sensei.frontend.admin.paypal-events/all-events", -1906980840), $cljs$cst$5668$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_user_histogram_data$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.rank-statistics", "user-histogram-data", "sensei.frontend.admin.rank-statistics/user-histogram-data", 341451611), $cljs$cst$5499$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_initial_to_date$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "initial-to-date", "sensei.frontend.widget.date-range/initial-to-date", 1240925585), $cljs$cst$5542$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_set_uid$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-trace", 
"set-uid", "sensei.frontend.admin.user-trace/set-uid", -1322217706), $cljs$cst$5592$th_DOT_text_center$$ = new $APP.$cljs$core$Keyword$$(null, "th.text-center", "th.text-center", 738072305), $cljs$cst$5724$voucher_count$$ = new $APP.$cljs$core$Keyword$$(null, "voucher-count", "voucher-count", -1009662328), $cljs$cst$5501$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_from_date$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "tmp-from-date", "sensei.frontend.widget.date-range/tmp-from-date", 
-188397136), $cljs$cst$5619$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_live_queues$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-worker-queues", "live-queues", "sensei.frontend.admin.live-worker-queues/live-queues", 367533177), $cljs$cst$5786$div_DOT_tr_DOT_thead$$ = new $APP.$cljs$core$Keyword$$(null, "div.tr.thead", "div.tr.thead", -450677582), $cljs$cst$5582$div_DOT_table_responsive$$ = new $APP.$cljs$core$Keyword$$(null, "div.table-responsive", "div.table-responsive", 
-16203823), $cljs$cst$5655$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_ranked_by_user_chart$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.play-ai-stats", "ranked-by-user-chart", "sensei.frontend.admin.play-ai-stats/ranked-by-user-chart", -1347374523), $cljs$cst$5717$user_limit$$ = new $APP.$cljs$core$Keyword$$(null, "user-limit", "user-limit", 1643783061), $cljs$cst$5692$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_stats_by_day$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.statistics", 
"stats-by-day", "sensei.frontend.admin.statistics/stats-by-day", 653391517), $cljs$cst$5681$total_standard_subscriptions$$ = new $APP.$cljs$core$Keyword$$(null, "total-standard-subscriptions", "total-standard-subscriptions", -1566497331), $cljs$cst$5652$ratio$$ = new $APP.$cljs$core$Keyword$$(null, "ratio", "ratio", -926560044), $cljs$cst$5637$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_set_vm_name_filter$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-logs", "set-vm-name-filter", 
"sensei.frontend.admin.worker-logs/set-vm-name-filter", 1237604747), $cljs$cst$5605$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_performance_by_worker_chart_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-workers", "performance-by-worker-chart-data", "sensei.frontend.admin.live-workers/performance-by-worker-chart-data", -1435570139), $cljs$cst$5804$workers$$ = new $APP.$cljs$core$Keyword$$(null, "workers", "workers", -2054878819), $cljs$cst$5665$chart_data$$ = new $APP.$cljs$core$Keyword$$(null, 
"chart-data", "chart-data", -1181877206), $cljs$cst$5646$span_DOT_vm$$ = new $APP.$cljs$core$Keyword$$(null, "span.vm", "span.vm", 922219333), $cljs$cst$5720$codes$$ = new $APP.$cljs$core$Keyword$$(null, "codes", "codes", -760505543), $cljs$cst$5798$worker_timed_out$$ = new $APP.$cljs$core$Keyword$$(null, "worker-timed-out", "worker-timed-out", -429539416), $cljs$cst$5713$button_DOT_my_btn$$ = new $APP.$cljs$core$Keyword$$(null, "button.my-btn", "button.my-btn", 959240079), $cljs$cst$5537$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_input_uid$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-trace", "input-uid", "sensei.frontend.admin.user-trace/input-uid", 333411174), $cljs$cst$5712$admin_date_str$$ = new $APP.$cljs$core$Keyword$$(null, "admin-date-str", "admin-date-str", -2142158969), $cljs$cst$5621$div_DOT_tr$$ = new $APP.$cljs$core$Keyword$$(null, "div.tr", "div.tr", 19325729), $cljs$cst$5623$div_DOT_td$$ = new $APP.$cljs$core$Keyword$$(null, "div.td", "div.td", 320676764), $cljs$cst$5622$div_DOT_th$$ = new $APP.$cljs$core$Keyword$$(null, 
"div.th", "div.th", -434433542), $cljs$cst$5595$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_cancellations$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.life-time-value", "cancellations", "sensei.frontend.admin.life-time-value/cancellations", 1182219349), $cljs$cst$5749$sub_rate$$ = new $APP.$cljs$core$Keyword$$(null, "sub-rate", "sub-rate", -2088071692), $cljs$cst$5609$success_by_playouts$$ = new $APP.$cljs$core$Keyword$$(null, "success-by-playouts", "success-by-playouts", 
-931683891), $cljs$cst$5560$div_DOT_d_flex_DOT_align_items_center_DOT_flex_wrap$$ = new $APP.$cljs$core$Keyword$$(null, "div.d-flex.align-items-center.flex-wrap", "div.d-flex.align-items-center.flex-wrap", 1110314235), $cljs$cst$5714$user_errors$$ = new $APP.$cljs$core$Keyword$$(null, "user-errors", "user-errors", 544697800), $cljs$cst$5520$seconds_used$$ = new $APP.$cljs$core$Keyword$$(null, "seconds-used", "seconds-used", -1005137792), $cljs$cst$5745$button_DOT_btn_DOT_btn_primary_DOT_ms_5$$ = 
new $APP.$cljs$core$Keyword$$(null, "button.btn.btn-primary.ms-5", "button.btn.btn-primary.ms-5", -1775009799), $cljs$cst$5618$queues$$ = new $APP.$cljs$core$Keyword$$(null, "queues", "queues", 1205349853), $cljs$cst$5769$worker_queues_by_game$$ = new $APP.$cljs$core$Keyword$$(null, "worker-queues-by-game", "worker-queues-by-game", -1765716376), $cljs$cst$5760$scheduler$$ = new $APP.$cljs$core$Keyword$$(null, "scheduler", "scheduler", -1882870208), $cljs$cst$5594$div_DOT_container_DOT_life_time_value_page$$ = 
new $APP.$cljs$core$Keyword$$(null, "div.container.life-time-value-page", "div.container.life-time-value-page", 377346431), $cljs$cst$5670$h2_DOT_mb_3$$ = new $APP.$cljs$core$Keyword$$(null, "h2.mb-3", "h2.mb-3", 1207460614), $cljs$cst$5719$sensei_DOT_frontend_DOT_admin_DOT_voucher_SLASH_new_vouchers$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher", "new-vouchers", "sensei.frontend.admin.voucher/new-vouchers", 405169592), $cljs$cst$5505$set_initial_date_range$$ = new $APP.$cljs$core$Keyword$$(null, 
"set-initial-date-range", "set-initial-date-range", -2001816679), $cljs$cst$5638$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_vm_name$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-logs", "vm-name", "sensei.frontend.admin.worker-logs/vm-name", -1892314917), $cljs$cst$5522$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_domain_visits_data$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.domain-visits", "domain-visits-data", "sensei.frontend.admin.domain-visits/domain-visits-data", 
-408576418), $cljs$cst$5721$create_voucher$$ = new $APP.$cljs$core$Keyword$$(null, "create-voucher", "create-voucher", 2125435625), $cljs$cst$5510$to_date$$ = new $APP.$cljs$core$Keyword$$(null, "to-date", "to-date", 500848648), $cljs$cst$5553$button_DOT_btn_DOT_btn_sm$$ = new $APP.$cljs$core$Keyword$$(null, "button.btn.btn-sm", "button.btn.btn-sm", -506358333), $cljs$cst$5509$from_date$$ = new $APP.$cljs$core$Keyword$$(null, "from-date", "from-date", 1469949792), $cljs$cst$5744$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_input_text$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", "set-input-text", "sensei.frontend.admin.voucher-funnel/set-input-text", 1815829408), $cljs$cst$5516$max_allowed_time$$ = new $APP.$cljs$core$Keyword$$(null, "max-allowed-time", "max-allowed-time", 836532131), $cljs$cst$5794$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_set_filter_vm$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-errors", "set-filter-vm", "sensei.frontend.admin.worker-errors/set-filter-vm", 
-1096930559), $cljs$cst$5616$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_stop$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-worker-queues", "stop", "sensei.frontend.admin.live-worker-queues/stop", 2072407114), $cljs$cst$5799$div_DOT_col_xl_6_DOT_mt_3$$ = new $APP.$cljs$core$Keyword$$(null, "div.col-xl-6.mt-3", "div.col-xl-6.mt-3", 1785182871), $cljs$cst$5587$avg_churn$$ = new $APP.$cljs$core$Keyword$$(null, "avg-churn", "avg-churn", -1222359171), $cljs$cst$5614$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_poll_for_live_queue_info$$ = 
new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.live-worker-queues", "poll-for-live-queue-info", "sensei.frontend.admin.live-worker-queues/poll-for-live-queue-info", 37588), $cljs$cst$5797$preemption_detected$$ = new $APP.$cljs$core$Keyword$$(null, "preemption-detected", "preemption-detected", -1411736023), $cljs$cst$5534$sensei_DOT_frontend_DOT_admin_DOT_feedback_SLASH_feedback$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.feedback", "feedback", "sensei.frontend.admin.feedback/feedback", 
974706446), $cljs$cst$5770$available_instances$$ = new $APP.$cljs$core$Keyword$$(null, "available-instances", "available-instances", 2069484630), $cljs$cst$5701$upload_stats$$ = new $APP.$cljs$core$Keyword$$(null, "upload-stats", "upload-stats", -1280684995), $cljs$cst$5753$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_selected_vouchers$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.voucher-funnel", "selected-vouchers", "sensei.frontend.admin.voucher-funnel/selected-vouchers", 
-538078347), $cljs$cst$5504$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_set_tmp_date_range$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.widget.date-range", "set-tmp-date-range", "sensei.frontend.widget.date-range/set-tmp-date-range", 425078244), $cljs$cst$5762$non_worker_queues$$ = new $APP.$cljs$core$Keyword$$(null, "non-worker-queues", "non-worker-queues", -380876513), $cljs$cst$5763$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_fast_queue$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.workers", 
"fast-queue", "sensei.frontend.admin.workers/fast-queue", 1315925719), $cljs$cst$5781$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_selected_queue$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.workers", "selected-queue", "sensei.frontend.admin.workers/selected-queue", -1419465359), $cljs$cst$5558$bg_danger$$ = new $APP.$cljs$core$Keyword$$(null, "bg-danger", "bg-danger", -1202475076), $cljs$cst$5581$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_trace_index$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", 
"user-trace-index", "sensei.frontend.admin.funnel/user-trace-index", 1355573606), $cljs$cst$5727$end_date$$ = new $APP.$cljs$core$Keyword$$(null, "end-date", "end-date", -208259642), $cljs$cst$5649$div_DOT_card_DOT_my_2_GT_div_DOT_card_body_DOT_admin_log$$ = new $APP.$cljs$core$Keyword$$(null, "div.card.my-2\x3ediv.card-body.admin-log", "div.card.my-2\x3ediv.card-body.admin-log", -389931254), $cljs$cst$5548$funnel$$ = new $APP.$cljs$core$Keyword$$(null, "funnel", "funnel", -1646441158), $cljs$cst$5772$last_heartbeat$$ = 
new $APP.$cljs$core$Keyword$$(null, "last-heartbeat", "last-heartbeat", -1270774717), $cljs$cst$5759$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_worker_queues$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.workers", "worker-queues", "sensei.frontend.admin.workers/worker-queues", -2011024932), $cljs$cst$5566$td_DOT_fw_bold$$ = new $APP.$cljs$core$Keyword$$(null, "td.fw-bold", "td.fw-bold", -245460641), $cljs$cst$5538$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_uid$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-trace", 
"uid", "sensei.frontend.admin.user-trace/uid", 309139283), $cljs$cst$5627$event_type$$ = new $APP.$cljs$core$Keyword$$(null, "event_type", "event_type", 1569866042), $cljs$cst$5734$span_DOT_ms_4$$ = new $APP.$cljs$core$Keyword$$(null, "span.ms-4", "span.ms-4", -900727440), $cljs$cst$5707$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_grouped_error_logs$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.user-errors", "grouped-error-logs", "sensei.frontend.admin.user-errors/grouped-error-logs", 
-1472820934), $cljs$cst$5635$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.worker-logs", "logs", "sensei.frontend.admin.worker-logs/logs", -618959826), $cljs$cst$5569$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_type$$ = new $APP.$cljs$core$Keyword$$("sensei.frontend.admin.funnel", "user-type", "sensei.frontend.admin.funnel/user-type", -549872214), $cljs$cst$5757$voucher_funnel$$ = new $APP.$cljs$core$Keyword$$(null, "voucher-funnel", 
"voucher-funnel", -1177871239), $cljs$cst$5810$admin_page$$ = new $APP.$cljs$core$Keyword$$(null, "admin-page", "admin-page", 638779734);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("admin");
$APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$("scheduler-2022-07-12 europe-west4-a web-server-20221103 europe-west4-a panda-proxy europe-west1-b playground europe-west1-b".split(" "));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5494$date_range$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$401$$, $p__70453_prefix$jscomp$28$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70453_prefix$jscomp$28$$, 0, null);
  $p__70453_prefix$jscomp$28$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70453_prefix$jscomp$28$$, 1, null);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$03$$($db$jscomp$401$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, $p__70453_prefix$jscomp$28$$, $cljs$cst$5496$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_from_date$$], null), $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($db$jscomp$401$$, 
  new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, $p__70453_prefix$jscomp$28$$, $cljs$cst$5497$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_initial_from_date$$], null))), $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$03$$($db$jscomp$401$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, 
  $p__70453_prefix$jscomp$28$$, $cljs$cst$5498$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_to_date$$], null), $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($db$jscomp$401$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, $p__70453_prefix$jscomp$28$$, $cljs$cst$5499$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_initial_to_date$$], null)))], 
  null);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5500$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_date_range$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$402$$, $p__70461_prefix$jscomp$29$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70461_prefix$jscomp$29$$, 0, null);
  $p__70461_prefix$jscomp$29$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70461_prefix$jscomp$29$$, 1, null);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($db$jscomp$402$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, $p__70461_prefix$jscomp$29$$, $cljs$cst$5501$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_from_date$$], null)), $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($db$jscomp$402$$, 
  new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, $p__70461_prefix$jscomp$29$$, $cljs$cst$5502$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_to_date$$], null))], null);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5503$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_form_date_range$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($p__70467_prefix$jscomp$30$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70467_prefix$jscomp$30$$, 0, null);
  $p__70467_prefix$jscomp$30$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70467_prefix$jscomp$30$$, 1, null);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $p__70467_prefix$jscomp$30$$], null)), $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5500$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_date_range$$, $p__70467_prefix$jscomp$30$$], null))], null);
}, function($p__70475_tmp_from$$) {
  var $to$jscomp$22_vec__70479$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70475_tmp_from$$, 0, null), $from$jscomp$20$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to$jscomp$22_vec__70479$$, 0, null);
  $to$jscomp$22_vec__70479$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to$jscomp$22_vec__70479$$, 1, null);
  var $tmp_to_vec__70482$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70475_tmp_from$$, 1, null);
  $p__70475_tmp_from$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($tmp_to_vec__70482$$, 0, null);
  $tmp_to_vec__70482$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($tmp_to_vec__70482$$, 1, null);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$core$truth_$$($p__70475_tmp_from$$) ? $p__70475_tmp_from$$ : $from$jscomp$20$$, $APP.$cljs$core$truth_$$($tmp_to_vec__70482$$) ? $tmp_to_vec__70482$$ : $to$jscomp$22_vec__70479$$], null);
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5504$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_set_tmp_date_range$$, function($db$jscomp$403$$, $p__70488_to$jscomp$23$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70488_to$jscomp$23$$, 0, null);
  var $prefix$jscomp$31$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70488_to$jscomp$23$$, 1, null), $from$jscomp$21$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70488_to$jscomp$23$$, 2, null);
  $p__70488_to$jscomp$23$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70488_to$jscomp$23$$, 3, null);
  return $APP.$cljs$core$update_in$$.$cljs$core$IFn$_invoke$arity$variadic$($db$jscomp$403$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, $prefix$jscomp$31$$], null), $APP.$cljs$core$assoc$$, $cljs$cst$5501$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_from_date$$, $from$jscomp$21$$, $cljs$cst$5502$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_to_date$$, 
  $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$p__70488_to$jscomp$23$$]));
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5505$set_initial_date_range$$, function($db$jscomp$404$$, $p__70495_to$jscomp$24$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70495_to$jscomp$24$$, 0, null);
  var $prefix$jscomp$32$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70495_to$jscomp$24$$, 1, null), $from$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70495_to$jscomp$24$$, 2, null);
  $p__70495_to$jscomp$24$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70495_to$jscomp$24$$, 3, null);
  return $APP.$cljs$core$update_in$$.$cljs$core$IFn$_invoke$arity$variadic$($db$jscomp$404$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, $prefix$jscomp$32$$], null), $APP.$cljs$core$assoc$$, $cljs$cst$5497$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_initial_from_date$$, $from$jscomp$22$$, $cljs$cst$5499$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_initial_to_date$$, 
  $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$p__70495_to$jscomp$24$$]));
});
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$cst$5506$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_update_date_range$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$re_frame$core$inject_cofx$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$cst$1138$tools_DOT_inject_SLASH_sub$$, function($p__70499_prefix$jscomp$33$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70499_prefix$jscomp$33$$, 0, null);
  $p__70499_prefix$jscomp$33$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70499_prefix$jscomp$33$$, 1, null);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5503$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_form_date_range$$, $p__70499_prefix$jscomp$33$$], null);
})], null), function($db$jscomp$405_p__70505$$, $p__70506_prefix$jscomp$34$$) {
  var $from$jscomp$23_map__70507__$1$$ = $APP.$cljs$core$__destructure_map$$($db$jscomp$405_p__70505$$);
  $db$jscomp$405_p__70505$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($from$jscomp$23_map__70507__$1$$, $APP.$cljs$cst$152$db$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70506_prefix$jscomp$34$$, 0, null);
  $p__70506_prefix$jscomp$34$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70506_prefix$jscomp$34$$, 1, null);
  var $to$jscomp$25_vec__70511$$ = $cljs$cst$5503$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_form_date_range$$.$cljs$core$IFn$_invoke$arity$1$($from$jscomp$23_map__70507__$1$$);
  $from$jscomp$23_map__70507__$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to$jscomp$25_vec__70511$$, 0, null);
  $to$jscomp$25_vec__70511$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to$jscomp$25_vec__70511$$, 1, null);
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$152$db$$, $APP.$cljs$core$update_in$$.$cljs$core$IFn$_invoke$arity$variadic$($db$jscomp$405_p__70505$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, $p__70506_prefix$jscomp$34$$], null), $APP.$cljs$core$assoc$$, $cljs$cst$5496$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_from_date$$, 
  $from$jscomp$23_map__70507__$1$$, $cljs$cst$5498$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_to_date$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$to$jscomp$25_vec__70511$$, $cljs$cst$5501$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_from_date$$, null, $cljs$cst$5502$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_to_date$$, null]))], null);
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5507$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_cancel_date_range$$, function($db$jscomp$406$$, $p__70514_prefix$jscomp$35$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70514_prefix$jscomp$35$$, 0, null);
  $p__70514_prefix$jscomp$35$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70514_prefix$jscomp$35$$, 1, null);
  return $APP.$cljs$core$update_in$$.$cljs$core$IFn$_invoke$arity$variadic$($db$jscomp$406$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5495$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_date_range$$, $p__70514_prefix$jscomp$35$$], null), $APP.$cljs$core$assoc$$, $cljs$cst$5501$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_from_date$$, null, $cljs$cst$5502$sensei_DOT_frontend_DOT_widget_DOT_date_range_SLASH_tmp_to_date$$, 
  $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([null]));
});
var $sensei$frontend$admin$game_analysis$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -6))), $sensei$frontend$admin$game_analysis$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), 1))), $sensei$frontend$admin$game_analysis$chart_size$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1047$height$$, 200], 
null), $sensei$frontend$admin$game_analysis$default_percentiles$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [50, 95, 99], null), $sensei$frontend$admin$game_analysis$colors$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, "failed #e00 50 #000 500 #35c 2500 #4b4 10000 #dc0".split(" "), null), $sensei$frontend$admin$game_analysis$max_allowed_seconds$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [50, 15, 500, 50, 2500, 120, 10000, 
240], null);
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5518$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_stats_by_day$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$2_vec__70883$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5513$analysis_stats$$], null))), $data$jscomp$260_from_date$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$2_vec__70883$$, 0, null);
    $to_date$jscomp$2_vec__70883$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$2_vec__70883$$, 1, null);
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($data$jscomp$260_from_date$jscomp$2$$) ? $to_date$jscomp$2_vec__70883$$ : $data$jscomp$260_from_date$jscomp$2$$) ? ($data$jscomp$260_from_date$jscomp$2$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5518$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_stats_by_day$$, 
    new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$3019$game_analysis$$, $cljs$cst$5519$stats_by_day$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$217$day$$, $APP.$cljs$cst$2055$desc$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
    4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$217$day$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $APP.$tools$date$__GT_day_str$$($to_date$jscomp$2_vec__70883$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$217$day$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $APP.$tools$date$__GT_day_str$$($data$jscomp$260_from_date$jscomp$2$$)], null)], null)], null)], null))), 
    $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$second$$, $data$jscomp$260_from_date$jscomp$2$$)) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5514$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_simple_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5518$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_stats_by_day$$], null), function($stats_by_day$$, $p__70896$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70896$$, 0, null);
  var $label$jscomp$71$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70896$$, 1, null), $getter$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70896$$, 2, null);
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$label$jscomp$71$$], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($day$jscomp$15_p__70905$$) {
    var $data$jscomp$261_map__70906__$1$$ = $APP.$cljs$core$__destructure_map$$($day$jscomp$15_p__70905$$);
    $day$jscomp$15_p__70905$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($data$jscomp$261_map__70906__$1$$, $APP.$cljs$cst$217$day$$);
    $data$jscomp$261_map__70906__$1$$ = $getter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $getter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($data$jscomp$261_map__70906__$1$$) : $getter$jscomp$1$$.call(null, $data$jscomp$261_map__70906__$1$$);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$15_p__70905$$, $data$jscomp$261_map__70906__$1$$], null);
  }, $stats_by_day$$));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5515$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_playout_time_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5518$sensei_DOT_frontend_DOT_admin_DOT_game_analysis_SLASH_stats_by_day$$], null), function($stats_by_day$jscomp$1$$, $p__70909$$) {
  var $_$jscomp$1782$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70909$$, 0, null), $playouts$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70909$$, 1, null), $fields$jscomp$9$$ = function() {
    return function $sensei$frontend$admin$game_analysis$iter__70914$$($s__70915$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (var $s__70915__$1$$ = $s__70915$$;;) {
          var $fs__5625__auto__$jscomp$5_temp__5823__auto__$jscomp$419$$ = $APP.$cljs$core$seq$$($s__70915__$1$$);
          if ($fs__5625__auto__$jscomp$5_temp__5823__auto__$jscomp$419$$) {
            var $xs__6383__auto__$jscomp$15$$ = $fs__5625__auto__$jscomp$5_temp__5823__auto__$jscomp$419$$, $f$jscomp$697$$ = $APP.$cljs$core$first$$($xs__6383__auto__$jscomp$15$$);
            if ($fs__5625__auto__$jscomp$5_temp__5823__auto__$jscomp$419$$ = $APP.$cljs$core$seq$$(function($s__70915__$1$jscomp$1$$, $f$jscomp$698$$, $xs__6383__auto__$jscomp$16$$, $temp__5823__auto__$jscomp$420$$, $vec__70910$jscomp$1$$, $_$jscomp$1783$$, $playouts$jscomp$4$$) {
              return function $sensei$frontend$admin$game_analysis$iter__70914_$_iter__70917$$($s__70918$$) {
                return new $APP.$cljs$core$LazySeq$$(null, function($s__70915__$1$jscomp$2$$, $f$jscomp$699$$) {
                  return function() {
                    for (;;) {
                      var $s__70918__$2_temp__5823__auto____$1$jscomp$48$$ = $APP.$cljs$core$seq$$($s__70918$$);
                      if ($s__70918__$2_temp__5823__auto____$1$jscomp$48$$) {
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__70918__$2_temp__5823__auto____$1$jscomp$48$$)) {
                          var $JSCompiler_inline_result$jscomp$959_c__5626__auto__$jscomp$139$$ = $APP.$cljs$core$_chunked_first$$($s__70918__$2_temp__5823__auto____$1$jscomp$48$$), $size__5627__auto__$jscomp$139$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$959_c__5626__auto__$jscomp$139$$), $b__70920_p$jscomp$174$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$139$$);
                          a: {
                            for (var $i__70919$jscomp$inline_4514$$ = 0;;) {
                              if ($i__70919$jscomp$inline_4514$$ < $size__5627__auto__$jscomp$139$$) {
                                var $p$jscomp$inline_4515$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$959_c__5626__auto__$jscomp$139$$, $i__70919$jscomp$inline_4514$$);
                                $b__70920_p$jscomp$174$$.add(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$f$jscomp$699$$, $p$jscomp$inline_4515$$], null));
                                $i__70919$jscomp$inline_4514$$ += 1;
                              } else {
                                $JSCompiler_inline_result$jscomp$959_c__5626__auto__$jscomp$139$$ = !0;
                                break a;
                              }
                            }
                            $JSCompiler_inline_result$jscomp$959_c__5626__auto__$jscomp$139$$ = void 0;
                          }
                          return $JSCompiler_inline_result$jscomp$959_c__5626__auto__$jscomp$139$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70920_p$jscomp$174$$), $sensei$frontend$admin$game_analysis$iter__70914_$_iter__70917$$($APP.$cljs$core$_chunked_rest$$($s__70918__$2_temp__5823__auto____$1$jscomp$48$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__70920_p$jscomp$174$$), null);
                        }
                        $b__70920_p$jscomp$174$$ = $APP.$cljs$core$first$$($s__70918__$2_temp__5823__auto____$1$jscomp$48$$);
                        return $APP.$cljs$core$cons$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$f$jscomp$699$$, $b__70920_p$jscomp$174$$], null), $sensei$frontend$admin$game_analysis$iter__70914_$_iter__70917$$($APP.$cljs$core$rest$$($s__70918__$2_temp__5823__auto____$1$jscomp$48$$)));
                      }
                      return null;
                    }
                  };
                }($s__70915__$1$jscomp$1$$, $f$jscomp$698$$, $xs__6383__auto__$jscomp$16$$, $temp__5823__auto__$jscomp$420$$, $vec__70910$jscomp$1$$, $_$jscomp$1783$$, $playouts$jscomp$4$$), null, null);
              };
            }($s__70915__$1$$, $f$jscomp$697$$, $xs__6383__auto__$jscomp$15$$, $fs__5625__auto__$jscomp$5_temp__5823__auto__$jscomp$419$$, $p__70909$$, $_$jscomp$1782$$, $playouts$jscomp$3$$)($sensei$frontend$admin$game_analysis$default_percentiles$$))) {
              return $APP.$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($fs__5625__auto__$jscomp$5_temp__5823__auto__$jscomp$419$$, $sensei$frontend$admin$game_analysis$iter__70914$$($APP.$cljs$core$rest$$($s__70915__$1$$)));
            }
            $s__70915__$1$$ = $APP.$cljs$core$rest$$($s__70915__$1$$);
          } else {
            return null;
          }
        }
      }, null, null);
    }(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($playouts$jscomp$3$$)], null));
  }(), $captions$jscomp$1$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p$jscomp$176_p__70941$$) {
    var $f$jscomp$700$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p$jscomp$176_p__70941$$, 0, null);
    $p$jscomp$176_p__70941$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p$jscomp$176_p__70941$$, 1, null);
    return "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($f$jscomp$700$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($p$jscomp$176_p__70941$$) + "%";
  }, $fields$jscomp$9$$);
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$($captions$jscomp$1$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__70946__$1_p__70945$$) {
    $map__70946__$1_p__70945$$ = $APP.$cljs$core$__destructure_map$$($map__70946__$1_p__70945$$);
    var $day$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70946__$1_p__70945$$, $APP.$cljs$cst$217$day$$), $data$jscomp$262$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70946__$1_p__70945$$, $APP.$cljs$cst$1194$playouts$$);
    return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$16$$], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p$jscomp$177_p__70947$$) {
      var $f$jscomp$701$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p$jscomp$177_p__70947$$, 0, null);
      $p$jscomp$177_p__70947$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p$jscomp$177_p__70947$$, 1, null);
      return $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$262$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$f$jscomp$701$$, $cljs$cst$5520$seconds_used$$, $p$jscomp$177_p__70947$$], null), 0);
    }, $fields$jscomp$9$$));
  }, $stats_by_day$jscomp$1$$));
}]));
$APP.$sensei$frontend$router$core$reg_page$$($APP.$cljs$cst$3019$game_analysis$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2101$h4$$, "Game Analysis Performance"], null), new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1777$div_DOT_row$$, new $APP.$cljs$core$PersistentVector$$(null, 
  3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2746$div_DOT_col_12$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $cljs$cst$5513$analysis_stats$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "50 playouts game performance"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$game_analysis$playout_time_graph$$, 50], null)], null)], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "500 playouts game performance"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$game_analysis$playout_time_graph$$, 500], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "2500 playouts game performance"], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$game_analysis$playout_time_graph$$, 2500], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "10000 playouts game performance"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$game_analysis$playout_time_graph$$, 10000], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Failed (or \x3e 30min)"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$game_analysis$percentage_graph$$, "failed", $APP.$cljs$cst$763$failed$$], null)], null)], null)], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/game-analysis", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Game Analysis", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $cljs$cst$5513$analysis_stats$$, $sensei$frontend$admin$game_analysis$initial_start_date$$, $sensei$frontend$admin$game_analysis$initial_end_date$$], null);
}], null)], null));
var $sensei$frontend$admin$domain_visits$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -7))), $sensei$frontend$admin$domain_visits$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), 1)));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5527$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_stayed_on_site_60_logs$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$3_vec__70752$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5521$domain_visits$$], null))), $data$jscomp$265_from_date$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$3_vec__70752$$, 0, null);
    $to_date$jscomp$3_vec__70752$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$3_vec__70752$$, 1, null);
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($data$jscomp$265_from_date$jscomp$3$$) ? $to_date$jscomp$3_vec__70752$$ : $data$jscomp$265_from_date$jscomp$3$$) ? ($data$jscomp$265_from_date$jscomp$3$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5527$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_stayed_on_site_60_logs$$, 
    new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$2051$users$$, $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$132$event$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $APP.$cljs$cst$1167$stayed_on_site$$], 
    null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $data$jscomp$265_from_date$jscomp$3$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $to_date$jscomp$3_vec__70752$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
    4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1163$seconds$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, 60], null)], null)], null)], null))), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$second$$, $data$jscomp$265_from_date$jscomp$3$$)) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5522$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_domain_visits_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5527$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_stayed_on_site_60_logs$$], null), function($logs_sorted_visits$$) {
  $logs_sorted_visits$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$second$$, $APP.$cljs$core$_GT_$$, $APP.$cljs$core$frequencies$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70769_SHARP_$$) {
    return $APP.$cljs$cst$1178$domain$$.$cljs$core$IFn$_invoke$arity$2$($p1__70769_SHARP_$$, "\x3cnot reported\x3e");
  }, $logs_sorted_visits$$)));
  var $total$jscomp$11$$ = $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$second$$, $logs_sorted_visits$$));
  return $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($count$jscomp$75_p__70780$$) {
    var $domain$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($count$jscomp$75_p__70780$$, 0, null);
    $count$jscomp$75_p__70780$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($count$jscomp$75_p__70780$$, 1, null);
    return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1178$domain$$, $domain$jscomp$5$$, $APP.$cljs$cst$645$count$$, $count$jscomp$75_p__70780$$, $APP.$cljs$cst$2252$percent$$, $APP.$tools$math$round_1$$($count$jscomp$75_p__70780$$ * 100 / $total$jscomp$11$$)], null);
  }, $logs_sorted_visits$$);
}]));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5528$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_raw_referral_logs$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$4_vec__70788$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5521$domain_visits$$], null))), $data$jscomp$266_from_date$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$4_vec__70788$$, 0, null);
    $to_date$jscomp$4_vec__70788$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$4_vec__70788$$, 1, null);
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($data$jscomp$266_from_date$jscomp$4$$) ? $to_date$jscomp$4_vec__70788$$ : $data$jscomp$266_from_date$jscomp$4$$) ? ($data$jscomp$266_from_date$jscomp$4$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5528$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_raw_referral_logs$$, 
    new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$2051$users$$, $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$132$event$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $APP.$cljs$cst$1155$referral$$], 
    null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $data$jscomp$266_from_date$jscomp$4$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $to_date$jscomp$4_vec__70788$$], null)], null)], null)], null))), 
    $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$second$$, $data$jscomp$266_from_date$jscomp$4$$)) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5524$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_raw_referral_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5528$sensei_DOT_frontend_DOT_admin_DOT_domain_visits_SLASH_raw_referral_logs$$], null), function($logs$jscomp$1$$) {
  return $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$second$$, $APP.$cljs$core$_GT_$$, $APP.$cljs$core$frequencies$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$1156$referrer$$, $logs$jscomp$1$$)));
}]));
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5529$page_views$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2101$h4$$, "Site visits by domain", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5525$small$$, " (at least 60s on site)"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $cljs$cst$5521$domain_visits$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5526$div_DOT_row_GT_div_DOT_col_lg_6$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$domain_visits$domain_visits_table$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2101$h4$$, "Raw referrals"], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$domain_visits$raw_referral_table$$], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/domain-visits", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Page View Statistics", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $cljs$cst$5521$domain_visits$$, $sensei$frontend$admin$domain_visits$initial_start_date$$, $sensei$frontend$admin$domain_visits$initial_end_date$$], null);
}], null)], null));
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$5530$delete_feedback$$, function($_$jscomp$1790_id$jscomp$290$$, $p__70457$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70457$$, 0, null);
  $_$jscomp$1790_id$jscomp$290$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70457$$, 1, null);
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$2491$firestore_SLASH_delete_doc$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4046$feedback$$, $_$jscomp$1790_id$jscomp$290$$], null)], null);
});
var $sensei$frontend$admin$logs_table$show_logs$$ = function $sensei$frontend$admin$logs_table$show_logs$$($var_args$jscomp$820$$) {
  switch(arguments.length) {
    case 1:
      return $sensei$frontend$admin$logs_table$show_logs$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $sensei$frontend$admin$logs_table$show_logs$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", arguments.length].join(""));
  }
};
$sensei$frontend$admin$logs_table$show_logs$$.$cljs$core$IFn$_invoke$arity$1$ = function($data$jscomp$267$$) {
  return $sensei$frontend$admin$logs_table$show_logs$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Date", "Event"], null), $data$jscomp$267$$);
};
$sensei$frontend$admin$logs_table$show_logs$$.$cljs$core$IFn$_invoke$arity$2$ = function($headers$jscomp$10$$, $data$jscomp$268$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1634$min_height$$, "100vh"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2732$table_DOT_table_DOT_table_sm_DOT_table_striped$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1342$max_width$$, "100%"], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1258$thead$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, function() {
    return function $sensei$frontend$admin$logs_table$iter__209355$$($s__209356$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__209356__$2_temp__5823__auto__$jscomp$427$$ = $APP.$cljs$core$seq$$($s__209356$$);
          if ($s__209356__$2_temp__5823__auto__$jscomp$427$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__209356__$2_temp__5823__auto__$jscomp$427$$)) {
              var $JSCompiler_inline_result$jscomp$962_c__5626__auto__$jscomp$144$$ = $APP.$cljs$core$_chunked_first$$($s__209356__$2_temp__5823__auto__$jscomp$427$$), $size__5627__auto__$jscomp$144$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$962_c__5626__auto__$jscomp$144$$), $b__209358_header$jscomp$13$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$144$$);
              a: {
                for (var $i__209357$jscomp$inline_4529$$ = 0;;) {
                  if ($i__209357$jscomp$inline_4529$$ < $size__5627__auto__$jscomp$144$$) {
                    var $header$jscomp$inline_4530_x$jscomp$inline_6689$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$962_c__5626__auto__$jscomp$144$$, $i__209357$jscomp$inline_4529$$), $b$jscomp$inline_6688$$ = $b__209358_header$jscomp$13$$;
                    $header$jscomp$inline_4530_x$jscomp$inline_6689$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, $header$jscomp$inline_4530_x$jscomp$inline_6689$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $header$jscomp$inline_4530_x$jscomp$inline_6689$$], null));
                    $b$jscomp$inline_6688$$.add($header$jscomp$inline_4530_x$jscomp$inline_6689$$);
                    $i__209357$jscomp$inline_4529$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$962_c__5626__auto__$jscomp$144$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$962_c__5626__auto__$jscomp$144$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$962_c__5626__auto__$jscomp$144$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__209358_header$jscomp$13$$), $sensei$frontend$admin$logs_table$iter__209355$$($APP.$cljs$core$_chunked_rest$$($s__209356__$2_temp__5823__auto__$jscomp$427$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__209358_header$jscomp$13$$), null);
            }
            $b__209358_header$jscomp$13$$ = $APP.$cljs$core$first$$($s__209356__$2_temp__5823__auto__$jscomp$427$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2733$th$$, $b__209358_header$jscomp$13$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__209358_header$jscomp$13$$], null)), $sensei$frontend$admin$logs_table$iter__209355$$($APP.$cljs$core$rest$$($s__209356__$2_temp__5823__auto__$jscomp$427$$)));
          }
          return null;
        }
      }, null, null);
    }($headers$jscomp$10$$);
  }()], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1263$tbody$$, function() {
    return function $sensei$frontend$admin$logs_table$iter__209359$$($s__209360$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$428$$ = $APP.$cljs$core$seq$$($s__209360$$);
          if ($temp__5823__auto__$jscomp$428$$) {
            var $s__209360__$2$$ = $temp__5823__auto__$jscomp$428$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__209360__$2$$)) {
              var $c__5626__auto__$jscomp$145$$ = $APP.$cljs$core$_chunked_first$$($s__209360__$2$$), $size__5627__auto__$jscomp$145$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$145$$), $b__209362$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$145$$);
              return function() {
                for (var $i__209361$$ = 0;;) {
                  if ($i__209361$$ < $size__5627__auto__$jscomp$145$$) {
                    var $vec__209365$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$145$$, $i__209361$$), $seq__209366$$ = $APP.$cljs$core$seq$$($vec__209365$$), $first__209367$$ = $APP.$cljs$core$first$$($seq__209366$$), $seq__209366__$1$$ = $APP.$cljs$core$next$$($seq__209366$$), $date$jscomp$59$$ = $first__209367$$, $cells$jscomp$1$$ = $seq__209366__$1$$;
                    $APP.$cljs$core$chunk_append$$($b__209362$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5536$td_DOT_text_nowrap$$, $APP.$tools$date$__GT_str$$($date$jscomp$59$$)], null), $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 
                    1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$349$_LT__GT_$$], null), function() {
                      return function($i__209361$jscomp$1$$, $vec__209365$jscomp$1$$, $seq__209366$jscomp$1$$, $first__209367$jscomp$1$$, $seq__209366__$1$jscomp$1$$, $date$jscomp$60$$, $cells$jscomp$2$$, $c__5626__auto__$jscomp$146$$, $size__5627__auto__$jscomp$146$$, $b__209362$jscomp$1$$, $s__209360__$2$jscomp$1$$, $temp__5823__auto__$jscomp$429$$) {
                        return function $sensei$frontend$admin$logs_table$iter__209359_$_iter__209368$$($s__209369$$) {
                          return new $APP.$cljs$core$LazySeq$$(null, function() {
                            return function() {
                              for (;;) {
                                var $s__209369__$2_temp__5823__auto____$1$jscomp$49$$ = $APP.$cljs$core$seq$$($s__209369$$);
                                if ($s__209369__$2_temp__5823__auto____$1$jscomp$49$$) {
                                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__209369__$2_temp__5823__auto____$1$jscomp$49$$)) {
                                    var $JSCompiler_inline_result$jscomp$963_c__5626__auto____$1$jscomp$9$$ = $APP.$cljs$core$_chunked_first$$($s__209369__$2_temp__5823__auto____$1$jscomp$49$$), $size__5627__auto____$1$jscomp$9$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$963_c__5626__auto____$1$jscomp$9$$), $b__209371_cell$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$9$$);
                                    a: {
                                      for (var $i__209370$jscomp$inline_4532$$ = 0;;) {
                                        if ($i__209370$jscomp$inline_4532$$ < $size__5627__auto____$1$jscomp$9$$) {
                                          var $cell$jscomp$inline_4533$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$963_c__5626__auto____$1$jscomp$9$$, $i__209370$jscomp$inline_4532$$);
                                          $b__209371_cell$$.add(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $cell$jscomp$inline_4533$$], null));
                                          $i__209370$jscomp$inline_4532$$ += 1;
                                        } else {
                                          $JSCompiler_inline_result$jscomp$963_c__5626__auto____$1$jscomp$9$$ = !0;
                                          break a;
                                        }
                                      }
                                      $JSCompiler_inline_result$jscomp$963_c__5626__auto____$1$jscomp$9$$ = void 0;
                                    }
                                    return $JSCompiler_inline_result$jscomp$963_c__5626__auto____$1$jscomp$9$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__209371_cell$$), $sensei$frontend$admin$logs_table$iter__209359_$_iter__209368$$($APP.$cljs$core$_chunked_rest$$($s__209369__$2_temp__5823__auto____$1$jscomp$49$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__209371_cell$$), null);
                                  }
                                  $b__209371_cell$$ = $APP.$cljs$core$first$$($s__209369__$2_temp__5823__auto____$1$jscomp$49$$);
                                  return $APP.$cljs$core$cons$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $b__209371_cell$$], null), $sensei$frontend$admin$logs_table$iter__209359_$_iter__209368$$($APP.$cljs$core$rest$$($s__209369__$2_temp__5823__auto____$1$jscomp$49$$)));
                                }
                                return null;
                              }
                            };
                          }($i__209361$jscomp$1$$, $vec__209365$jscomp$1$$, $seq__209366$jscomp$1$$, $first__209367$jscomp$1$$, $seq__209366__$1$jscomp$1$$, $date$jscomp$60$$, $cells$jscomp$2$$, $c__5626__auto__$jscomp$146$$, $size__5627__auto__$jscomp$146$$, $b__209362$jscomp$1$$, $s__209360__$2$jscomp$1$$, $temp__5823__auto__$jscomp$429$$), null, null);
                        };
                      }($i__209361$$, $vec__209365$$, $seq__209366$$, $first__209367$$, $seq__209366__$1$$, $date$jscomp$59$$, $cells$jscomp$1$$, $c__5626__auto__$jscomp$145$$, $size__5627__auto__$jscomp$145$$, $b__209362$$, $s__209360__$2$$, $temp__5823__auto__$jscomp$428$$)($cells$jscomp$1$$);
                    }())], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$date$jscomp$59$$, $cells$jscomp$1$$], null)], null)));
                    $i__209361$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__209362$$), $sensei$frontend$admin$logs_table$iter__209359$$($APP.$cljs$core$_chunked_rest$$($s__209360__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__209362$$), null);
            }
            var $vec__209376$$ = $APP.$cljs$core$first$$($s__209360__$2$$), $seq__209377$$ = $APP.$cljs$core$seq$$($vec__209376$$), $first__209378$$ = $APP.$cljs$core$first$$($seq__209377$$), $seq__209377__$1$$ = $APP.$cljs$core$next$$($seq__209377$$), $date$jscomp$58$$ = $first__209378$$, $cells$$ = $seq__209377__$1$$;
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1253$tr$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5536$td_DOT_text_nowrap$$, $APP.$tools$date$__GT_str$$($date$jscomp$58$$)], null), $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
            [$APP.$cljs$cst$349$_LT__GT_$$], null), function() {
              return function() {
                return function $sensei$frontend$admin$logs_table$iter__209359_$_iter__209379$$($s__209380$$) {
                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                    for (;;) {
                      var $s__209380__$2_temp__5823__auto____$1$jscomp$50$$ = $APP.$cljs$core$seq$$($s__209380$$);
                      if ($s__209380__$2_temp__5823__auto____$1$jscomp$50$$) {
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__209380__$2_temp__5823__auto____$1$jscomp$50$$)) {
                          var $JSCompiler_inline_result$jscomp$964_c__5626__auto__$jscomp$148$$ = $APP.$cljs$core$_chunked_first$$($s__209380__$2_temp__5823__auto____$1$jscomp$50$$), $size__5627__auto__$jscomp$148$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$964_c__5626__auto__$jscomp$148$$), $b__209382_cell$jscomp$2$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$148$$);
                          a: {
                            for (var $i__209381$jscomp$inline_4535$$ = 0;;) {
                              if ($i__209381$jscomp$inline_4535$$ < $size__5627__auto__$jscomp$148$$) {
                                var $cell$jscomp$inline_4536$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$964_c__5626__auto__$jscomp$148$$, $i__209381$jscomp$inline_4535$$);
                                $b__209382_cell$jscomp$2$$.add(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $cell$jscomp$inline_4536$$], null));
                                $i__209381$jscomp$inline_4535$$ += 1;
                              } else {
                                $JSCompiler_inline_result$jscomp$964_c__5626__auto__$jscomp$148$$ = !0;
                                break a;
                              }
                            }
                            $JSCompiler_inline_result$jscomp$964_c__5626__auto__$jscomp$148$$ = void 0;
                          }
                          return $JSCompiler_inline_result$jscomp$964_c__5626__auto__$jscomp$148$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__209382_cell$jscomp$2$$), $sensei$frontend$admin$logs_table$iter__209359_$_iter__209379$$($APP.$cljs$core$_chunked_rest$$($s__209380__$2_temp__5823__auto____$1$jscomp$50$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__209382_cell$jscomp$2$$), null);
                        }
                        $b__209382_cell$jscomp$2$$ = $APP.$cljs$core$first$$($s__209380__$2_temp__5823__auto____$1$jscomp$50$$);
                        return $APP.$cljs$core$cons$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2734$td$$, $b__209382_cell$jscomp$2$$], null), $sensei$frontend$admin$logs_table$iter__209359_$_iter__209379$$($APP.$cljs$core$rest$$($s__209380__$2_temp__5823__auto____$1$jscomp$50$$)));
                      }
                      return null;
                    }
                  }, null, null);
                };
              }($vec__209376$$, $seq__209377$$, $first__209378$$, $seq__209377__$1$$, $date$jscomp$58$$, $cells$$, $s__209360__$2$$, $temp__5823__auto__$jscomp$428$$)($cells$$);
            }())], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$date$jscomp$58$$, $cells$$], null)], null)), $sensei$frontend$admin$logs_table$iter__209359$$($APP.$cljs$core$rest$$($s__209360__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($APP.$cljs$core$distinct$cljs$0core$0IFn$0_invoke$0arity$01$$($data$jscomp$268$$));
  }()], null)], null)], null);
};
$sensei$frontend$admin$logs_table$show_logs$$.$cljs$lang$maxFixedArity$ = 2;
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5538$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_uid$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$407$$) {
  return $cljs$cst$5538$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_uid$$.$cljs$core$IFn$_invoke$arity$1$($db$jscomp$407$$);
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5542$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_set_uid$$, function($db$jscomp$408$$, $p__70540_uid$jscomp$220$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70540_uid$jscomp$220$$, 0, null);
  $p__70540_uid$jscomp$220$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70540_uid$jscomp$220$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$408$$, $cljs$cst$5538$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_uid$$, $p__70540_uid$jscomp$220$$);
});
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5537$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_input_uid$$, function($db_state$jscomp$7$$) {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $or__5142__auto__$jscomp$525$$ = $cljs$cst$5537$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_input_uid$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$_deref$$($db_state$jscomp$7$$));
    return $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$525$$) ? $or__5142__auto__$jscomp$525$$ : $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5538$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_uid$$], null)));
  });
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5541$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_set_input_uid$$, function($db$jscomp$409$$, $p__70546_uid$jscomp$221$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70546_uid$jscomp$221$$, 0, null);
  $p__70546_uid$jscomp$221$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70546_uid$jscomp$221$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$409$$, $cljs$cst$5537$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_input_uid$$, $p__70546_uid$jscomp$221$$);
});
var $sensei$frontend$admin$user_trace$extract_event$$, $method_table__5747__auto__$jscomp$inline_6697$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $prefer_table__5748__auto__$jscomp$inline_6698$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $method_cache__5749__auto__$jscomp$inline_6699$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), 
$cached_hierarchy__5750__auto__$jscomp$inline_6700$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $hierarchy__5751__auto__$jscomp$inline_6701$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$cst$297$hierarchy$$, $APP.$cljs$core$get_global_hierarchy$$.$cljs$core$IFn$_invoke$arity$0$ ? $APP.$cljs$core$get_global_hierarchy$$.$cljs$core$IFn$_invoke$arity$0$() : $APP.$cljs$core$get_global_hierarchy$$.call(null));
$sensei$frontend$admin$user_trace$extract_event$$ = new $APP.$cljs$core$MultiFn$$($APP.$cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$("sensei.frontend.admin.user-trace", "extract-event"), $APP.$cljs$cst$132$event$$, $hierarchy__5751__auto__$jscomp$inline_6701$$, $method_table__5747__auto__$jscomp$inline_6697$$, $prefer_table__5748__auto__$jscomp$inline_6698$$, $method_cache__5749__auto__$jscomp$inline_6699$$, $cached_hierarchy__5750__auto__$jscomp$inline_6700$$);
$sensei$frontend$admin$user_trace$extract_event$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$298$default$$, function($event$jscomp$91$$) {
  return $APP.$cljs$cst$132$event$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$91$$);
});
$sensei$frontend$admin$user_trace$extract_event$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$1167$stayed_on_site$$, function($map__70565__$1_p__70564_seconds$jscomp$6$$) {
  $map__70565__$1_p__70564_seconds$jscomp$6$$ = $APP.$cljs$core$__destructure_map$$($map__70565__$1_p__70564_seconds$jscomp$6$$);
  $map__70565__$1_p__70564_seconds$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70565__$1_p__70564_seconds$jscomp$6$$, $APP.$cljs$cst$1163$seconds$$);
  return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($map__70565__$1_p__70564_seconds$jscomp$6$$, 0) ? "load site" : null;
});
$sensei$frontend$admin$user_trace$extract_event$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$1162$stayed_on_page$$, function($JSCompiler_temp$jscomp$965_JSCompiler_temp_const$jscomp$968_p__70567_seconds$jscomp$7$$) {
  var $JSCompiler_inline_result$jscomp$969_map__70572__$1_user_agent$jscomp$inline_4540$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_temp$jscomp$965_JSCompiler_temp_const$jscomp$968_p__70567_seconds$jscomp$7$$);
  $JSCompiler_temp$jscomp$965_JSCompiler_temp_const$jscomp$968_p__70567_seconds$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_inline_result$jscomp$969_map__70572__$1_user_agent$jscomp$inline_4540$$, $APP.$cljs$cst$1163$seconds$$);
  var $JSCompiler_temp_const$jscomp$967_path$jscomp$164$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_inline_result$jscomp$969_map__70572__$1_user_agent$jscomp$inline_4540$$, $APP.$cljs$cst$83$path$$);
  if ($APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$965_JSCompiler_temp_const$jscomp$968_p__70567_seconds$jscomp$7$$, 0)) {
    $JSCompiler_temp$jscomp$965_JSCompiler_temp_const$jscomp$968_p__70567_seconds$jscomp$7$$ = "visited: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp_const$jscomp$967_path$jscomp$164$$);
    $JSCompiler_temp_const$jscomp$967_path$jscomp$164$$ = $APP.$cljs$core$str$$;
    var $JSCompiler_temp_const$jscomp$966$$ = $JSCompiler_temp_const$jscomp$967_path$jscomp$164$$.$cljs$core$IFn$_invoke$arity$1$, $map__70557__$1$jscomp$inline_4539_pixel_ratio$jscomp$inline_4543$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_inline_result$jscomp$969_map__70572__$1_user_agent$jscomp$inline_4540$$);
    $JSCompiler_inline_result$jscomp$969_map__70572__$1_user_agent$jscomp$inline_4540$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70557__$1$jscomp$inline_4539_pixel_ratio$jscomp$inline_4543$$, $APP.$cljs$cst$1174$user_agent$$);
    var $screen__$1$jscomp$inline_4541$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70557__$1$jscomp$inline_4539_pixel_ratio$jscomp$inline_4543$$, $APP.$cljs$cst$1175$screen$$), $window__$1$jscomp$inline_4542$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70557__$1$jscomp$inline_4539_pixel_ratio$jscomp$inline_4543$$, $APP.$cljs$cst$1176$window$$);
    $map__70557__$1$jscomp$inline_4539_pixel_ratio$jscomp$inline_4543$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70557__$1$jscomp$inline_4539_pixel_ratio$jscomp$inline_4543$$, $APP.$cljs$cst$1177$pixel_ratio$$);
    $JSCompiler_inline_result$jscomp$969_map__70572__$1_user_agent$jscomp$inline_4540$$ = $APP.$cljs$core$truth_$$($JSCompiler_inline_result$jscomp$969_map__70572__$1_user_agent$jscomp$inline_4540$$) ? " ------- Browser: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$969_map__70572__$1_user_agent$jscomp$inline_4540$$) + " - Screen: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($screen__$1$jscomp$inline_4541$$) + " - Window: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($window__$1$jscomp$inline_4542$$) + 
    " - Pixel ratio: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($map__70557__$1$jscomp$inline_4539_pixel_ratio$jscomp$inline_4543$$) : null;
    $JSCompiler_temp$jscomp$965_JSCompiler_temp_const$jscomp$968_p__70567_seconds$jscomp$7$$ += $JSCompiler_temp_const$jscomp$966$$.call($JSCompiler_temp_const$jscomp$967_path$jscomp$164$$, $JSCompiler_inline_result$jscomp$969_map__70572__$1_user_agent$jscomp$inline_4540$$);
  } else {
    $JSCompiler_temp$jscomp$965_JSCompiler_temp_const$jscomp$968_p__70567_seconds$jscomp$7$$ = null;
  }
  return $JSCompiler_temp$jscomp$965_JSCompiler_temp_const$jscomp$968_p__70567_seconds$jscomp$7$$;
});
$sensei$frontend$admin$user_trace$extract_event$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $cljs$cst$5545$tutorial_visible$$, function($map__70579__$1_p__70578_tutorial_key$$) {
  $map__70579__$1_p__70578_tutorial_key$$ = $APP.$cljs$core$__destructure_map$$($map__70579__$1_p__70578_tutorial_key$$);
  $map__70579__$1_p__70578_tutorial_key$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__70579__$1_p__70578_tutorial_key$$, $APP.$cljs$cst$3761$tutorial_key$$);
  return $APP.$cljs$core$truth_$$($map__70579__$1_p__70578_tutorial_key$$) ? "tutorial: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$name$$($map__70579__$1_p__70578_tutorial_key$$)) : null;
});
$sensei$frontend$admin$user_trace$extract_event$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$63$error$$, function($event$jscomp$93$$) {
  return "error: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$27$message$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$93$$));
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5544$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_detailed_user_logs$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($p__70583_uid$jscomp$222$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70583_uid$jscomp$222$$, 0, null);
  $p__70583_uid$jscomp$222$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70583_uid$jscomp$222$$, 1, null);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5544$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_detailed_user_logs$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$2051$users$$, $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$722$uid$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $p__70583_uid$jscomp$222$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2055$desc$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$695$limit$$, 300], null)], null)], null)], null)), $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5546$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_detailed_anonymous_logs$$, 
  new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$2051$users$$, $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1115$browser_id$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $p__70583_uid$jscomp$222$$], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2055$desc$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$695$limit$$, 300], null)], null)], null)], null))], null);
}, function($anonymous_p__70589$$) {
  var $users$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($anonymous_p__70589$$, 0, null);
  $anonymous_p__70589$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($anonymous_p__70589$$, 1, null);
  return $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$second$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$juxt$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$cst$1017$timestamp$$, $sensei$frontend$admin$user_trace$extract_event$$), $APP.$cljs$core$second$$), $APP.$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($users$jscomp$1$$, $anonymous_p__70589$$)));
}]));
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5547$user_trace$$, function() {
  var $uid$jscomp$219$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5538$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_uid$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5543$main_DOT_my_container$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3366$h1$$, "User trace", $APP.$cljs$core$truth_$$($uid$jscomp$219$$) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5525$small$$, " for ", $uid$jscomp$219$$], null) : null], null), 
  new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$user_trace$uid_input$$], null), $APP.$cljs$core$truth_$$($uid$jscomp$219$$) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$logs_table$show_logs$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5544$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_detailed_user_logs$$, 
  $uid$jscomp$219$$], null)))], null)], null) : null], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/user-trace", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "User Trace", $APP.$cljs$cst$139$start$$, function($params$jscomp$124_temp__5823__auto__$jscomp$432$$) {
  $params$jscomp$124_temp__5823__auto__$jscomp$432$$ = $APP.$cljs$cst$722$uid$$.$cljs$core$IFn$_invoke$arity$1$($params$jscomp$124_temp__5823__auto__$jscomp$432$$);
  return $APP.$cljs$core$truth_$$($params$jscomp$124_temp__5823__auto__$jscomp$432$$) ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5542$sensei_DOT_frontend_DOT_admin_DOT_user_trace_SLASH_set_uid$$, $params$jscomp$124_temp__5823__auto__$jscomp$432$$], null) : null;
}], null)], null));
var $sensei$frontend$admin$funnel$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -7))), $sensei$frontend$admin$funnel$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -5))), $sensei$frontend$admin$funnel$all_funnel_groups$$ = new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, "General;Stayed on site;Stayed on game page;Tutorial;Uploads;Problems".split(";"), 
null), $sensei$frontend$admin$funnel$group_anchors$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 6, ["General", $APP.$cljs$cst$2023$total$$, "Stayed on site", $APP.$cljs$cst$2023$total$$, "Stayed on game page", $APP.$cljs$cst$2023$total$$, "Problems", $APP.$cljs$cst$873$registration$$, "Tutorial", $cljs$cst$5549$stayed_on_page_game_0$$, "Uploads", $APP.$cljs$cst$873$registration$$], null);
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5569$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_type$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$410$$) {
  return $cljs$cst$5569$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_type$$.$cljs$core$IFn$_invoke$arity$2$($db$jscomp$410$$, $APP.$cljs$cst$2298$new$$);
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5570$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_user_type$$, function($db$jscomp$411$$, $p__70966_user_type$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70966_user_type$$, 0, null);
  $p__70966_user_type$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70966_user_type$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$411$$, $cljs$cst$5569$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_type$$, $p__70966_user_type$$);
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5571$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_language$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$412$$) {
  return $cljs$cst$5571$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_language$$.$cljs$core$IFn$_invoke$arity$2$($db$jscomp$412$$, $APP.$cljs$cst$1093$all$$);
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5572$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_user_language$$, function($db$jscomp$413$$, $p__70976_user_language$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70976_user_language$$, 0, null);
  $p__70976_user_language$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70976_user_language$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$413$$, $cljs$cst$5571$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_language$$, $p__70976_user_language$$);
});
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5580$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_fetch_users$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $filters_vec__71014$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5548$funnel$$], null))), $data$jscomp$278_from_date$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($filters_vec__71014$$, 0, null), $to_date$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($filters_vec__71014$$, 
    1, null), $user_type$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5569$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_type$$], null))), $user_language$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
    [$cljs$cst$5571$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_language$$], null)));
    $filters_vec__71014$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5550$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_filters$$], null)));
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($data$jscomp$278_from_date$jscomp$5$$) ? $to_date$jscomp$5$$ : $data$jscomp$278_from_date$jscomp$5$$) ? ($data$jscomp$278_from_date$jscomp$5$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5580$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_fetch_users$$, 
    new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5548$funnel$$, $APP.$cljs$cst$28$data$$, $APP.$cljs$cst$2051$users$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $cljs$cst$5583$stayed_on_site_0$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $to_date$jscomp$5$$], null), 
    new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $cljs$cst$5583$stayed_on_site_0$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $data$jscomp$278_from_date$jscomp$5$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $cljs$cst$5583$stayed_on_site_0$$, $APP.$cljs$cst$2149$asc$$], null)], null)], null)], null))), $APP.$cljs$core$filterv$$($APP.$cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$2$($sensei$frontend$admin$funnel$matches_filters_QMARK_$$, 
    $filters_vec__71014$$), $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__71019_registration$jscomp$1$$) {
      var $map__71020__$1_stayed_on_site_0$$ = $APP.$cljs$core$__destructure_map$$($p__71019_registration$jscomp$1$$);
      $p__71019_registration$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71020__$1_stayed_on_site_0$$, $APP.$cljs$cst$873$registration$$);
      $map__71020__$1_stayed_on_site_0$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71020__$1_stayed_on_site_0$$, $cljs$cst$5583$stayed_on_site_0$$);
      var $or__5142__auto__$jscomp$529_or__5142__auto____$1$jscomp$65$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($user_type$jscomp$1$$, $APP.$cljs$cst$1093$all$$);
      return $or__5142__auto__$jscomp$529_or__5142__auto____$1$jscomp$65$$ ? $or__5142__auto__$jscomp$529_or__5142__auto____$1$jscomp$65$$ : ($or__5142__auto__$jscomp$529_or__5142__auto____$1$jscomp$65$$ = $APP.$cljs$core$not$$($p__71019_registration$jscomp$1$$)) ? $or__5142__auto__$jscomp$529_or__5142__auto____$1$jscomp$65$$ : $APP.$tools$date$before_QMARK_$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$map__71020__$1_stayed_on_site_0$$, 
      $p__71019_registration$jscomp$1$$]));
    }, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($language$jscomp$32_map__71031__$1_p__71026$$) {
      $language$jscomp$32_map__71031__$1_p__71026$$ = $APP.$cljs$core$__destructure_map$$($language$jscomp$32_map__71031__$1_p__71026$$);
      $language$jscomp$32_map__71031__$1_p__71026$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($language$jscomp$32_map__71031__$1_p__71026$$, $APP.$cljs$cst$1180$language$$, $APP.$cljs$cst$413$EN$$);
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($user_language$jscomp$1$$, $APP.$cljs$cst$1093$all$$) || $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($language$jscomp$32_map__71031__$1_p__71026$$, $user_language$jscomp$1$$);
    }, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71032_user$jscomp$17$$) {
      var $G__71036__$1_G__71036__$2_JSCompiler_temp$jscomp$955_user_id$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71032_user$jscomp$17$$, 0, null);
      $p__71032_user$jscomp$17$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71032_user$jscomp$17$$, 1, null);
      $G__71036__$1_G__71036__$2_JSCompiler_temp$jscomp$955_user_id$$ = $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($p__71032_user$jscomp$17$$, $cljs$cst$5573$user_id$$, $G__71036__$1_G__71036__$2_JSCompiler_temp$jscomp$955_user_id$$);
      if ($APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$1156$referrer$$.$cljs$core$IFn$_invoke$arity$1$($p__71032_user$jscomp$17$$), "panda-btn")) {
        var $JSCompiler_temp_const$jscomp$956$$ = $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$;
        var $JSCompiler_inline_result$jscomp$958_date$jscomp$inline_4571$$ = $cljs$cst$5583$stayed_on_site_0$$.$cljs$core$IFn$_invoke$arity$1$($p__71032_user$jscomp$17$$);
        $JSCompiler_inline_result$jscomp$958_date$jscomp$inline_4571$$ = (0,$APP.$module$node_modules$dayjs$dayjs_min$$)($JSCompiler_inline_result$jscomp$958_date$jscomp$inline_4571$$).add(1, "seconds").toDate();
        $G__71036__$1_G__71036__$2_JSCompiler_temp$jscomp$955_user_id$$ = $JSCompiler_temp_const$jscomp$956$$.call($APP.$cljs$core$assoc$$, $G__71036__$1_G__71036__$2_JSCompiler_temp$jscomp$955_user_id$$, $APP.$cljs$cst$873$registration$$, $JSCompiler_inline_result$jscomp$958_date$jscomp$inline_4571$$);
      }
      return $APP.$cljs$core$not$$($APP.$cljs$cst$1156$referrer$$.$cljs$core$IFn$_invoke$arity$1$($p__71032_user$jscomp$17$$)) ? $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__71036__$1_G__71036__$2_JSCompiler_temp$jscomp$955_user_id$$, $APP.$cljs$cst$1156$referrer$$, "None") : $G__71036__$1_G__71036__$2_JSCompiler_temp$jscomp$955_user_id$$;
    }, $data$jscomp$278_from_date$jscomp$5$$))))) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5563$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_stats$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5580$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_fetch_users$$], null), function($new_users$$) {
  var $referrers$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$first$$, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$second$$, $APP.$cljs$core$_GT_$$, $APP.$cljs$core$frequencies$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$1156$referrer$$, $new_users$$))));
  return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["All Users", $sensei$frontend$admin$funnel$calc_stats$$($new_users$$)], null)], null), function() {
    return function $sensei$frontend$admin$funnel$iter__71079$$($s__71080$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$446$$ = $APP.$cljs$core$seq$$($s__71080$$);
          if ($temp__5823__auto__$jscomp$446$$) {
            var $s__71080__$2$$ = $temp__5823__auto__$jscomp$446$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71080__$2$$)) {
              var $c__5626__auto__$jscomp$162$$ = $APP.$cljs$core$_chunked_first$$($s__71080__$2$$), $size__5627__auto__$jscomp$162$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$162$$), $b__71082$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$162$$);
              return function() {
                for (var $i__71081$$ = 0;;) {
                  if ($i__71081$$ < $size__5627__auto__$jscomp$162$$) {
                    var $referrer$jscomp$11$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$162$$, $i__71081$$);
                    $APP.$cljs$core$chunk_append$$($b__71082$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$referrer$jscomp$11$$, $sensei$frontend$admin$funnel$calc_stats$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($i__71081$jscomp$1$$, $referrer$jscomp$12$$) {
                      return function($user$jscomp$19$$) {
                        return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$1156$referrer$$.$cljs$core$IFn$_invoke$arity$1$($user$jscomp$19$$), $referrer$jscomp$12$$);
                      };
                    }($i__71081$$, $referrer$jscomp$11$$, $c__5626__auto__$jscomp$162$$, $size__5627__auto__$jscomp$162$$, $b__71082$$, $s__71080__$2$$, $temp__5823__auto__$jscomp$446$$, $referrers$$), $new_users$$))], null));
                    $i__71081$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71082$$), $sensei$frontend$admin$funnel$iter__71079$$($APP.$cljs$core$_chunked_rest$$($s__71080__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71082$$), null);
            }
            var $referrer$jscomp$10$$ = $APP.$cljs$core$first$$($s__71080__$2$$);
            return $APP.$cljs$core$cons$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$referrer$jscomp$10$$, $sensei$frontend$admin$funnel$calc_stats$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($referrer$jscomp$13$$) {
              return function($user$jscomp$20$$) {
                return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$1156$referrer$$.$cljs$core$IFn$_invoke$arity$1$($user$jscomp$20$$), $referrer$jscomp$13$$);
              };
            }($referrer$jscomp$10$$, $s__71080__$2$$, $temp__5823__auto__$jscomp$446$$, $referrers$$), $new_users$$))], null), $sensei$frontend$admin$funnel$iter__71079$$($APP.$cljs$core$rest$$($s__71080__$2$$)));
          }
          return null;
        }
      }, null, null);
    }($referrers$$);
  }());
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5564$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_grouped_stats$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5563$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_stats$$], null), function($stats$jscomp$6$$) {
  var $paths_by_group$$ = $APP.$cljs$core$group_by$$($sensei$frontend$admin$funnel$assign_funnel_group$$, $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$(new $APP.$cljs$core$PersistentHashSet$$(null, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$1155$referral$$, null, $APP.$cljs$cst$2023$total$$, null, $cljs$cst$5584$tutorial_seen_register$$, null], null), null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$first$$, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$second$$, 
  $APP.$cljs$core$_GT_$$, $APP.$cljs$core$second$$($APP.$cljs$core$first$$($stats$jscomp$6$$))))));
  return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71167$$) {
    var $group$jscomp$13$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71167$$, 0, null), $events$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71167$$, 1, null), $anchor_event$jscomp$1$$ = $sensei$frontend$admin$funnel$group_anchors$$.$cljs$core$IFn$_invoke$arity$1$ ? $sensei$frontend$admin$funnel$group_anchors$$.$cljs$core$IFn$_invoke$arity$1$($group$jscomp$13$$) : $sensei$frontend$admin$funnel$group_anchors$$.call(null, $group$jscomp$13$$), $percent_data$$ = 
    $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($JSCompiler_temp_const$jscomp$976_p__71178$$) {
      var $referrer$jscomp$14$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp_const$jscomp$976_p__71178$$, 0, null), $JSCompiler_inline_result$jscomp$977_freqs$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp_const$jscomp$976_p__71178$$, 1, null);
      $JSCompiler_temp_const$jscomp$976_p__71178$$ = $APP.$cljs$core$PersistentVector$EMPTY_NODE$$;
      a: {
        for (var $sum$jscomp$inline_4581$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_inline_result$jscomp$977_freqs$jscomp$1$$, $anchor_event$jscomp$1$$), $G__71305$jscomp$inline_4589_events__$1$jscomp$inline_4582$$ = $events$jscomp$8$$, $G__71306$jscomp$inline_4590_res$jscomp$inline_4583$$ = $APP.$cljs$core$PersistentArrayMap$EMPTY$$;;) {
          var $event$jscomp$inline_4585_temp__5821__auto__$jscomp$inline_4584$$ = $APP.$cljs$core$first$$($G__71305$jscomp$inline_4589_events__$1$jscomp$inline_4582$$);
          if ($APP.$cljs$core$truth_$$($event$jscomp$inline_4585_temp__5821__auto__$jscomp$inline_4584$$)) {
            var $new_sum$jscomp$inline_4586_percent$jscomp$inline_4587_percent_str$jscomp$inline_4588$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_inline_result$jscomp$977_freqs$jscomp$1$$, $event$jscomp$inline_4585_temp__5821__auto__$jscomp$inline_4584$$);
            $new_sum$jscomp$inline_4586_percent$jscomp$inline_4587_percent_str$jscomp$inline_4588$$ = $APP.$tools$parse$assure_number$$($APP.$tools$math$round_1$$($new_sum$jscomp$inline_4586_percent$jscomp$inline_4587_percent_str$jscomp$inline_4588$$ * 100 / $sum$jscomp$inline_4581$$));
            $new_sum$jscomp$inline_4586_percent$jscomp$inline_4587_percent_str$jscomp$inline_4588$$ = $APP.$cljs$core$truth_$$($new_sum$jscomp$inline_4586_percent$jscomp$inline_4587_percent_str$jscomp$inline_4588$$) ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($new_sum$jscomp$inline_4586_percent$jscomp$inline_4587_percent_str$jscomp$inline_4588$$) + "%" : null;
            $G__71305$jscomp$inline_4589_events__$1$jscomp$inline_4582$$ = $APP.$cljs$core$next$$($G__71305$jscomp$inline_4589_events__$1$jscomp$inline_4582$$);
            $G__71306$jscomp$inline_4590_res$jscomp$inline_4583$$ = $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__71306$jscomp$inline_4590_res$jscomp$inline_4583$$, $event$jscomp$inline_4585_temp__5821__auto__$jscomp$inline_4584$$, $new_sum$jscomp$inline_4586_percent$jscomp$inline_4587_percent_str$jscomp$inline_4588$$);
          } else {
            $JSCompiler_inline_result$jscomp$977_freqs$jscomp$1$$ = $G__71306$jscomp$inline_4590_res$jscomp$inline_4583$$;
            break a;
          }
        }
        $JSCompiler_inline_result$jscomp$977_freqs$jscomp$1$$ = void 0;
      }
      return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $JSCompiler_temp_const$jscomp$976_p__71178$$, [$referrer$jscomp$14$$, $JSCompiler_inline_result$jscomp$977_freqs$jscomp$1$$], null);
    }, $stats$jscomp$6$$));
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$group$jscomp$13$$, $APP.$cljs$core$cons$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$anchor_event$jscomp$1$$, $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function($freqs$jscomp$2_p__71186$$) {
      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($freqs$jscomp$2_p__71186$$, 0, null);
      $freqs$jscomp$2_p__71186$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($freqs$jscomp$2_p__71186$$, 1, null);
      return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($freqs$jscomp$2_p__71186$$, $anchor_event$jscomp$1$$), "-"], null);
    }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$stats$jscomp$6$$]))], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($event$jscomp$110$$) {
      return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$event$jscomp$110$$, $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function($freqs$jscomp$3_p__71202$$) {
        var $referrer$jscomp$15$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($freqs$jscomp$3_p__71202$$, 0, null);
        $freqs$jscomp$3_p__71202$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($freqs$jscomp$3_p__71202$$, 1, null);
        return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($freqs$jscomp$3_p__71202$$, $event$jscomp$110$$), $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($percent_data$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$referrer$jscomp$15$$, $event$jscomp$110$$], null))], null);
      }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$stats$jscomp$6$$]))], null);
    }, $events$jscomp$8$$))], null);
  }, $paths_by_group$$));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5550$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_filters$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$414$$) {
  return $cljs$cst$5550$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_filters$$.$cljs$core$IFn$_invoke$arity$1$($db$jscomp$414$$);
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5551$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_filter$$, function($db$jscomp$415$$, $p__71210$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71210$$, 0, null);
  var $category$jscomp$52$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71210$$, 1, null), $name$jscomp$155$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71210$$, 2, null), $value$jscomp$400$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71210$$, 3, null);
  return $APP.$cljs$core$update_in$$.$cljs$core$IFn$_invoke$arity$3$($APP.$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$($db$jscomp$415$$, $cljs$cst$5581$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_trace_index$$), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5550$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_filters$$, $category$jscomp$52$$], null), function($filters$jscomp$1$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($filters$jscomp$1$$, $name$jscomp$155$$), $value$jscomp$400$$) ? $APP.$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$($filters$jscomp$1$$, $name$jscomp$155$$) : $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($filters$jscomp$1$$, $name$jscomp$155$$, $value$jscomp$400$$);
  });
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5562$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_clear_filters$$, function($db$jscomp$416$$) {
  return $APP.$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$variadic$($db$jscomp$416$$, $cljs$cst$5550$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_filters$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$cljs$cst$5581$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_trace_index$$]));
});
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5581$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_trace_index$$, function($db_state$jscomp$8$$) {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    return $sensei$frontend$admin$funnel$safe_index$$($cljs$cst$5581$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_trace_index$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$_deref$$($db_state$jscomp$8$$), 0), $APP.$cljs$core$count$$($APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5580$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_fetch_users$$], 
    null)))));
  });
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5574$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_user_trace_index$$, function($db$jscomp$417$$, $p__71230_value$jscomp$401$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71230_value$jscomp$401$$, 0, null);
  $p__71230_value$jscomp$401$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71230_value$jscomp$401$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$417$$, $cljs$cst$5581$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_user_trace_index$$, $p__71230_value$jscomp$401$$);
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5578$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_detailed_logs_QMARK_$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$418$$) {
  return $cljs$cst$5578$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_detailed_logs_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$($db$jscomp$418$$);
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5579$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_set_detailed_logs$$, function($db$jscomp$419$$, $p__71238_value$jscomp$402$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71238_value$jscomp$402$$, 0, null);
  $p__71238_value$jscomp$402$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71238_value$jscomp$402$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$419$$, $cljs$cst$5578$sensei_DOT_frontend_DOT_admin_DOT_funnel_SLASH_detailed_logs_QMARK_$$, $p__71238_value$jscomp$402$$);
});
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5548$funnel$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $cljs$cst$5548$funnel$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1132$br$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$user_selector$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$language_selector$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$active_filters$$], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5582$div_DOT_table_responsive$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$funnel$funnel_table$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$funnel$trace$$], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/funnel", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Sales Funnel", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $cljs$cst$5548$funnel$$, $sensei$frontend$admin$funnel$initial_start_date$$, $sensei$frontend$admin$funnel$initial_end_date$$], null);
}], null)], null));
var $sensei$frontend$admin$life_time_value$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_months$$(-6))), $sensei$frontend$admin$life_time_value$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$now$$())), $sensei$frontend$admin$life_time_value$units$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$5586$churn$$, "%", $cljs$cst$5587$avg_churn$$, "%", $cljs$cst$5588$monthly_revenue$$, 
"€", $cljs$cst$5589$ltv$$, "€"], null);
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5595$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_cancellations$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to$jscomp$27_to_month_start_vec__70902$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5585$life_time_value$$], null))), $events$jscomp$9_from$jscomp$25_from_month_start$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to$jscomp$27_to_month_start_vec__70902$$, 0, null);
    $to$jscomp$27_to_month_start_vec__70902$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to$jscomp$27_to_month_start_vec__70902$$, 1, null);
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($events$jscomp$9_from$jscomp$25_from_month_start$$) ? $to$jscomp$27_to_month_start_vec__70902$$ : $events$jscomp$9_from$jscomp$25_from_month_start$$) ? ($events$jscomp$9_from$jscomp$25_from_month_start$$ = $APP.$tools$date$_LT__str$$($sensei$frontend$admin$life_time_value$beginning_of_month$$($events$jscomp$9_from$jscomp$25_from_month_start$$)), $to$jscomp$27_to_month_start_vec__70902$$ = $APP.$tools$date$_LT__str$$($sensei$frontend$admin$life_time_value$beginning_of_month$$($to$jscomp$27_to_month_start_vec__70902$$)), 
    $events$jscomp$9_from$jscomp$25_from_month_start$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5596$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_cancel_events$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, 
    $APP.$cljs$cst$2042$payments$$, $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$132$event$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $cljs$cst$5597$subscription_cancelled$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
    [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $events$jscomp$9_from$jscomp$25_from_month_start$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $to$jscomp$27_to_month_start_vec__70902$$], null)], null)], null)], null))), $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$second$$, 
    $events$jscomp$9_from$jscomp$25_from_month_start$$)) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5598$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_cancellations_by_month$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5595$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_cancellations$$], null), function($cancellations$jscomp$1$$) {
  return $sensei$frontend$admin$life_time_value$cancellations_by_month$$($cancellations$jscomp$1$$);
}]));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5599$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_churn_rates$$, function($_$jscomp$1818$$, $p__70922$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70922$$, 0, null);
  var $start_of_month$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__70922$$, 1, null);
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $cancellations$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5598$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_cancellations_by_month$$], null))), $start_of_month$$), $day_stats$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 
    2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2104$firestore_SLASH_doc$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5519$stats_by_day$$, $start_of_month$$], null)], null)));
    return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($plan$jscomp$68$$) {
      var $cancel_count$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($cancellations$jscomp$2$$, $plan$jscomp$68$$, 0), $total_count_total_key$$ = (0,$APP.$tools$misc$make_key$$)($APP.$cljs$cst$2023$total$$, $plan$jscomp$68$$, $APP.$cljs$cst$3195$subscriptions$$);
      $total_count_total_key$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($day_stats$$, $total_count_total_key$$);
      return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$68$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$825$cancel$$, $cancel_count$$, $APP.$cljs$cst$2023$total$$, $total_count_total_key$$, $cljs$cst$5586$churn$$, $APP.$tools$math$round_2$$($cancel_count$$ * 100 / $total_count_total_key$$)], null)], null);
    }, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1201$basic$$, $APP.$cljs$cst$1202$standard$$, $APP.$cljs$cst$1203$pro$$], null)));
  });
});
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5590$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_churn_data$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $cancellations_by_month$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5598$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_cancellations_by_month$$], null)));
    return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($month$jscomp$23_p__70934$$) {
      var $rates$jscomp$9_start_of_month$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($month$jscomp$23_p__70934$$, 0, null);
      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($month$jscomp$23_p__70934$$, 1, null);
      $month$jscomp$23_p__70934$$ = $rates$jscomp$9_start_of_month$jscomp$1$$.substring(0, 7);
      $rates$jscomp$9_start_of_month$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5599$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_churn_rates$$, $rates$jscomp$9_start_of_month$jscomp$1$$], null)));
      return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$month$jscomp$23_p__70934$$, $rates$jscomp$9_start_of_month$jscomp$1$$], null);
    }, $APP.$cljs$core$butlast$$($APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($cancellations_by_month$$)));
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5593$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_ltv_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5590$sensei_DOT_frontend_DOT_admin_DOT_life_time_value_SLASH_churn_data$$], null), function($churn_data$$) {
  return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($plan$jscomp$69$$) {
    var $avg_churn$$ = $sensei$frontend$admin$life_time_value$average$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($cljs$cst$5586$churn$$, $plan$jscomp$69$$, $APP.$cljs$core$second$$), $churn_data$$)), $monthly_revenue$$ = function() {
      var $G__70951__$1$$ = $plan$jscomp$69$$ instanceof $APP.$cljs$core$Keyword$$ ? $plan$jscomp$69$$.$fqn$ : null;
      switch($G__70951__$1$$) {
        case "basic":
          return 4;
        case "standard":
          return 8;
        case "pro":
          return 20;
        default:
          throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__70951__$1$$));
      }
    }();
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$plan$jscomp$69$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$5587$avg_churn$$, $avg_churn$$, $cljs$cst$5588$monthly_revenue$$, $monthly_revenue$$, $cljs$cst$5589$ltv$$, $APP.$tools$math$round_2$$($monthly_revenue$$ * 100 / $avg_churn$$)], null)], null);
  }, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1201$basic$$, $APP.$cljs$cst$1202$standard$$, $APP.$cljs$cst$1203$pro$$], null)));
}]));
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5585$life_time_value$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5594$div_DOT_container_DOT_life_time_value_page$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2101$h4$$, "Life-time value"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $cljs$cst$5585$life_time_value$$], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1132$br$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$life_time_value$churn_table$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1132$br$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$life_time_value$ltv_table$$], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/life-time-value", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Life Time Value", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $cljs$cst$5585$life_time_value$$, $sensei$frontend$admin$life_time_value$initial_start_date$$, $sensei$frontend$admin$life_time_value$initial_end_date$$], null);
}], null)], null));
var $sensei$frontend$admin$live_workers$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -6))), $sensei$frontend$admin$live_workers$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$now$$())), $sensei$frontend$admin$live_workers$chart_size$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1047$height$$, 200], null), $sensei$frontend$admin$live_workers$default_percentiles$$ = 
new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [50, 95, 99], null), $sensei$frontend$admin$live_workers$colors$$ = $APP.$cljs$core$PersistentHashMap$fromArrays$$("50 10000 local-dev-worker-eo local-worker-vh 25000 local-worker-eo-2 2500 local-dev-worker-eo-2 500 cloud-vms local-worker-eo".split(" "), "#000 #dc0 #28b #b44 #44b #8d2 #4b4 #f81 #35c #4b4 #24d".split(" ")), $sensei$frontend$admin$live_workers$total_by_item_graph$$ = function $sensei$frontend$admin$live_workers$total_by_item_graph$$($var_args$jscomp$821$$) {
  switch(arguments.length) {
    case 1:
      return $sensei$frontend$admin$live_workers$total_by_item_graph$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $sensei$frontend$admin$live_workers$total_by_item_graph$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", arguments.length].join(""));
  }
};
$sensei$frontend$admin$live_workers$total_by_item_graph$$.$cljs$core$IFn$_invoke$arity$1$ = function($group_by_item$$) {
  return $sensei$frontend$admin$live_workers$total_by_item_graph$$.$cljs$core$IFn$_invoke$arity$2$($group_by_item$$, null);
};
$sensei$frontend$admin$live_workers$total_by_item_graph$$.$cljs$core$IFn$_invoke$arity$2$ = function($chart_data$jscomp$2_group_by_item$jscomp$1$$, $postprocess$jscomp$1$$) {
  $chart_data$jscomp$2_group_by_item$jscomp$1$$ = $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5601$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_total_by_item_data$$, $chart_data$jscomp$2_group_by_item$jscomp$1$$, $postprocess$jscomp$1$$], null));
  return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($chart_data$jscomp$2_group_by_item$jscomp$1$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$chart$chart$$, $chart_data$jscomp$2_group_by_item$jscomp$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$1365$size$$, $sensei$frontend$admin$live_workers$chart_size$$, $APP.$cljs$cst$5405$colors$$, $sensei$frontend$admin$live_workers$colors$$, 
  $APP.$cljs$cst$25$type$$, $APP.$cljs$cst$302$line$$, $APP.$cljs$cst$5406$log_scale_QMARK_$$, !0], null)], null) : null;
};
$sensei$frontend$admin$live_workers$total_by_item_graph$$.$cljs$lang$maxFixedArity$ = 2;
var $sensei$frontend$admin$live_workers$max_allowed_seconds$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [50, 0.3, 500, 2, 2500, 5, 10000, 10], null);
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5610$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_stats_by_day$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$6_vec__71093$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5600$live_workers$$], null))), $from_date$jscomp$6$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$6_vec__71093$$, 0, null);
    $to_date$jscomp$6_vec__71093$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$6_vec__71093$$, 1, null);
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($from_date$jscomp$6$$) ? $to_date$jscomp$6_vec__71093$$ : $from_date$jscomp$6$$) ? $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5610$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_stats_by_day$$, new $APP.$cljs$core$PersistentVector$$(null, 
    4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5611$daily_stats$$, $cljs$cst$5612$live_worker$$, $APP.$cljs$cst$1234$days$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$692$firestore_SLASH_id$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $APP.$tools$date$__GT_day_str$$($to_date$jscomp$6_vec__71093$$)], 
    null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$692$firestore_SLASH_id$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $APP.$tools$date$__GT_day_str$$($from_date$jscomp$6$$)], null)], null)], null)], null))) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5601$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_total_by_item_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5610$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_stats_by_day$$], null), function($stats_by_day$jscomp$3$$, $p__71107$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71107$$, 0, null);
  var $group_by_item$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71107$$, 1, null), $postprocess$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71107$$, 2, null);
  try {
    var $postprocess__$1$$ = function() {
      return $APP.$cljs$core$truth_$$($postprocess$jscomp$2$$) ? $postprocess$jscomp$2$$ : function($fields$jscomp$14$$, $data$jscomp$294$$) {
        return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$fields$jscomp$14$$, $data$jscomp$294$$], null);
      };
    }(), $fields$jscomp$13$$ = $sensei$frontend$admin$live_workers$get_fields$$($stats_by_day$jscomp$3$$, $group_by_item$jscomp$3$$);
    return $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$sensei$frontend$widget$chart$format_data_for_chart$$, function() {
      var $G__71121$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($day_data$jscomp$2_p__71124$$) {
        var $day$jscomp$17$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($day_data$jscomp$2_p__71124$$, 0, null);
        $day_data$jscomp$2_p__71124$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($day_data$jscomp$2_p__71124$$, 1, null);
        var $data$jscomp$295$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($day_data$jscomp$2_p__71124$$, $group_by_item$jscomp$3$$);
        return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$17$$], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__71104_SHARP_$$) {
          return $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$295$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$p1__71104_SHARP_$$, $APP.$cljs$cst$827$success$$], null), 0);
        }, $fields$jscomp$13$$));
      }, $stats_by_day$jscomp$3$$);
      return $postprocess__$1$$.$cljs$core$IFn$_invoke$arity$2$ ? $postprocess__$1$$.$cljs$core$IFn$_invoke$arity$2$($fields$jscomp$13$$, $G__71121$$) : $postprocess__$1$$.call(null, $fields$jscomp$13$$, $G__71121$$);
    }());
  } catch ($e71118$$) {
    return console.error("Error calculating total-by-item-data");
  }
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5602$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_total_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5610$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_stats_by_day$$], null), function($stats_by_day$jscomp$4$$, $p__71136$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71136$$, 0, null);
  var $fields$jscomp$15$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71136$$, 1, null);
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$($fields$jscomp$15$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71145$$) {
    var $day$jscomp$18$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71145$$, 0, null), $day_data$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71145$$, 1, null);
    return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$18$$], null), function() {
      return function $sensei$frontend$admin$live_workers$iter__71149$$($s__71150$$) {
        return new $APP.$cljs$core$LazySeq$$(null, function() {
          for (;;) {
            var $s__71150__$2_temp__5823__auto__$jscomp$467$$ = $APP.$cljs$core$seq$$($s__71150$$);
            if ($s__71150__$2_temp__5823__auto__$jscomp$467$$) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71150__$2_temp__5823__auto__$jscomp$467$$)) {
                var $JSCompiler_inline_result$jscomp$983_c__5626__auto__$jscomp$177$$ = $APP.$cljs$core$_chunked_first$$($s__71150__$2_temp__5823__auto__$jscomp$467$$), $size__5627__auto__$jscomp$177$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$983_c__5626__auto__$jscomp$177$$), $b__71152_field$jscomp$31$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$177$$);
                a: {
                  for (var $i__71151$jscomp$inline_4613$$ = 0;;) {
                    if ($i__71151$jscomp$inline_4613$$ < $size__5627__auto__$jscomp$177$$) {
                      var $field$jscomp$inline_4614_x$jscomp$inline_6743$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$983_c__5626__auto__$jscomp$177$$, $i__71151$jscomp$inline_4613$$), $b$jscomp$inline_6742$$ = $b__71152_field$jscomp$31$$;
                      $field$jscomp$inline_4614_x$jscomp$inline_6743$$ = $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$03$$($day_data$jscomp$3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$827$success$$, $field$jscomp$inline_4614_x$jscomp$inline_6743$$], null), 0);
                      $b$jscomp$inline_6742$$.add($field$jscomp$inline_4614_x$jscomp$inline_6743$$);
                      $i__71151$jscomp$inline_4613$$ += 1;
                    } else {
                      $JSCompiler_inline_result$jscomp$983_c__5626__auto__$jscomp$177$$ = !0;
                      break a;
                    }
                  }
                  $JSCompiler_inline_result$jscomp$983_c__5626__auto__$jscomp$177$$ = void 0;
                }
                return $JSCompiler_inline_result$jscomp$983_c__5626__auto__$jscomp$177$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71152_field$jscomp$31$$), $sensei$frontend$admin$live_workers$iter__71149$$($APP.$cljs$core$_chunked_rest$$($s__71150__$2_temp__5823__auto__$jscomp$467$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71152_field$jscomp$31$$), null);
              }
              $b__71152_field$jscomp$31$$ = $APP.$cljs$core$first$$($s__71150__$2_temp__5823__auto__$jscomp$467$$);
              return $APP.$cljs$core$cons$$($APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$03$$($day_data$jscomp$3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$827$success$$, $b__71152_field$jscomp$31$$], null), 0), $sensei$frontend$admin$live_workers$iter__71149$$($APP.$cljs$core$rest$$($s__71150__$2_temp__5823__auto__$jscomp$467$$)));
            }
            return null;
          }
        }, null, null);
      }($fields$jscomp$15$$);
    }());
  }, $stats_by_day$jscomp$4$$));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5604$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_performance_by_playouts_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5610$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_stats_by_day$$], null), function($stats_by_day$jscomp$5$$, $p__71173$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71173$$, 0, null);
  var $percentile_item$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71173$$, 1, null), $percentiles$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71173$$, 2, null), $playouts$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71173$$, 3, null);
  try {
    var $captions$jscomp$2$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($percentile$$) {
      return "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($percentile$$) + "th percentile";
    }, $percentiles$jscomp$5$$);
    return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$($captions$jscomp$2$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($data$jscomp$296_day_data$jscomp$4_p__71190$$) {
      var $day$jscomp$19$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$296_day_data$jscomp$4_p__71190$$, 0, null);
      $data$jscomp$296_day_data$jscomp$4_p__71190$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$296_day_data$jscomp$4_p__71190$$, 1, null);
      $data$jscomp$296_day_data$jscomp$4_p__71190$$ = $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($data$jscomp$296_day_data$jscomp$4_p__71190$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$percentile_item$$, $playouts$jscomp$7$$], null));
      return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$19$$], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($data$jscomp$296_day_data$jscomp$4_p__71190$$, $percentiles$jscomp$5$$));
    }, $stats_by_day$jscomp$5$$));
  } catch ($e71182$$) {
    return console.error("Error calculating grouped-percentile-chart-data");
  }
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5603$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_failed_by_worker_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5610$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_stats_by_day$$], null), function($stats_by_day$jscomp$6$$, $captions$jscomp$3_p__71206$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($captions$jscomp$3_p__71206$$, 0, null);
  var $total_item$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($captions$jscomp$3_p__71206$$, 1, null), $all_workers$$ = $sensei$frontend$admin$live_workers$get_fields$$($stats_by_day$jscomp$6$$, $total_item$jscomp$1$$);
  $captions$jscomp$3_p__71206$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($sensei$frontend$admin$live_workers$shorten_worker_name$$, $all_workers$$);
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$($captions$jscomp$3_p__71206$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71214$$) {
    var $day$jscomp$20$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71214$$, 0, null), $day_data$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71214$$, 1, null);
    return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$20$$], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__71218_timeout$jscomp$15_worker$jscomp$1$$) {
      $map__71218_timeout$jscomp$15_worker$jscomp$1$$ = $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($day_data$jscomp$5$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$total_item$jscomp$1$$, $map__71218_timeout$jscomp$15_worker$jscomp$1$$], null));
      var $failed_map__71218__$1$$ = $APP.$cljs$core$__destructure_map$$($map__71218_timeout$jscomp$15_worker$jscomp$1$$);
      $map__71218_timeout$jscomp$15_worker$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($failed_map__71218__$1$$, $APP.$cljs$cst$765$timeout$$, 0);
      $failed_map__71218__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($failed_map__71218__$1$$, $APP.$cljs$cst$763$failed$$, 0);
      return $map__71218_timeout$jscomp$15_worker$jscomp$1$$ + $failed_map__71218__$1$$;
    }, $all_workers$$));
  }, $stats_by_day$jscomp$6$$));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5605$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_performance_by_worker_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5610$sensei_DOT_frontend_DOT_admin_DOT_live_workers_SLASH_stats_by_day$$], null), function($stats_by_day$jscomp$7$$, $p__71225$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71225$$, 0, null);
  var $percentile_item$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71225$$, 1, null);
  try {
    var $all_workers$jscomp$1$$ = $sensei$frontend$admin$live_workers$get_fields$$($stats_by_day$jscomp$7$$, $percentile_item$jscomp$1$$), $captions$jscomp$4$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($sensei$frontend$admin$live_workers$shorten_worker_name$$, $all_workers$jscomp$1$$);
    return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$($captions$jscomp$4$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($day_data$jscomp$6_p__71234$$) {
      var $day$jscomp$21$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($day_data$jscomp$6_p__71234$$, 0, null);
      $day_data$jscomp$6_p__71234$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($day_data$jscomp$6_p__71234$$, 1, null);
      var $data$jscomp$297$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($day_data$jscomp$6_p__71234$$, $percentile_item$jscomp$1$$);
      return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$21$$], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($worker$jscomp$2$$) {
        return $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($data$jscomp$297$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$worker$jscomp$2$$, 90], null));
      }, $all_workers$jscomp$1$$));
    }, $stats_by_day$jscomp$7$$));
  } catch ($e71229$$) {
    return console.error("Error calculating performance-by-worker-chart-data");
  }
}]));
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5600$live_workers$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2101$h4$$, "Live worker usage"], null), new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1777$div_DOT_row$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 
  5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2746$div_DOT_col_12$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $cljs$cst$5600$live_workers$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "50 playouts live performance"], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_workers$performance_by_playouts_graph$$, $cljs$cst$5606$time_by_playouts$$, 
  $sensei$frontend$admin$live_workers$default_percentiles$$, 50], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "500 playouts live performance"], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_workers$performance_by_playouts_graph$$, $cljs$cst$5606$time_by_playouts$$, $sensei$frontend$admin$live_workers$default_percentiles$$, 500], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "2500 playouts live performance"], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_workers$performance_by_playouts_graph$$, $cljs$cst$5606$time_by_playouts$$, $sensei$frontend$admin$live_workers$default_percentiles$$, 2500], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "10000 playouts live performance"], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_workers$performance_by_playouts_graph$$, 
  $cljs$cst$5606$time_by_playouts$$, $sensei$frontend$admin$live_workers$default_percentiles$$, 10000], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, 
  "Jobs by worker"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_workers$total_by_item_graph$$, $cljs$cst$5607$success_by_worker$$, $sensei$frontend$admin$live_workers$group_cloud_vms$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Failed by worker"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_workers$failed_by_worker_graph$$, $cljs$cst$5607$success_by_worker$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Performance by worker"], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_workers$performance_by_worker_graph$$, $cljs$cst$5608$time_by_worker$$, 
  $sensei$frontend$admin$live_workers$group_cloud_vms$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Jobs by playouts"], null), 
  new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_workers$total_by_item_graph$$, $cljs$cst$5609$success_by_playouts$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3371$div_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Total slow (\x3e30s) and failed jobs"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_workers$total_graph$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$765$timeout$$, $APP.$cljs$cst$763$failed$$], null)], null)], null)], null)], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/live-workers", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Live Workers", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $cljs$cst$5600$live_workers$$, $sensei$frontend$admin$live_workers$initial_start_date$$, $sensei$frontend$admin$live_workers$initial_end_date$$], null);
}], null)], null));
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$5613$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_start$$, function($map__71044__$1_p__71042$$, $p__71043$$) {
  $map__71044__$1_p__71042$$ = $APP.$cljs$core$__destructure_map$$($map__71044__$1_p__71042$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71044__$1_p__71042$$, $APP.$cljs$cst$152$db$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71043$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71043$$, 1, null);
  $APP.$cljs$core$println$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["(::start)"]));
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$134$fx$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$197$dispatch$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2556$sensei_DOT_frontend_DOT_live_DOT_ws_client_SLASH_connect$$], null)], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1823$dispatch_interval$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$197$dispatch$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5614$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_poll_for_live_queue_info$$], null), $APP.$cljs$cst$196$ms$$, 2000, $APP.$cljs$cst$116$id$$, $cljs$cst$5615$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_poll_for_queue_info$$], 
  null)], null)], null)], null);
});
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$5616$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_stop$$, function($map__71051__$1_p__71049$$, $p__71050$$) {
  $map__71051__$1_p__71049$$ = $APP.$cljs$core$__destructure_map$$($map__71051__$1_p__71049$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71051__$1_p__71049$$, $APP.$cljs$cst$152$db$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71050$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71050$$, 1, null);
  $APP.$cljs$core$println$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["(::stop)"]));
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$134$fx$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$197$dispatch$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2561$sensei_DOT_frontend_DOT_live_DOT_ws_client_SLASH_disconnect$$], null)], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1824$clear_interval$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$116$id$$, $cljs$cst$5615$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_poll_for_queue_info$$], null)], null)], null)], null);
});
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$cst$5614$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_poll_for_live_queue_info$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$re_frame$core$inject_cofx$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$cst$1138$tools_DOT_inject_SLASH_sub$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2551$sensei_DOT_frontend_DOT_live_DOT_ws_client_SLASH_live_client_status$$], 
null))], null), function($live_client_status$jscomp$1_map__71058__$1_p__71057$$) {
  $live_client_status$jscomp$1_map__71058__$1_p__71057$$ = $APP.$cljs$core$__destructure_map$$($live_client_status$jscomp$1_map__71058__$1_p__71057$$);
  $live_client_status$jscomp$1_map__71058__$1_p__71057$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($live_client_status$jscomp$1_map__71058__$1_p__71057$$, $APP.$cljs$cst$2551$sensei_DOT_frontend_DOT_live_DOT_ws_client_SLASH_live_client_status$$);
  $APP.$cljs$core$println$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["(::poll-for-live-queue-info)", $live_client_status$jscomp$1_map__71058__$1_p__71057$$]));
  return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($live_client_status$jscomp$1_map__71058__$1_p__71057$$, $APP.$cljs$cst$2535$connected$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$197$dispatch$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2549$send_live_queue_poll$$], null)], null) : null;
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$2519$live_queue_info$$, function($db$jscomp$422$$, $message$jscomp$80_p__71061$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($message$jscomp$80_p__71061$$, 0, null);
  $message$jscomp$80_p__71061$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($message$jscomp$80_p__71061$$, 1, null);
  return $APP.$cljs$core$assoc_in$$($db$jscomp$422$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5617$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_live_queue_info$$, $cljs$cst$5618$queues$$], null), $APP.$cljs$core$second$$($message$jscomp$80_p__71061$$));
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5619$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_live_queues$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$423$$) {
  return $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($db$jscomp$423$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5617$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_live_queue_info$$, $cljs$cst$5618$queues$$], null));
}]));
var $sensei$frontend$admin$paypal_events$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -2))), $sensei$frontend$admin$paypal_events$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$now$$()));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5624$sensei_DOT_frontend_DOT_admin_DOT_paypal_events_SLASH_all_events$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$7_vec__71183$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $APP.$cljs$cst$2043$paypal_events$$], null))), $events$jscomp$11_from_date$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$7_vec__71183$$, 0, null);
    $to_date$jscomp$7_vec__71183$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$7_vec__71183$$, 1, null);
    $events$jscomp$11_from_date$jscomp$7$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5624$sensei_DOT_frontend_DOT_admin_DOT_paypal_events_SLASH_all_events$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$2043$paypal_events$$, 
    $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2148$_GT_$$, $events$jscomp$11_from_date$jscomp$7$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, 
    $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2688$_LT_$$, $to_date$jscomp$7_vec__71183$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2055$desc$$], null)], null)], null)], null)));
    return $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$1$(function($map__71199_p__71195_timestamp$jscomp$14$$) {
      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($map__71199_p__71195_timestamp$jscomp$14$$, 0, null);
      $map__71199_p__71195_timestamp$jscomp$14$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($map__71199_p__71195_timestamp$jscomp$14$$, 1, null);
      var $body$jscomp$24_map__71199__$1$$ = $APP.$cljs$core$__destructure_map$$($map__71199_p__71195_timestamp$jscomp$14$$);
      $map__71199_p__71195_timestamp$jscomp$14$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($body$jscomp$24_map__71199__$1$$, $APP.$cljs$cst$1017$timestamp$$);
      $body$jscomp$24_map__71199__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($body$jscomp$24_map__71199__$1$$, $APP.$cljs$cst$740$body$$);
      var $event$jscomp$113$$ = $APP.$cljs$reader$read_string$cljs$0core$0IFn$0_invoke$0arity$01$$($body$jscomp$24_map__71199__$1$$);
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$1017$timestamp$$, $map__71199_p__71195_timestamp$jscomp$14$$, $APP.$cljs$cst$1144$event_type$$, $cljs$cst$5627$event_type$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$113$$), $cljs$cst$5625$event_id$$, $APP.$cljs$cst$116$id$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$113$$), $APP.$cljs$cst$722$uid$$, function() {
        var $or__5142__auto__$jscomp$534$$ = $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$113$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5628$resource$$, $APP.$cljs$cst$2082$custom$$], null));
        return $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$534$$) ? $or__5142__auto__$jscomp$534$$ : $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$113$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5628$resource$$, $APP.$cljs$cst$4829$custom_id$$], null));
      }(), $cljs$cst$5626$sub_id$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5627$event_type$$.$cljs$core$IFn$_invoke$arity$1$($event$jscomp$113$$), "PAYMENT.SALE.REFUNDED") ? null : function() {
        var $or__5142__auto__$jscomp$535$$ = $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$113$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5628$resource$$, $cljs$cst$5629$billing_agreement_id$$], null));
        return $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$535$$) ? $or__5142__auto__$jscomp$535$$ : $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($event$jscomp$113$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5628$resource$$, $APP.$cljs$cst$116$id$$], null));
      }(), $APP.$cljs$cst$132$event$$, $event$jscomp$113$$], null);
    }), $events$jscomp$11_from_date$jscomp$7$$);
  });
});
$APP.$sensei$frontend$router$core$reg_page$$($APP.$cljs$cst$2043$paypal_events$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2101$h4$$, "Paypal Events"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1777$div_DOT_row$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$2746$div_DOT_col_12$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $APP.$cljs$cst$2043$paypal_events$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$paypal_events$event_table$$], 
  null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/paypal-events", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3616$admin$$, $APP.$cljs$cst$840$title$$, "PayPal Events", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $APP.$cljs$cst$2043$paypal_events$$, $sensei$frontend$admin$paypal_events$initial_start_date$$, $sensei$frontend$admin$paypal_events$initial_end_date$$], null);
}], null)], null));
var $sensei$frontend$admin$paypal_statistics$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_months$$(-12))), $sensei$frontend$admin$paypal_statistics$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$now$$())), $sensei$frontend$admin$paypal_statistics$chart_size$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1047$height$$, 200], null), $sensei$frontend$admin$paypal_statistics$colors$$ = 
$APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$3$($APP.$cljs$core$merge$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, "basic-count #35c standard-count #4b4 pro-count #dc0 ubknown-count #000".split(" "), null), function $sensei$frontend$admin$paypal_statistics$iter__71219$$($s__71220$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    for (var $s__71220__$1$$ = $s__71220$$;;) {
      var $fs__5625__auto__$jscomp$9_temp__5823__auto__$jscomp$473$$ = $APP.$cljs$core$seq$$($s__71220__$1$$);
      if ($fs__5625__auto__$jscomp$9_temp__5823__auto__$jscomp$473$$) {
        var $xs__6383__auto__$jscomp$27$$ = $fs__5625__auto__$jscomp$9_temp__5823__auto__$jscomp$473$$, $currency$jscomp$17$$ = $APP.$cljs$core$first$$($xs__6383__auto__$jscomp$27$$);
        if ($fs__5625__auto__$jscomp$9_temp__5823__auto__$jscomp$473$$ = $APP.$cljs$core$seq$$(function($s__71220__$1$jscomp$1$$, $currency$jscomp$18$$, $xs__6383__auto__$jscomp$28$$, $temp__5823__auto__$jscomp$474$$) {
          return function $sensei$frontend$admin$paypal_statistics$iter__71219_$_iter__71221$$($s__71222$$) {
            return new $APP.$cljs$core$LazySeq$$(null, function($s__71220__$1$jscomp$2$$, $currency$jscomp$19$$) {
              return function() {
                for (;;) {
                  var $s__71222__$2_temp__5823__auto____$1$jscomp$75$$ = $APP.$cljs$core$seq$$($s__71222$$);
                  if ($s__71222__$2_temp__5823__auto____$1$jscomp$75$$) {
                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71222__$2_temp__5823__auto____$1$jscomp$75$$)) {
                      var $JSCompiler_inline_result$jscomp$4932_c__5626__auto__$jscomp$183$$ = $APP.$cljs$core$_chunked_first$$($s__71222__$2_temp__5823__auto____$1$jscomp$75$$), $size__5627__auto__$jscomp$183$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$4932_c__5626__auto__$jscomp$183$$), $b__71224_suffix$jscomp$14$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$183$$);
                      a: {
                        for (var $i__71223$jscomp$inline_6757$$ = 0;;) {
                          if ($i__71223$jscomp$inline_6757$$ < $size__5627__auto__$jscomp$183$$) {
                            var $suffix$jscomp$inline_6758_x$jscomp$inline_7070$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$4932_c__5626__auto__$jscomp$183$$, $i__71223$jscomp$inline_6757$$), $b$jscomp$inline_7069$$ = $b__71224_suffix$jscomp$14$$;
                            $suffix$jscomp$inline_6758_x$jscomp$inline_7070$$ = $APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$(["" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$19$$) + "-basic-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($suffix$jscomp$inline_6758_x$jscomp$inline_7070$$), "#35c", "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$19$$) + "-standard-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($suffix$jscomp$inline_6758_x$jscomp$inline_7070$$), 
                            "#4b4", "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$19$$) + "-pro-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($suffix$jscomp$inline_6758_x$jscomp$inline_7070$$), "#dc0", "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$19$$) + "-unknown-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($suffix$jscomp$inline_6758_x$jscomp$inline_7070$$), "#000"]);
                            $b$jscomp$inline_7069$$.add($suffix$jscomp$inline_6758_x$jscomp$inline_7070$$);
                            $i__71223$jscomp$inline_6757$$ += 1;
                          } else {
                            $JSCompiler_inline_result$jscomp$4932_c__5626__auto__$jscomp$183$$ = !0;
                            break a;
                          }
                        }
                        $JSCompiler_inline_result$jscomp$4932_c__5626__auto__$jscomp$183$$ = void 0;
                      }
                      return $JSCompiler_inline_result$jscomp$4932_c__5626__auto__$jscomp$183$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71224_suffix$jscomp$14$$), $sensei$frontend$admin$paypal_statistics$iter__71219_$_iter__71221$$($APP.$cljs$core$_chunked_rest$$($s__71222__$2_temp__5823__auto____$1$jscomp$75$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71224_suffix$jscomp$14$$), null);
                    }
                    $b__71224_suffix$jscomp$14$$ = $APP.$cljs$core$first$$($s__71222__$2_temp__5823__auto____$1$jscomp$75$$);
                    return $APP.$cljs$core$cons$$($APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$(["" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$19$$) + "-basic-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71224_suffix$jscomp$14$$), "#35c", "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$19$$) + "-standard-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71224_suffix$jscomp$14$$), "#4b4", "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$19$$) + 
                    "-pro-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71224_suffix$jscomp$14$$), "#dc0", "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$19$$) + "-unknown-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71224_suffix$jscomp$14$$), "#000"]), $sensei$frontend$admin$paypal_statistics$iter__71219_$_iter__71221$$($APP.$cljs$core$rest$$($s__71222__$2_temp__5823__auto____$1$jscomp$75$$)));
                  }
                  return null;
                }
              };
            }($s__71220__$1$jscomp$1$$, $currency$jscomp$18$$, $xs__6383__auto__$jscomp$28$$, $temp__5823__auto__$jscomp$474$$), null, null);
          };
        }($s__71220__$1$$, $currency$jscomp$17$$, $xs__6383__auto__$jscomp$27$$, $fs__5625__auto__$jscomp$9_temp__5823__auto__$jscomp$473$$)(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["total", "count"], null)))) {
          return $APP.$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($fs__5625__auto__$jscomp$9_temp__5823__auto__$jscomp$473$$, $sensei$frontend$admin$paypal_statistics$iter__71219$$($APP.$cljs$core$rest$$($s__71220__$1$$)));
        }
        $s__71220__$1$$ = $APP.$cljs$core$rest$$($s__71220__$1$$);
      } else {
        return null;
      }
    }
  }, null, null);
}(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["EUR", "USD", "JPY"], null)));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5632$sensei_DOT_frontend_DOT_admin_DOT_paypal_statistics_SLASH_stats$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $end_month_to_date$jscomp$8_vec__71318$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5630$paypal_statistics$$], null))), $from_date$jscomp$8_start_month$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_month_to_date$jscomp$8_vec__71318$$, 0, null);
    $end_month_to_date$jscomp$8_vec__71318$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_month_to_date$jscomp$8_vec__71318$$, 1, null);
    $from_date$jscomp$8_start_month$$ = $APP.$cljs$core$truth_$$($from_date$jscomp$8_start_month$$) ? $APP.$cljs$core$subs$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$tools$date$__GT_str$$($from_date$jscomp$8_start_month$$), 0, 7) : null;
    $end_month_to_date$jscomp$8_vec__71318$$ = $APP.$cljs$core$truth_$$($end_month_to_date$jscomp$8_vec__71318$$) ? $APP.$cljs$core$subs$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$tools$date$__GT_str$$($end_month_to_date$jscomp$8_vec__71318$$), 0, 7) : null;
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($from_date$jscomp$8_start_month$$) ? $end_month_to_date$jscomp$8_vec__71318$$ : $from_date$jscomp$8_start_month$$) ? $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5632$sensei_DOT_frontend_DOT_admin_DOT_paypal_statistics_SLASH_stats$$, new $APP.$cljs$core$PersistentVector$$(null, 
    2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5633$paypal_stats$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$692$firestore_SLASH_id$$, $APP.$cljs$cst$2149$asc$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, 
    $APP.$cljs$cst$692$firestore_SLASH_id$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $end_month_to_date$jscomp$8_vec__71318$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$692$firestore_SLASH_id$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $from_date$jscomp$8_start_month$$], null)], null)], null)], null))) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5631$sensei_DOT_frontend_DOT_admin_DOT_paypal_statistics_SLASH_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5632$sensei_DOT_frontend_DOT_admin_DOT_paypal_statistics_SLASH_stats$$], null), function($stats$jscomp$7$$, $p__71325$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71325$$, 0, null);
  var $fields$jscomp$17$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71325$$, 1, null);
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$($fields$jscomp$17$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71329$$) {
    var $month$jscomp$24$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71329$$, 0, null), $month_data$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71329$$, 1, null);
    return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$tools$date$_LT__str$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($month$jscomp$24$$) + "-01")], null), function() {
      return function $sensei$frontend$admin$paypal_statistics$iter__71333$$($s__71334$$) {
        return new $APP.$cljs$core$LazySeq$$(null, function() {
          for (;;) {
            var $s__71334__$2_temp__5823__auto__$jscomp$486$$ = $APP.$cljs$core$seq$$($s__71334$$);
            if ($s__71334__$2_temp__5823__auto__$jscomp$486$$) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71334__$2_temp__5823__auto__$jscomp$486$$)) {
                var $JSCompiler_inline_result$jscomp$988_c__5626__auto__$jscomp$194$$ = $APP.$cljs$core$_chunked_first$$($s__71334__$2_temp__5823__auto__$jscomp$486$$), $size__5627__auto__$jscomp$194$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$988_c__5626__auto__$jscomp$194$$), $b__71336_field$jscomp$33$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$194$$);
                a: {
                  for (var $i__71335$jscomp$inline_4651$$ = 0;;) {
                    if ($i__71335$jscomp$inline_4651$$ < $size__5627__auto__$jscomp$194$$) {
                      var $field$jscomp$inline_4652_x$jscomp$inline_6761$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$988_c__5626__auto__$jscomp$194$$, $i__71335$jscomp$inline_4651$$), $b$jscomp$inline_6760$$ = $b__71336_field$jscomp$33$$;
                      $field$jscomp$inline_4652_x$jscomp$inline_6761$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($month_data$$, $field$jscomp$inline_4652_x$jscomp$inline_6761$$, 0);
                      $b$jscomp$inline_6760$$.add($field$jscomp$inline_4652_x$jscomp$inline_6761$$);
                      $i__71335$jscomp$inline_4651$$ += 1;
                    } else {
                      $JSCompiler_inline_result$jscomp$988_c__5626__auto__$jscomp$194$$ = !0;
                      break a;
                    }
                  }
                  $JSCompiler_inline_result$jscomp$988_c__5626__auto__$jscomp$194$$ = void 0;
                }
                return $JSCompiler_inline_result$jscomp$988_c__5626__auto__$jscomp$194$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71336_field$jscomp$33$$), $sensei$frontend$admin$paypal_statistics$iter__71333$$($APP.$cljs$core$_chunked_rest$$($s__71334__$2_temp__5823__auto__$jscomp$486$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71336_field$jscomp$33$$), null);
              }
              $b__71336_field$jscomp$33$$ = $APP.$cljs$core$first$$($s__71334__$2_temp__5823__auto__$jscomp$486$$);
              return $APP.$cljs$core$cons$$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($month_data$$, $b__71336_field$jscomp$33$$, 0), $sensei$frontend$admin$paypal_statistics$iter__71333$$($APP.$cljs$core$rest$$($s__71334__$2_temp__5823__auto__$jscomp$486$$)));
            }
            return null;
          }
        }, null, null);
      }($fields$jscomp$17$$);
    }());
  }, $stats$jscomp$7$$));
}]));
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5630$paypal_statistics$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2101$h4$$, "Paypal Statistics"], null), new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1777$div_DOT_row$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 
  5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2746$div_DOT_col_12$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $cljs$cst$5630$paypal_statistics$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null)], null), function() {
    return function $sensei$frontend$admin$paypal_statistics$page_$_iter__71246$$($s__71247$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__71247__$2_temp__5823__auto__$jscomp$476$$ = $APP.$cljs$core$seq$$($s__71247$$);
          if ($s__71247__$2_temp__5823__auto__$jscomp$476$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71247__$2_temp__5823__auto__$jscomp$476$$)) {
              var $JSCompiler_inline_result$jscomp$989_c__5626__auto__$jscomp$184$$ = $APP.$cljs$core$_chunked_first$$($s__71247__$2_temp__5823__auto__$jscomp$476$$), $size__5627__auto__$jscomp$184$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$989_c__5626__auto__$jscomp$184$$), $b__71249_currency$jscomp$20$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$184$$);
              a: {
                for (var $i__71248$jscomp$inline_4654$$ = 0;;) {
                  if ($i__71248$jscomp$inline_4654$$ < $size__5627__auto__$jscomp$184$$) {
                    var $currency$jscomp$inline_4655_x$jscomp$inline_6764$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$989_c__5626__auto__$jscomp$184$$, $i__71248$jscomp$inline_4654$$), $b$jscomp$inline_6763$$ = $b__71249_currency$jscomp$20$$;
                    $currency$jscomp$inline_4655_x$jscomp$inline_6764$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2258$div_DOT_mb_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "" + 
                    $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$inline_4655_x$jscomp$inline_6764$$) + " Payments"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$paypal_statistics$bar_chart$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$inline_4655_x$jscomp$inline_6764$$) + 
                    "-total", "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$inline_4655_x$jscomp$inline_6764$$) + "-fee"], null)], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $currency$jscomp$inline_4655_x$jscomp$inline_6764$$], null));
                    $b$jscomp$inline_6763$$.add($currency$jscomp$inline_4655_x$jscomp$inline_6764$$);
                    $i__71248$jscomp$inline_4654$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$989_c__5626__auto__$jscomp$184$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$989_c__5626__auto__$jscomp$184$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$989_c__5626__auto__$jscomp$184$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71249_currency$jscomp$20$$), $sensei$frontend$admin$paypal_statistics$page_$_iter__71246$$($APP.$cljs$core$_chunked_rest$$($s__71247__$2_temp__5823__auto__$jscomp$476$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71249_currency$jscomp$20$$), null);
            }
            $b__71249_currency$jscomp$20$$ = $APP.$cljs$core$first$$($s__71247__$2_temp__5823__auto__$jscomp$476$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2258$div_DOT_mb_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71249_currency$jscomp$20$$) + 
            " Payments"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$paypal_statistics$bar_chart$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71249_currency$jscomp$20$$) + "-total", "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71249_currency$jscomp$20$$) + "-fee"], null)], null)], 
            null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__71249_currency$jscomp$20$$], null)), $sensei$frontend$admin$paypal_statistics$page_$_iter__71246$$($APP.$cljs$core$rest$$($s__71247__$2_temp__5823__auto__$jscomp$476$$)));
          }
          return null;
        }
      }, null, null);
    }(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["EUR", "USD", "JPY"], null));
  }(), function() {
    return function $sensei$frontend$admin$paypal_statistics$page_$_iter__71257$$($s__71258$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$477$$ = $APP.$cljs$core$seq$$($s__71258$$);
          if ($temp__5823__auto__$jscomp$477$$) {
            var $s__71258__$2$$ = $temp__5823__auto__$jscomp$477$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71258__$2$$)) {
              var $c__5626__auto__$jscomp$185$$ = $APP.$cljs$core$_chunked_first$$($s__71258__$2$$), $size__5627__auto__$jscomp$185$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$185$$), $b__71260$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$185$$);
              return function() {
                for (var $i__71259$$ = 0;;) {
                  if ($i__71259$$ < $size__5627__auto__$jscomp$185$$) {
                    var $currency$jscomp$23$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$185$$, $i__71259$$);
                    $APP.$cljs$core$chunk_append$$($b__71260$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2258$div_DOT_mb_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$23$$) + 
                    " Payments by plan"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$paypal_statistics$bar_chart$$, function() {
                      return function($i__71259$jscomp$1$$, $currency$jscomp$24$$, $c__5626__auto__$jscomp$186$$, $size__5627__auto__$jscomp$186$$, $b__71260$jscomp$1$$, $s__71258__$2$jscomp$1$$, $temp__5823__auto__$jscomp$478$$) {
                        return function $sensei$frontend$admin$paypal_statistics$page_$_iter__71257_$_iter__71262$$($s__71263$$) {
                          return new $APP.$cljs$core$LazySeq$$(null, function($i__71259$jscomp$2$$, $currency$jscomp$25$$) {
                            return function() {
                              for (;;) {
                                var $s__71263__$2_temp__5823__auto____$1$jscomp$76$$ = $APP.$cljs$core$seq$$($s__71263$$);
                                if ($s__71263__$2_temp__5823__auto____$1$jscomp$76$$) {
                                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71263__$2_temp__5823__auto____$1$jscomp$76$$)) {
                                    var $JSCompiler_inline_result$jscomp$990_c__5626__auto____$1$jscomp$18$$ = $APP.$cljs$core$_chunked_first$$($s__71263__$2_temp__5823__auto____$1$jscomp$76$$), $size__5627__auto____$1$jscomp$18$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$990_c__5626__auto____$1$jscomp$18$$), $b__71265_plan$jscomp$70$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$18$$);
                                    a: {
                                      for (var $i__71264$jscomp$inline_4657$$ = 0;;) {
                                        if ($i__71264$jscomp$inline_4657$$ < $size__5627__auto____$1$jscomp$18$$) {
                                          var $plan$jscomp$inline_4658_x$jscomp$inline_6767$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$990_c__5626__auto____$1$jscomp$18$$, $i__71264$jscomp$inline_4657$$), $b$jscomp$inline_6766$$ = $b__71265_plan$jscomp$70$$;
                                          $plan$jscomp$inline_4658_x$jscomp$inline_6767$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$25$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($plan$jscomp$inline_4658_x$jscomp$inline_6767$$) + "-total";
                                          $b$jscomp$inline_6766$$.add($plan$jscomp$inline_4658_x$jscomp$inline_6767$$);
                                          $i__71264$jscomp$inline_4657$$ += 1;
                                        } else {
                                          $JSCompiler_inline_result$jscomp$990_c__5626__auto____$1$jscomp$18$$ = !0;
                                          break a;
                                        }
                                      }
                                      $JSCompiler_inline_result$jscomp$990_c__5626__auto____$1$jscomp$18$$ = void 0;
                                    }
                                    return $JSCompiler_inline_result$jscomp$990_c__5626__auto____$1$jscomp$18$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71265_plan$jscomp$70$$), $sensei$frontend$admin$paypal_statistics$page_$_iter__71257_$_iter__71262$$($APP.$cljs$core$_chunked_rest$$($s__71263__$2_temp__5823__auto____$1$jscomp$76$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71265_plan$jscomp$70$$), null);
                                  }
                                  $b__71265_plan$jscomp$70$$ = $APP.$cljs$core$first$$($s__71263__$2_temp__5823__auto____$1$jscomp$76$$);
                                  return $APP.$cljs$core$cons$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$25$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71265_plan$jscomp$70$$) + "-total", $sensei$frontend$admin$paypal_statistics$page_$_iter__71257_$_iter__71262$$($APP.$cljs$core$rest$$($s__71263__$2_temp__5823__auto____$1$jscomp$76$$)));
                                }
                                return null;
                              }
                            };
                          }($i__71259$jscomp$1$$, $currency$jscomp$24$$, $c__5626__auto__$jscomp$186$$, $size__5627__auto__$jscomp$186$$, $b__71260$jscomp$1$$, $s__71258__$2$jscomp$1$$, $temp__5823__auto__$jscomp$478$$), null, null);
                        };
                      }($i__71259$$, $currency$jscomp$23$$, $c__5626__auto__$jscomp$185$$, $size__5627__auto__$jscomp$185$$, $b__71260$$, $s__71258__$2$$, $temp__5823__auto__$jscomp$477$$)(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["basic", "standard", "pro", "unknown"], null));
                    }()], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $currency$jscomp$23$$], null)));
                    $i__71259$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71260$$), $sensei$frontend$admin$paypal_statistics$page_$_iter__71257$$($APP.$cljs$core$_chunked_rest$$($s__71258__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71260$$), null);
            }
            var $currency$jscomp$22$$ = $APP.$cljs$core$first$$($s__71258__$2$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2258$div_DOT_mb_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$22$$) + 
            " Payments by plan"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$paypal_statistics$bar_chart$$, function() {
              return function($currency$jscomp$26$$) {
                return function $sensei$frontend$admin$paypal_statistics$page_$_iter__71257_$_iter__71268$$($s__71269$$) {
                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                    for (;;) {
                      var $s__71269__$2_temp__5823__auto____$1$jscomp$77$$ = $APP.$cljs$core$seq$$($s__71269$$);
                      if ($s__71269__$2_temp__5823__auto____$1$jscomp$77$$) {
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71269__$2_temp__5823__auto____$1$jscomp$77$$)) {
                          var $JSCompiler_inline_result$jscomp$991_c__5626__auto__$jscomp$188$$ = $APP.$cljs$core$_chunked_first$$($s__71269__$2_temp__5823__auto____$1$jscomp$77$$), $size__5627__auto__$jscomp$188$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$991_c__5626__auto__$jscomp$188$$), $b__71271_plan$jscomp$72$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$188$$);
                          a: {
                            for (var $i__71270$jscomp$inline_4660$$ = 0;;) {
                              if ($i__71270$jscomp$inline_4660$$ < $size__5627__auto__$jscomp$188$$) {
                                var $plan$jscomp$inline_4661_x$jscomp$inline_6770$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$991_c__5626__auto__$jscomp$188$$, $i__71270$jscomp$inline_4660$$), $b$jscomp$inline_6769$$ = $b__71271_plan$jscomp$72$$;
                                $plan$jscomp$inline_4661_x$jscomp$inline_6770$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$26$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($plan$jscomp$inline_4661_x$jscomp$inline_6770$$) + "-total";
                                $b$jscomp$inline_6769$$.add($plan$jscomp$inline_4661_x$jscomp$inline_6770$$);
                                $i__71270$jscomp$inline_4660$$ += 1;
                              } else {
                                $JSCompiler_inline_result$jscomp$991_c__5626__auto__$jscomp$188$$ = !0;
                                break a;
                              }
                            }
                            $JSCompiler_inline_result$jscomp$991_c__5626__auto__$jscomp$188$$ = void 0;
                          }
                          return $JSCompiler_inline_result$jscomp$991_c__5626__auto__$jscomp$188$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71271_plan$jscomp$72$$), $sensei$frontend$admin$paypal_statistics$page_$_iter__71257_$_iter__71268$$($APP.$cljs$core$_chunked_rest$$($s__71269__$2_temp__5823__auto____$1$jscomp$77$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71271_plan$jscomp$72$$), null);
                        }
                        $b__71271_plan$jscomp$72$$ = $APP.$cljs$core$first$$($s__71269__$2_temp__5823__auto____$1$jscomp$77$$);
                        return $APP.$cljs$core$cons$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$26$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71271_plan$jscomp$72$$) + "-total", $sensei$frontend$admin$paypal_statistics$page_$_iter__71257_$_iter__71268$$($APP.$cljs$core$rest$$($s__71269__$2_temp__5823__auto____$1$jscomp$77$$)));
                      }
                      return null;
                    }
                  }, null, null);
                };
              }($currency$jscomp$22$$, $s__71258__$2$$, $temp__5823__auto__$jscomp$477$$)(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["basic", "standard", "pro", "unknown"], null));
            }()], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $currency$jscomp$22$$], null)), $sensei$frontend$admin$paypal_statistics$page_$_iter__71257$$($APP.$cljs$core$rest$$($s__71258__$2$$)));
          }
          return null;
        }
      }, null, null);
    }(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["EUR", "USD", "JPY"], null));
  }(), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2258$div_DOT_mb_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Total Subscription Counts"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$paypal_statistics$bar_chart$$, function() {
    return function $sensei$frontend$admin$paypal_statistics$page_$_iter__71277$$($s__71278$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__71278__$2_temp__5823__auto__$jscomp$481$$ = $APP.$cljs$core$seq$$($s__71278$$);
          if ($s__71278__$2_temp__5823__auto__$jscomp$481$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71278__$2_temp__5823__auto__$jscomp$481$$)) {
              var $JSCompiler_inline_result$jscomp$992_c__5626__auto__$jscomp$189$$ = $APP.$cljs$core$_chunked_first$$($s__71278__$2_temp__5823__auto__$jscomp$481$$), $size__5627__auto__$jscomp$189$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$992_c__5626__auto__$jscomp$189$$), $b__71280_plan$jscomp$74$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$189$$);
              a: {
                for (var $i__71279$jscomp$inline_4663$$ = 0;;) {
                  if ($i__71279$jscomp$inline_4663$$ < $size__5627__auto__$jscomp$189$$) {
                    var $plan$jscomp$inline_4664_x$jscomp$inline_6773$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$992_c__5626__auto__$jscomp$189$$, $i__71279$jscomp$inline_4663$$), $b$jscomp$inline_6772$$ = $b__71280_plan$jscomp$74$$;
                    $plan$jscomp$inline_4664_x$jscomp$inline_6773$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($plan$jscomp$inline_4664_x$jscomp$inline_6773$$) + "-count";
                    $b$jscomp$inline_6772$$.add($plan$jscomp$inline_4664_x$jscomp$inline_6773$$);
                    $i__71279$jscomp$inline_4663$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$992_c__5626__auto__$jscomp$189$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$992_c__5626__auto__$jscomp$189$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$992_c__5626__auto__$jscomp$189$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71280_plan$jscomp$74$$), $sensei$frontend$admin$paypal_statistics$page_$_iter__71277$$($APP.$cljs$core$_chunked_rest$$($s__71278__$2_temp__5823__auto__$jscomp$481$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71280_plan$jscomp$74$$), null);
            }
            $b__71280_plan$jscomp$74$$ = $APP.$cljs$core$first$$($s__71278__$2_temp__5823__auto__$jscomp$481$$);
            return $APP.$cljs$core$cons$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71280_plan$jscomp$74$$) + "-count", $sensei$frontend$admin$paypal_statistics$page_$_iter__71277$$($APP.$cljs$core$rest$$($s__71278__$2_temp__5823__auto__$jscomp$481$$)));
          }
          return null;
        }
      }, null, null);
    }(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["basic", "standard", "pro", "unknown"], null));
  }()], null)], null)], null), function() {
    return function $sensei$frontend$admin$paypal_statistics$page_$_iter__71283$$($s__71284$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $temp__5823__auto__$jscomp$482$$ = $APP.$cljs$core$seq$$($s__71284$$);
          if ($temp__5823__auto__$jscomp$482$$) {
            var $s__71284__$2$$ = $temp__5823__auto__$jscomp$482$$;
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71284__$2$$)) {
              var $c__5626__auto__$jscomp$190$$ = $APP.$cljs$core$_chunked_first$$($s__71284__$2$$), $size__5627__auto__$jscomp$190$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$190$$), $b__71286$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$190$$);
              return function() {
                for (var $i__71285$$ = 0;;) {
                  if ($i__71285$$ < $size__5627__auto__$jscomp$190$$) {
                    var $currency$jscomp$28$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$190$$, $i__71285$$);
                    $APP.$cljs$core$chunk_append$$($b__71286$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2258$div_DOT_mb_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$28$$) + 
                    " Subscription Counts"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$paypal_statistics$bar_chart$$, function() {
                      return function($i__71285$jscomp$1$$, $currency$jscomp$29$$, $c__5626__auto__$jscomp$191$$, $size__5627__auto__$jscomp$191$$, $b__71286$jscomp$1$$, $s__71284__$2$jscomp$1$$, $temp__5823__auto__$jscomp$483$$) {
                        return function $sensei$frontend$admin$paypal_statistics$page_$_iter__71283_$_iter__71287$$($s__71288$$) {
                          return new $APP.$cljs$core$LazySeq$$(null, function($i__71285$jscomp$2$$, $currency$jscomp$30$$) {
                            return function() {
                              for (;;) {
                                var $s__71288__$2_temp__5823__auto____$1$jscomp$78$$ = $APP.$cljs$core$seq$$($s__71288$$);
                                if ($s__71288__$2_temp__5823__auto____$1$jscomp$78$$) {
                                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71288__$2_temp__5823__auto____$1$jscomp$78$$)) {
                                    var $JSCompiler_inline_result$jscomp$993_c__5626__auto____$1$jscomp$19$$ = $APP.$cljs$core$_chunked_first$$($s__71288__$2_temp__5823__auto____$1$jscomp$78$$), $size__5627__auto____$1$jscomp$19$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$993_c__5626__auto____$1$jscomp$19$$), $b__71290_plan$jscomp$76$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto____$1$jscomp$19$$);
                                    a: {
                                      for (var $i__71289$jscomp$inline_4666$$ = 0;;) {
                                        if ($i__71289$jscomp$inline_4666$$ < $size__5627__auto____$1$jscomp$19$$) {
                                          var $plan$jscomp$inline_4667_x$jscomp$inline_6776$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$993_c__5626__auto____$1$jscomp$19$$, $i__71289$jscomp$inline_4666$$), $b$jscomp$inline_6775$$ = $b__71290_plan$jscomp$76$$;
                                          $plan$jscomp$inline_4667_x$jscomp$inline_6776$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$30$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($plan$jscomp$inline_4667_x$jscomp$inline_6776$$) + "-count";
                                          $b$jscomp$inline_6775$$.add($plan$jscomp$inline_4667_x$jscomp$inline_6776$$);
                                          $i__71289$jscomp$inline_4666$$ += 1;
                                        } else {
                                          $JSCompiler_inline_result$jscomp$993_c__5626__auto____$1$jscomp$19$$ = !0;
                                          break a;
                                        }
                                      }
                                      $JSCompiler_inline_result$jscomp$993_c__5626__auto____$1$jscomp$19$$ = void 0;
                                    }
                                    return $JSCompiler_inline_result$jscomp$993_c__5626__auto____$1$jscomp$19$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71290_plan$jscomp$76$$), $sensei$frontend$admin$paypal_statistics$page_$_iter__71283_$_iter__71287$$($APP.$cljs$core$_chunked_rest$$($s__71288__$2_temp__5823__auto____$1$jscomp$78$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71290_plan$jscomp$76$$), null);
                                  }
                                  $b__71290_plan$jscomp$76$$ = $APP.$cljs$core$first$$($s__71288__$2_temp__5823__auto____$1$jscomp$78$$);
                                  return $APP.$cljs$core$cons$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$30$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71290_plan$jscomp$76$$) + "-count", $sensei$frontend$admin$paypal_statistics$page_$_iter__71283_$_iter__71287$$($APP.$cljs$core$rest$$($s__71288__$2_temp__5823__auto____$1$jscomp$78$$)));
                                }
                                return null;
                              }
                            };
                          }($i__71285$jscomp$1$$, $currency$jscomp$29$$, $c__5626__auto__$jscomp$191$$, $size__5627__auto__$jscomp$191$$, $b__71286$jscomp$1$$, $s__71284__$2$jscomp$1$$, $temp__5823__auto__$jscomp$483$$), null, null);
                        };
                      }($i__71285$$, $currency$jscomp$28$$, $c__5626__auto__$jscomp$190$$, $size__5627__auto__$jscomp$190$$, $b__71286$$, $s__71284__$2$$, $temp__5823__auto__$jscomp$482$$)(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["basic", "standard", "pro", "unknown"], null));
                    }()], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $currency$jscomp$28$$], null)));
                    $i__71285$$ += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71286$$), $sensei$frontend$admin$paypal_statistics$page_$_iter__71283$$($APP.$cljs$core$_chunked_rest$$($s__71284__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71286$$), null);
            }
            var $currency$jscomp$27$$ = $APP.$cljs$core$first$$($s__71284__$2$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2258$div_DOT_mb_3$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$27$$) + 
            " Subscription Counts"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$paypal_statistics$bar_chart$$, function() {
              return function($currency$jscomp$31$$) {
                return function $sensei$frontend$admin$paypal_statistics$page_$_iter__71283_$_iter__71299$$($s__71300$$) {
                  return new $APP.$cljs$core$LazySeq$$(null, function() {
                    for (;;) {
                      var $s__71300__$2_temp__5823__auto____$1$jscomp$79$$ = $APP.$cljs$core$seq$$($s__71300$$);
                      if ($s__71300__$2_temp__5823__auto____$1$jscomp$79$$) {
                        if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__71300__$2_temp__5823__auto____$1$jscomp$79$$)) {
                          var $JSCompiler_inline_result$jscomp$994_c__5626__auto__$jscomp$193$$ = $APP.$cljs$core$_chunked_first$$($s__71300__$2_temp__5823__auto____$1$jscomp$79$$), $size__5627__auto__$jscomp$193$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$994_c__5626__auto__$jscomp$193$$), $b__71302_plan$jscomp$78$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$193$$);
                          a: {
                            for (var $i__71301$jscomp$inline_4669$$ = 0;;) {
                              if ($i__71301$jscomp$inline_4669$$ < $size__5627__auto__$jscomp$193$$) {
                                var $plan$jscomp$inline_4670_x$jscomp$inline_6779$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$994_c__5626__auto__$jscomp$193$$, $i__71301$jscomp$inline_4669$$), $b$jscomp$inline_6778$$ = $b__71302_plan$jscomp$78$$;
                                $plan$jscomp$inline_4670_x$jscomp$inline_6779$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$31$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($plan$jscomp$inline_4670_x$jscomp$inline_6779$$) + "-count";
                                $b$jscomp$inline_6778$$.add($plan$jscomp$inline_4670_x$jscomp$inline_6779$$);
                                $i__71301$jscomp$inline_4669$$ += 1;
                              } else {
                                $JSCompiler_inline_result$jscomp$994_c__5626__auto__$jscomp$193$$ = !0;
                                break a;
                              }
                            }
                            $JSCompiler_inline_result$jscomp$994_c__5626__auto__$jscomp$193$$ = void 0;
                          }
                          return $JSCompiler_inline_result$jscomp$994_c__5626__auto__$jscomp$193$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71302_plan$jscomp$78$$), $sensei$frontend$admin$paypal_statistics$page_$_iter__71283_$_iter__71299$$($APP.$cljs$core$_chunked_rest$$($s__71300__$2_temp__5823__auto____$1$jscomp$79$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__71302_plan$jscomp$78$$), null);
                        }
                        $b__71302_plan$jscomp$78$$ = $APP.$cljs$core$first$$($s__71300__$2_temp__5823__auto____$1$jscomp$79$$);
                        return $APP.$cljs$core$cons$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($currency$jscomp$31$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($b__71302_plan$jscomp$78$$) + "-count", $sensei$frontend$admin$paypal_statistics$page_$_iter__71283_$_iter__71299$$($APP.$cljs$core$rest$$($s__71300__$2_temp__5823__auto____$1$jscomp$79$$)));
                      }
                      return null;
                    }
                  }, null, null);
                };
              }($currency$jscomp$27$$, $s__71284__$2$$, $temp__5823__auto__$jscomp$482$$)(new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["basic", "standard", "pro", "unknown"], null));
            }()], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $currency$jscomp$27$$], null)), $sensei$frontend$admin$paypal_statistics$page_$_iter__71283$$($APP.$cljs$core$rest$$($s__71284__$2$$)));
          }
          return null;
        }
      }, null, null);
    }(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["EUR", "USD", "JPY"], null));
  }()], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/paypal-statistics", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "PayPal Statistics", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $cljs$cst$5630$paypal_statistics$$, $sensei$frontend$admin$paypal_statistics$initial_start_date$$, $sensei$frontend$admin$paypal_statistics$initial_end_date$$], null);
}], null)], null));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5634$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_set_logs_end_timestamp$$, function($db$jscomp$424$$, $end_timestamp_p__71291$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_timestamp_p__71291$$, 0, null);
  $end_timestamp_p__71291$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_timestamp_p__71291$$, 1, null);
  return $APP.$cljs$core$assoc_in$$($db$jscomp$424$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5635$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs$$, $cljs$cst$5636$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_end_timestamp$$], null), $end_timestamp_p__71291$$);
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5637$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_set_vm_name_filter$$, function($db$jscomp$425$$, $p__71295_vm_name$jscomp$1$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71295_vm_name$jscomp$1$$, 0, null);
  $p__71295_vm_name$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71295_vm_name$jscomp$1$$, 1, null);
  return $APP.$cljs$core$assoc_in$$($db$jscomp$425$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5635$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs$$, $cljs$cst$5638$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_vm_name$$], null), $p__71295_vm_name$jscomp$1$$);
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5639$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs_end_timestamp$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$426$$) {
  return $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($db$jscomp$426$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5635$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs$$, $cljs$cst$5636$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_end_timestamp$$], null));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5640$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs_vm_name_filter$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$427$$) {
  return $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($db$jscomp$427$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5635$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs$$, $cljs$cst$5638$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_vm_name$$], null));
}]));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5641$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_displayed_logs$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $vm_name$jscomp$2$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5640$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs_vm_name_filter$$], null))), $end_timestamp$jscomp$1$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
    [$cljs$cst$5639$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs_end_timestamp$$], null))), $limit$jscomp$12$$ = function() {
      var $or__5142__auto__$jscomp$536$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2675$infinite_scrolling_limit$$, $cljs$cst$5635$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_logs$$], null)));
      return $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$536$$) ? $or__5142__auto__$jscomp$536$$ : 30;
    }();
    return $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5641$sensei_DOT_frontend_DOT_admin_DOT_worker_logs_SLASH_displayed_logs$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $cljs$cst$5642$worker$$, $APP.$cljs$cst$2041$log_entries$$, 
    new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2055$desc$$], null), $APP.$cljs$core$truth_$$($vm_name$jscomp$2$$) ? new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $cljs$cst$5643$vm_name$$, 
    $APP.$cljs$cst$2130$_EQ__EQ_$$, $APP.$cljs$core$name$$($vm_name$jscomp$2$$)], null) : null, $APP.$cljs$core$empty_QMARK_$$($end_timestamp$jscomp$1$$) ? null : function() {
      var $d$jscomp$169$$ = $APP.$tools$date$add_days$$($APP.$tools$date$_LT__str$$($end_timestamp$jscomp$1$$), 1);
      return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2688$_LT_$$, $d$jscomp$169$$], null);
    }(), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$695$limit$$, $limit$jscomp$12$$], null)], null)], null)], null)));
  });
});
var $sensei$frontend$admin$worker_logs$event_info$$, $method_table__5747__auto__$jscomp$inline_6781$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $prefer_table__5748__auto__$jscomp$inline_6782$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $method_cache__5749__auto__$jscomp$inline_6783$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), 
$cached_hierarchy__5750__auto__$jscomp$inline_6784$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $hierarchy__5751__auto__$jscomp$inline_6785$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$cst$297$hierarchy$$, $APP.$cljs$core$get_global_hierarchy$$.$cljs$core$IFn$_invoke$arity$0$ ? $APP.$cljs$core$get_global_hierarchy$$.$cljs$core$IFn$_invoke$arity$0$() : $APP.$cljs$core$get_global_hierarchy$$.call(null));
$sensei$frontend$admin$worker_logs$event_info$$ = new $APP.$cljs$core$MultiFn$$($APP.$cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$("sensei.frontend.admin.worker-logs", "event-info"), $APP.$cljs$cst$132$event$$, $hierarchy__5751__auto__$jscomp$inline_6785$$, $method_table__5747__auto__$jscomp$inline_6781$$, $prefer_table__5748__auto__$jscomp$inline_6782$$, $method_cache__5749__auto__$jscomp$inline_6783$$, $cached_hierarchy__5750__auto__$jscomp$inline_6784$$);
$sensei$frontend$admin$worker_logs$event_info$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$298$default$$, function($map__71309__$1_p__71308_unknown_keys$$) {
  $map__71309__$1_p__71308_unknown_keys$$ = $APP.$cljs$core$__destructure_map$$($map__71309__$1_p__71308_unknown_keys$$);
  var $old_state$jscomp$1_state_changes_str$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71309__$1_p__71308_unknown_keys$$, $cljs$cst$5647$old_state$$), $new_state$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71309__$1_p__71308_unknown_keys$$, $APP.$cljs$cst$189$new_state$$);
  $old_state$jscomp$1_state_changes_str$$ = $APP.$cljs$core$truth_$$($new_state$jscomp$7$$) ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($old_state$jscomp$1_state_changes_str$$) ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($old_state$jscomp$1_state_changes_str$$)) + " -\x3e " : null) + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($new_state$jscomp$7$$) : null;
  $map__71309__$1_p__71308_unknown_keys$$ = $APP.$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$variadic$($map__71309__$1_p__71308_unknown_keys$$, $cljs$cst$5647$old_state$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$189$new_state$$, $APP.$cljs$cst$132$event$$, $cljs$cst$5643$vm_name$$, $APP.$cljs$cst$1017$timestamp$$]));
  return "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($old_state$jscomp$1_state_changes_str$$) + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$seq$$($map__71309__$1_p__71308_unknown_keys$$) ? "  " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($map__71309__$1_p__71308_unknown_keys$$) : null);
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5650$override_user$$, function($db$jscomp$428$$, $p__209922_uid$jscomp$231$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__209922_uid$jscomp$231$$, 0, null);
  $p__209922_uid$jscomp$231$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__209922_uid$jscomp$231$$, 1, null);
  return $APP.$cljs$core$assoc_in$$($db$jscomp$428$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$726$current_user$$, $APP.$cljs$cst$722$uid$$], null), $p__209922_uid$jscomp$231$$);
});
var $sensei$frontend$admin$play_ai_stats$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -0.1))), $sensei$frontend$admin$play_ai_stats$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), 1)));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5658$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_game_start_logs$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$9_vec__71337$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $APP.$cljs$cst$2400$play_ai$$], null))), $from_date$jscomp$9_log_data$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$9_vec__71337$$, 0, null);
    $to_date$jscomp$9_vec__71337$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$9_vec__71337$$, 1, null);
    $from_date$jscomp$9_log_data$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5658$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_game_start_logs$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$2400$play_ai$$, 
    $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $from_date$jscomp$9_log_data$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, 
    $APP.$cljs$cst$2688$_LT_$$, $to_date$jscomp$9_vec__71337$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$132$event$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $APP.$cljs$cst$4090$game_started$$], null)], null)], null)], null)));
    return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$second$$, $from_date$jscomp$9_log_data$$);
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5653$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_total_games$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5658$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_game_start_logs$$], null), function($logs$jscomp$4$$) {
  return $APP.$cljs$core$count$$($logs$jscomp$4$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5659$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_by_user$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5658$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_game_start_logs$$], null), function($logs$jscomp$5$$) {
  return $APP.$cljs$core$group_by$$($APP.$cljs$cst$722$uid$$, $logs$jscomp$5$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5654$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_total_users$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5659$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_by_user$$], null), function($by_user$$) {
  return $APP.$cljs$core$count$$($by_user$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5655$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_ranked_by_user_chart$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5658$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_game_start_logs$$], null), function($logs$jscomp$6$$) {
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Ranked games started"], null), $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$frequencies$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$count$$, $APP.$cljs$core$val$$), $APP.$cljs$core$group_by$$($APP.$cljs$cst$722$uid$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$cst$4201$ranked_QMARK_$$, 
  $logs$jscomp$6$$))))));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5656$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_custom_by_user_chart$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5658$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_game_start_logs$$], null), function($logs$jscomp$7$$) {
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Custom games started"], null), $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$frequencies$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$count$$, $APP.$cljs$core$val$$), $APP.$cljs$core$group_by$$($APP.$cljs$cst$722$uid$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$complement$$($APP.$cljs$cst$4201$ranked_QMARK_$$), 
  $logs$jscomp$7$$))))));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5657$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_max_daily_games_chart$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5659$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_by_user$$], null), function($by_uid_max_daily_games$$) {
  $by_uid_max_daily_games$$ = $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$frequencies$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($games$jscomp$26_p__71340$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($games$jscomp$26_p__71340$$, 0, null);
    $games$jscomp$26_p__71340$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($games$jscomp$26_p__71340$$, 1, null);
    return $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$max$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($games__$1_p__71344$$) {
      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($games__$1_p__71344$$, 0, null);
      $games__$1_p__71344$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($games__$1_p__71344$$, 1, null);
      return $APP.$cljs$core$count$$($games__$1_p__71344$$);
    }, $APP.$cljs$core$group_by$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$($APP.$tools$date$__GT_day_str$$, $APP.$cljs$cst$1017$timestamp$$), $games$jscomp$26_p__71340$$)));
  }, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($games$jscomp$27_p__71349$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($games$jscomp$27_p__71349$$, 0, null);
    $games$jscomp$27_p__71349$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($games$jscomp$27_p__71349$$, 1, null);
    return $APP.$cljs$core$count$$($games$jscomp$27_p__71349$$) > 2;
  }, $by_uid_max_daily_games$$))));
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Max daily games"], null), $by_uid_max_daily_games$$);
}]));
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5660$play_ai_stats$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1754$overflow_x$$, $APP.$cljs$cst$850$auto$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3107$h2$$, "Play AI Statistics"], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $APP.$cljs$cst$2400$play_ai$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
  5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2101$h4$$, "Total games: ", $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5653$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_total_games$$], null))), " - Total users: ", $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5654$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_total_users$$], null)))], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1773$h3$$, "Ranked started by user"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$play_ai_stats$histogram$$, new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5655$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_ranked_by_user_chart$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1773$h3$$, "Custom started by user"], null), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$play_ai_stats$histogram$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5656$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_custom_by_user_chart$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$1773$h3$$, "Max daily games"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$play_ai_stats$histogram$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5657$sensei_DOT_frontend_DOT_admin_DOT_play_ai_stats_SLASH_max_daily_games_chart$$], null)], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/play-ai-stats", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Play AI Stats", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $APP.$cljs$cst$2400$play_ai$$, $sensei$frontend$admin$play_ai_stats$initial_start_date$$, $sensei$frontend$admin$play_ai_stats$initial_end_date$$], null);
}], null)], null));
var $sensei$frontend$admin$problem_stats$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -7))), $sensei$frontend$admin$problem_stats$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), 1)));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5663$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_problem_added_logs$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$10_vec__71414$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $APP.$cljs$cst$3515$problem$$], null))), $from_date$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$10_vec__71414$$, 0, null);
    $to_date$jscomp$10_vec__71414$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$10_vec__71414$$, 1, null);
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($from_date$jscomp$10$$) ? $to_date$jscomp$10_vec__71414$$ : $from_date$jscomp$10$$) ? $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$second$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5663$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_problem_added_logs$$, 
    new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$1494$problems$$, $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $to_date$jscomp$10_vec__71414$$], 
    null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $from_date$jscomp$10$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$132$event$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $APP.$cljs$cst$2191$added$$], null)], null)], null)], null)))) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5664$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5663$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_problem_added_logs$$], null), function($event_counts$jscomp$1_logs$jscomp$8_percentages_vec__71420$$) {
  $event_counts$jscomp$1_logs$jscomp$8_percentages_vec__71420$$ = $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($events$jscomp$12_p__71427$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($events$jscomp$12_p__71427$$, 0, null);
    $events$jscomp$12_p__71427$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($events$jscomp$12_p__71427$$, 1, null);
    return $APP.$cljs$core$count$$($events$jscomp$12_p__71427$$);
  }, $APP.$cljs$core$group_by$$($APP.$cljs$cst$722$uid$$, $event_counts$jscomp$1_logs$jscomp$8_percentages_vec__71420$$)));
  $event_counts$jscomp$1_logs$jscomp$8_percentages_vec__71420$$ = $APP.$cljs$core$reduce$$.$cljs$core$IFn$_invoke$arity$3$(function($p__71431_total__$1$$, $data__$1$jscomp$7_event_count$$) {
    var $data$jscomp$299$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71431_total__$1$$, 0, null);
    $p__71431_total__$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71431_total__$1$$, 1, null) + 1;
    $data__$1$jscomp$7_event_count$$ = $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($data$jscomp$299$$, $data__$1$jscomp$7_event_count$$, $p__71431_total__$1$$);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$data__$1$jscomp$7_event_count$$, $p__71431_total__$1$$], null);
  }, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$core$PersistentArrayMap$EMPTY$$, 0], null), $event_counts$jscomp$1_logs$jscomp$8_percentages_vec__71420$$);
  var $data$jscomp$298$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event_counts$jscomp$1_logs$jscomp$8_percentages_vec__71420$$, 0, null), $total$jscomp$14$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event_counts$jscomp$1_logs$jscomp$8_percentages_vec__71420$$, 1, null);
  $event_counts$jscomp$1_logs$jscomp$8_percentages_vec__71420$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($freq$jscomp$2_p__71453$$) {
    var $upload_count$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($freq$jscomp$2_p__71453$$, 0, null);
    $freq$jscomp$2_p__71453$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($freq$jscomp$2_p__71453$$, 1, null);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$upload_count$$, $freq$jscomp$2_p__71453$$ / $total$jscomp$14$$ * 100], null);
  }, $data$jscomp$298$$);
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$5665$chart_data$$, $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["User %"], null), $event_counts$jscomp$1_logs$jscomp$8_percentages_vec__71420$$), $APP.$cljs$cst$2023$total$$, $total$jscomp$14$$], null);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5661$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($p__71465_quality$jscomp$27$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71465_quality$jscomp$27$$, 0, null);
  $p__71465_quality$jscomp$27$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71465_quality$jscomp$27$$, 1, null);
  return $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5664$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_data$$, $p__71465_quality$jscomp$27$$], null));
}, function($map__71470__$1_p__71469$$) {
  $map__71470__$1_p__71469$$ = $APP.$cljs$core$__destructure_map$$($map__71470__$1_p__71469$$);
  return $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71470__$1_p__71469$$, $cljs$cst$5665$chart_data$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5662$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_total$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($p__71480_quality$jscomp$28$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71480_quality$jscomp$28$$, 0, null);
  $p__71480_quality$jscomp$28$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71480_quality$jscomp$28$$, 1, null);
  return $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5664$sensei_DOT_frontend_DOT_admin_DOT_problem_stats_SLASH_histogram_data$$, $p__71480_quality$jscomp$28$$], null));
}, function($map__71489__$1_p__71487$$) {
  $map__71489__$1_p__71487$$ = $APP.$cljs$core$__destructure_map$$($map__71489__$1_p__71487$$);
  return $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71489__$1_p__71487$$, $APP.$cljs$cst$2023$total$$);
}]));
$APP.$sensei$frontend$router$core$reg_page$$($APP.$cljs$cst$2175$problem_stats$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1754$overflow_x$$, $APP.$cljs$cst$850$auto$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1773$h3$$, "Problem statistics"], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $APP.$cljs$cst$3515$problem$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$problem_stats$problem_add_histogram$$], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/problem-stats", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Problem Statistics", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $APP.$cljs$cst$3515$problem$$, $sensei$frontend$admin$problem_stats$initial_start_date$$, $sensei$frontend$admin$problem_stats$initial_end_date$$], null);
}], null)], null));
var $sensei$frontend$admin$rank_statistics$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -7))), $sensei$frontend$admin$rank_statistics$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), 1))), $sensei$frontend$admin$rank_statistics$chart_size$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1047$height$$, 
250], null);
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5672$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_games$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$11_vec__71355$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5666$rank_statistics$$], null))), $from_date$jscomp$11_games$jscomp$28$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$11_vec__71355$$, 0, null);
    $to_date$jscomp$11_vec__71355$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$11_vec__71355$$, 1, null);
    $from_date$jscomp$11_games$jscomp$28$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5672$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_games$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$1510$uploads$$, 
    $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$132$event$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $cljs$cst$5673$upload_game$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, 
    $APP.$cljs$cst$2053$_LT__EQ_$$, $to_date$jscomp$11_vec__71355$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $from_date$jscomp$11_games$jscomp$28$$], null)], null)], null)], null)));
    return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$second$$, $from_date$jscomp$11_games$jscomp$28$$);
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5667$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_game_histogram_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5672$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_games$$], null), function($games$jscomp$29$$, $p__71359$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71359$$, 0, null);
  var $quality$jscomp$31$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71359$$, 1, null);
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$core$name$$($quality$jscomp$31$$)], null), $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71363_ranks$jscomp$1$$) {
    var $rank$jscomp$12$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71363_ranks$jscomp$1$$, 0, null);
    $p__71363_ranks$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71363_ranks$jscomp$1$$, 1, null);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$rank$jscomp$12$$, $APP.$cljs$core$count$$($p__71363_ranks$jscomp$1$$)], null);
  }, $APP.$cljs$core$group_by$$($APP.$cljs$core$identity$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$some_QMARK_$$, $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function($br$jscomp$5_map__71369__$1_map__71370_p__71368$$) {
    $br$jscomp$5_map__71369__$1_map__71370_p__71368$$ = $APP.$cljs$core$__destructure_map$$($br$jscomp$5_map__71369__$1_map__71370_p__71368$$);
    $br$jscomp$5_map__71369__$1_map__71370_p__71368$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($br$jscomp$5_map__71369__$1_map__71370_p__71368$$, $APP.$cljs$cst$1497$sgf_info$$);
    var $map__71370__$1_wr$jscomp$5$$ = $APP.$cljs$core$__destructure_map$$($br$jscomp$5_map__71369__$1_map__71370_p__71368$$);
    $br$jscomp$5_map__71369__$1_map__71370_p__71368$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71370__$1_wr$jscomp$5$$, $APP.$cljs$cst$1132$br$$);
    $map__71370__$1_wr$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71370__$1_wr$jscomp$5$$, $APP.$cljs$cst$1496$wr$$);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$common$rank$parse$$($br$jscomp$5_map__71369__$1_map__71370_p__71368$$), $APP.$sensei$common$rank$parse$$($map__71370__$1_wr$jscomp$5$$)], null);
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($game$jscomp$45$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$1503$quality$$.$cljs$core$IFn$_invoke$arity$1$($game$jscomp$45$$), $quality$jscomp$31$$);
  }, $games$jscomp$29$$)])))))));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5668$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_user_histogram_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5672$sensei_DOT_frontend_DOT_admin_DOT_rank_statistics_SLASH_games$$], null), function($games$jscomp$30$$, $p__71374$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71374$$, 0, null);
  var $quality$jscomp$32$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71374$$, 1, null);
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$core$name$$($quality$jscomp$32$$)], null), $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71379_ranks$jscomp$2$$) {
    var $rank$jscomp$13$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71379_ranks$jscomp$2$$, 0, null);
    $p__71379_ranks$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71379_ranks$jscomp$2$$, 1, null);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$rank$jscomp$13$$, $APP.$cljs$core$count$$($p__71379_ranks$jscomp$2$$)], null);
  }, $APP.$cljs$core$group_by$$($APP.$cljs$core$identity$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$, 0, null);
    $G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$, 1, null);
    $G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$ = $G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$ == null ? null : $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function($br$jscomp$6_map__71390__$1_map__71392_p__71389$$) {
      $br$jscomp$6_map__71390__$1_map__71392_p__71389$$ = $APP.$cljs$core$__destructure_map$$($br$jscomp$6_map__71390__$1_map__71392_p__71389$$);
      $br$jscomp$6_map__71390__$1_map__71392_p__71389$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($br$jscomp$6_map__71390__$1_map__71392_p__71389$$, $APP.$cljs$cst$1497$sgf_info$$);
      var $map__71392__$1_wr$jscomp$6$$ = $APP.$cljs$core$__destructure_map$$($br$jscomp$6_map__71390__$1_map__71392_p__71389$$);
      $br$jscomp$6_map__71390__$1_map__71392_p__71389$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71392__$1_wr$jscomp$6$$, $APP.$cljs$cst$1132$br$$);
      $map__71392__$1_wr$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71392__$1_wr$jscomp$6$$, $APP.$cljs$cst$1496$wr$$);
      return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$common$rank$parse$$($br$jscomp$6_map__71390__$1_map__71392_p__71389$$), $APP.$sensei$common$rank$parse$$($map__71392__$1_wr$jscomp$6$$)], null);
    }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$]));
    $G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$ = $G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$ == null ? null : $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$some_QMARK_$$, $G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$);
    $G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$ = $G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$ == null ? null : $sensei$frontend$admin$rank_statistics$median$$($G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$);
    return $G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$ == null ? null : Math.round($G__71388_G__71388__$1_G__71388__$2_G__71388__$3_p__71384$$);
  }, $APP.$cljs$core$group_by$$($APP.$cljs$cst$722$uid$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($game$jscomp$46$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$1503$quality$$.$cljs$core$IFn$_invoke$arity$1$($game$jscomp$46$$), $quality$jscomp$32$$);
  }, $games$jscomp$30$$)))))));
}]));
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5666$rank_statistics$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5669$div_DOT_my_container_DOT_my_wrapper$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5670$h2_DOT_mb_3$$, "Rank Statistics"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $cljs$cst$5666$rank_statistics$$], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4330$h3_DOT_mb_3$$, "By Games"], null), new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5671$div_DOT_chart_grid$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$rank_statistics$games_histogram$$, $APP.$cljs$cst$1200$free$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$rank_statistics$games_histogram$$, $APP.$cljs$cst$1201$basic$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$rank_statistics$games_histogram$$, $APP.$cljs$cst$1202$standard$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$rank_statistics$games_histogram$$, $APP.$cljs$cst$1203$pro$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4330$h3_DOT_mb_3$$, "By Users"], null), new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5671$div_DOT_chart_grid$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$rank_statistics$user_histogram$$, $APP.$cljs$cst$1200$free$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$rank_statistics$user_histogram$$, $APP.$cljs$cst$1201$basic$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$rank_statistics$user_histogram$$, $APP.$cljs$cst$1202$standard$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$rank_statistics$user_histogram$$, $APP.$cljs$cst$1203$pro$$], null)], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/rank-statistics", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Rank Statistics", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $cljs$cst$5666$rank_statistics$$, $sensei$frontend$admin$rank_statistics$initial_start_date$$, $sensei$frontend$admin$rank_statistics$initial_end_date$$], null);
}], null)], null));
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$5674$write_role$$, function($_$jscomp$1864_uid$jscomp$232$$, $p__210122_value$jscomp$403$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__210122_value$jscomp$403$$, 0, null);
  $_$jscomp$1864_uid$jscomp$232$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__210122_value$jscomp$403$$, 1, null);
  var $role$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__210122_value$jscomp$403$$, 2, null);
  $p__210122_value$jscomp$403$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__210122_value$jscomp$403$$, 3, null);
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$2328$firestore_SLASH_update_doc$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3622$roles$$, $_$jscomp$1864_uid$jscomp$232$$], null), $APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$role$$, $p__210122_value$jscomp$403$$])], null)], null);
});
var $sensei$frontend$admin$statistics$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_months$$(-6))), $sensei$frontend$admin$statistics$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$now$$())), $sensei$frontend$admin$statistics$chart_size$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1047$height$$, 250], null), $sensei$frontend$admin$statistics$marketing_events$$ = $APP.$cljs$core$PersistentHashMap$fromArrays$$("2023-07-22 2022-11-08 2023-08-05 2023-10-17 2020-05-10 2020-03-26 2021-12-17 2023-09-13 2021-03-31 2022-01-27 2020-07-03 2020-05-29 2023-08-14".split(" "), 
"Ranked mode beta;Pandanet Cooperation;EGC 2023 End;Play AI Monetization;Youngsun YouTube Video;AGA e-Journal article;Redesign;Ranked Mode;Live analysis launch;Play vs AI;Artem FB Post;Quiz Video FB Post;Pandanet JP Client beta".split(";")), $sensei$frontend$admin$statistics$colors$$ = $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$5679$revenue$$, $cljs$cst$5680$basic_uploads$$, $cljs$cst$5681$total_standard_subscriptions$$, $cljs$cst$5682$active_free_users$$, $cljs$cst$5683$pro_uploads$$, 
$cljs$cst$5684$standard_uploads$$, $cljs$cst$5685$total_pro_subscriptions$$, $cljs$cst$5686$free_uploads$$, $cljs$cst$5687$registrations$$, $cljs$cst$5688$total_basic_subscriptions$$], "#c80 #35c #4b4 #000 #dc0 #4b4 #dc0 #000 #060 #35c".split(" ")), $sensei$frontend$admin$statistics$grid$$ = $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1089$x$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$588$lines$$, $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__71438_text$jscomp$108$$) {
  var $day$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71438_text$jscomp$108$$, 0, null);
  $p__71438_text$jscomp$108$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71438_text$jscomp$108$$, 1, null);
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$172$value$$, $day$jscomp$22$$, $APP.$cljs$cst$368$text$$, $p__71438_text$jscomp$108$$, $APP.$cljs$cst$68$class$$, "chart-marketing-event"], null);
}, $sensei$frontend$admin$statistics$marketing_events$$)], null)], null));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5692$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_stats_by_day$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$12_vec__71513$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $APP.$cljs$cst$2723$stats$$], null))), $from_date$jscomp$12$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$12_vec__71513$$, 0, null);
    $to_date$jscomp$12_vec__71513$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$12_vec__71513$$, 1, null);
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($from_date$jscomp$12$$) ? $to_date$jscomp$12_vec__71513$$ : $from_date$jscomp$12$$) ? $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5519$stats_by_day$$, 
    new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5519$stats_by_day$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$217$day$$, $APP.$cljs$cst$2149$asc$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
    [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$217$day$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $APP.$tools$date$__GT_day_str$$($to_date$jscomp$12_vec__71513$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$217$day$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $APP.$tools$date$__GT_day_str$$($from_date$jscomp$12$$)], null)], null)], null)], null)))) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5689$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5692$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_stats_by_day$$], null), function($stats$jscomp$8$$, $p__71517$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71517$$, 0, null);
  var $fields$jscomp$18$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71517$$, 1, null);
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$($fields$jscomp$18$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71521$$) {
    var $day$jscomp$23$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71521$$, 0, null), $data$jscomp$302$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71521$$, 1, null);
    return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$23$$], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__71516_SHARP_$$) {
      return $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$302$$, $p1__71516_SHARP_$$, 0);
    }, $fields$jscomp$18$$));
  }, $stats$jscomp$8$$));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5690$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_revenue_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5692$sensei_DOT_frontend_DOT_admin_DOT_statistics_SLASH_stats_by_day$$], null), function($stats$jscomp$9$$, $p__71545$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71545$$, 0, null);
  var $fields$jscomp$19$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5688$total_basic_subscriptions$$, $cljs$cst$5681$total_standard_subscriptions$$, $cljs$cst$5685$total_pro_subscriptions$$], null), $prices$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$sensei$common$payment$regions$currencies$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$1205$euro$$, $APP.$cljs$cst$1208$plan_price$$], null)), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1201$basic$$, $APP.$cljs$cst$1202$standard$$, $APP.$cljs$cst$1203$pro$$], null));
  $APP.$cljs$core$println$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["(::revenue-chart-data)", $fields$jscomp$19$$, $prices$$]));
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5679$revenue$$], null), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71549$$) {
    var $day$jscomp$24$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71549$$, 0, null), $data$jscomp$303$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71549$$, 1, null);
    return $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$24$$], null), function($p1__71544_SHARP_$$) {
      return $APP.$cljs$core$reduce$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$($cljs$core$_STAR_$$, $p1__71544_SHARP_$$, $prices$$));
    }($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__71543_SHARP_$$) {
      return $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$303$$, $p1__71543_SHARP_$$, 0);
    }, $fields$jscomp$19$$)));
  }, $stats$jscomp$9$$));
}]));
$APP.$sensei$frontend$router$core$reg_page$$($APP.$cljs$cst$3681$statistics$$, $sensei$frontend$admin$statistics$page$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/statistics", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Statistics", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $APP.$cljs$cst$2723$stats$$, $sensei$frontend$admin$statistics$initial_start_date$$, $sensei$frontend$admin$statistics$initial_end_date$$], null);
}], null)], null));
var $sensei$frontend$admin$upload_stats$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -7))), $sensei$frontend$admin$upload_stats$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), 1)));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5699$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_upload_logs$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$13_vec__71442$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5548$funnel$$], null))), $from_date$jscomp$13$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$13_vec__71442$$, 0, null);
    $to_date$jscomp$13_vec__71442$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$13_vec__71442$$, 1, null);
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($from_date$jscomp$13$$) ? $to_date$jscomp$13_vec__71442$$ : $from_date$jscomp$13$$) ? $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$second$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5699$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_upload_logs$$, 
    new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$1510$uploads$$, $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2053$_LT__EQ_$$, $to_date$jscomp$13_vec__71442$$], 
    null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $from_date$jscomp$13$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$132$event$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $cljs$cst$5673$upload_game$$], null)], null)], null)], null)))) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5696$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_table_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5699$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_upload_logs$$], null), function($by_top_users_logs$jscomp$9_temp__5823__auto__$jscomp$504_user_stats$$) {
  if ($by_top_users_logs$jscomp$9_temp__5823__auto__$jscomp$504_user_stats$$ = $APP.$cljs$core$seq$$($by_top_users_logs$jscomp$9_temp__5823__auto__$jscomp$504_user_stats$$)) {
    $by_top_users_logs$jscomp$9_temp__5823__auto__$jscomp$504_user_stats$$ = $APP.$cljs$core$take$cljs$0core$0IFn$0_invoke$0arity$02$$(10, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$count$$, $APP.$cljs$core$second$$), $APP.$cljs$core$_GT_$$, $APP.$cljs$core$group_by$$($APP.$cljs$cst$722$uid$$, $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentHashSet$$(null, 
    new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1200$free$$, null], null), null), $APP.$cljs$cst$1503$quality$$), $by_top_users_logs$jscomp$9_temp__5823__auto__$jscomp$504_user_stats$$))));
    $by_top_users_logs$jscomp$9_temp__5823__auto__$jscomp$504_user_stats$$ = $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($JSCompiler_temp_const$jscomp$1003_p__71457$$) {
      var $uid$jscomp$247$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp_const$jscomp$1003_p__71457$$, 0, null), $JSCompiler_inline_result$jscomp$1004_uploads$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp_const$jscomp$1003_p__71457$$, 1, null);
      $JSCompiler_temp_const$jscomp$1003_p__71457$$ = $APP.$cljs$core$PersistentVector$EMPTY_NODE$$;
      var $JSCompiler_temp_const$jscomp$1001$$ = $APP.$cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$, $JSCompiler_temp_const$jscomp$1000$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$2023$total$$, $sensei$frontend$admin$upload_stats$upload_stats$$($JSCompiler_inline_result$jscomp$1004_uploads$jscomp$5$$)], null);
      $JSCompiler_inline_result$jscomp$1004_uploads$jscomp$5$$ = $APP.$cljs$core$update_vals$$($APP.$cljs$core$group_by$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$($APP.$tools$date$__GT_day_str$$, $APP.$cljs$cst$1017$timestamp$$), $JSCompiler_inline_result$jscomp$1004_uploads$jscomp$5$$), $sensei$frontend$admin$upload_stats$upload_stats$$);
      return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $JSCompiler_temp_const$jscomp$1003_p__71457$$, [$uid$jscomp$247$$, $JSCompiler_temp_const$jscomp$1001$$.call($APP.$cljs$core$merge$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$JSCompiler_temp_const$jscomp$1000$$, $JSCompiler_inline_result$jscomp$1004_uploads$jscomp$5$$]))], null);
    }, $by_top_users_logs$jscomp$9_temp__5823__auto__$jscomp$504_user_stats$$);
    var $all_days$$ = $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$distinct$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$(new $APP.$cljs$core$PersistentHashSet$$(null, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$2023$total$$, null], null), null), $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$keys$$, $APP.$cljs$core$second$$), 
    $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$by_top_users_logs$jscomp$9_temp__5823__auto__$jscomp$504_user_stats$$])))));
    return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$1234$days$$, $all_days$$, $APP.$cljs$cst$2051$users$$, $by_top_users_logs$jscomp$9_temp__5823__auto__$jscomp$504_user_stats$$], null);
  }
  return null;
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5700$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5699$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_upload_logs$$], null), function($logs$jscomp$10_percentages$jscomp$1_upload_counts_vec__71484$$, 
$data$jscomp$304_p__71476_quality$jscomp$34$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$304_p__71476_quality$jscomp$34$$, 0, null);
  $data$jscomp$304_p__71476_quality$jscomp$34$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$304_p__71476_quality$jscomp$34$$, 1, null);
  $logs$jscomp$10_percentages$jscomp$1_upload_counts_vec__71484$$ = $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71488_uploads$jscomp$6$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71488_uploads$jscomp$6$$, 0, null);
    $p__71488_uploads$jscomp$6$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71488_uploads$jscomp$6$$, 1, null);
    return $APP.$cljs$core$count$$($p__71488_uploads$jscomp$6$$);
  }, $APP.$cljs$core$group_by$$($APP.$cljs$cst$722$uid$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentHashSet$createAsIfByAssoc$$([$data$jscomp$304_p__71476_quality$jscomp$34$$]), $APP.$cljs$cst$1503$quality$$), $logs$jscomp$10_percentages$jscomp$1_upload_counts_vec__71484$$))));
  $logs$jscomp$10_percentages$jscomp$1_upload_counts_vec__71484$$ = $APP.$cljs$core$reduce$$.$cljs$core$IFn$_invoke$arity$3$(function($p__71497_total__$1$jscomp$1$$, $data__$1$jscomp$8_upload_count$jscomp$1$$) {
    var $data$jscomp$305$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71497_total__$1$jscomp$1$$, 0, null);
    $p__71497_total__$1$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71497_total__$1$jscomp$1$$, 1, null) + 1;
    $data__$1$jscomp$8_upload_count$jscomp$1$$ = $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($data$jscomp$305$$, $data__$1$jscomp$8_upload_count$jscomp$1$$, $p__71497_total__$1$jscomp$1$$);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$data__$1$jscomp$8_upload_count$jscomp$1$$, $p__71497_total__$1$jscomp$1$$], null);
  }, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$core$PersistentArrayMap$EMPTY$$, 0], null), $logs$jscomp$10_percentages$jscomp$1_upload_counts_vec__71484$$);
  $data$jscomp$304_p__71476_quality$jscomp$34$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($logs$jscomp$10_percentages$jscomp$1_upload_counts_vec__71484$$, 0, null);
  var $total$jscomp$18$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($logs$jscomp$10_percentages$jscomp$1_upload_counts_vec__71484$$, 1, null);
  $logs$jscomp$10_percentages$jscomp$1_upload_counts_vec__71484$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($freq$jscomp$3_p__71505$$) {
    var $upload_count$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($freq$jscomp$3_p__71505$$, 0, null);
    $freq$jscomp$3_p__71505$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($freq$jscomp$3_p__71505$$, 1, null);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$upload_count$jscomp$2$$, $freq$jscomp$3_p__71505$$ / $total$jscomp$18$$ * 100], null);
  }, $data$jscomp$304_p__71476_quality$jscomp$34$$);
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$5665$chart_data$$, $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Percent"], null), $logs$jscomp$10_percentages$jscomp$1_upload_counts_vec__71484$$), $APP.$cljs$cst$2023$total$$, $total$jscomp$18$$], null);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5693$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($p__71525_quality$jscomp$35$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71525_quality$jscomp$35$$, 0, null);
  $p__71525_quality$jscomp$35$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71525_quality$jscomp$35$$, 1, null);
  return $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5700$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_data$$, $p__71525_quality$jscomp$35$$], null));
}, function($map__71534__$1_p__71533$$) {
  $map__71534__$1_p__71533$$ = $APP.$cljs$core$__destructure_map$$($map__71534__$1_p__71533$$);
  return $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71534__$1_p__71533$$, $cljs$cst$5665$chart_data$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5694$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_total$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($p__71535_quality$jscomp$36$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71535_quality$jscomp$36$$, 0, null);
  $p__71535_quality$jscomp$36$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71535_quality$jscomp$36$$, 1, null);
  return $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5700$sensei_DOT_frontend_DOT_admin_DOT_upload_stats_SLASH_histogram_data$$, $p__71535_quality$jscomp$36$$], null));
}, function($map__71540__$1_p__71539$$) {
  $map__71540__$1_p__71539$$ = $APP.$cljs$core$__destructure_map$$($map__71540__$1_p__71539$$);
  return $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71540__$1_p__71539$$, $APP.$cljs$cst$2023$total$$);
}]));
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5701$upload_stats$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$69$style$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1754$overflow_x$$, $APP.$cljs$cst$850$auto$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1773$h3$$, "Upload statistics"], 
  null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $cljs$cst$5548$funnel$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_histogram$$, $APP.$cljs$cst$1200$free$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_histogram$$, $APP.$cljs$cst$1201$basic$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
  1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$quality_histogram$$, $APP.$cljs$cst$1202$standard$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$upload_stats$quality_histogram$$, $APP.$cljs$cst$1203$pro$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$upload_stats$most_active_users_table$$], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/upload-stats", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Upload Statistics", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $cljs$cst$5548$funnel$$, $sensei$frontend$admin$upload_stats$initial_start_date$$, $sensei$frontend$admin$upload_stats$initial_end_date$$], null);
}], null)], null));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5707$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_grouped_error_logs$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($end_date$jscomp$4_p__71449$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_date$jscomp$4_p__71449$$, 0, null);
  $end_date$jscomp$4_p__71449$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_date$jscomp$4_p__71449$$, 1, null);
  return $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5708$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_error_logs$$, $end_date$jscomp$4_p__71449$$], null));
}, function($error_logs$jscomp$1$$) {
  return $sensei$frontend$admin$user_errors$group_by_prefix$$($error_logs$jscomp$1$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5708$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_error_logs$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($end_date$jscomp$5_p__71461$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_date$jscomp$5_p__71461$$, 0, null);
  $end_date$jscomp$5_p__71461$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_date$jscomp$5_p__71461$$, 1, null);
  return $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5708$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_error_logs$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$2051$users$$, $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 
  4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$132$event$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $APP.$cljs$cst$63$error$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2688$_LT_$$, $end_date$jscomp$5_p__71461$$], null), 
  new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2055$desc$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$695$limit$$, 300], null)], null)], null)], null));
}, function($errors$jscomp$4$$) {
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($browser_id$jscomp$1_map__71475_p__71471$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($browser_id$jscomp$1_map__71475_p__71471$$, 0, null);
    $browser_id$jscomp$1_map__71475_p__71471$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($browser_id$jscomp$1_map__71475_p__71471$$, 1, null);
    var $map__71475__$1_message$jscomp$83$$ = $APP.$cljs$core$__destructure_map$$($browser_id$jscomp$1_map__71475_p__71471$$);
    $browser_id$jscomp$1_map__71475_p__71471$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71475__$1_message$jscomp$83$$, $APP.$cljs$cst$1115$browser_id$$);
    var $uid$jscomp$248$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71475__$1_message$jscomp$83$$, $APP.$cljs$cst$722$uid$$), $timestamp$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71475__$1_message$jscomp$83$$, $APP.$cljs$cst$1017$timestamp$$);
    $map__71475__$1_message$jscomp$83$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71475__$1_message$jscomp$83$$, $APP.$cljs$cst$27$message$$);
    return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$timestamp$jscomp$19$$, $map__71475__$1_message$jscomp$83$$, $APP.$cljs$core$truth_$$($uid$jscomp$248$$) ? $uid$jscomp$248$$ : $browser_id$jscomp$1_map__71475_p__71471$$], null);
  }, $errors$jscomp$4$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5709$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_start_date$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($end_date$jscomp$6_p__71490$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_date$jscomp$6_p__71490$$, 0, null);
  $end_date$jscomp$6_p__71490$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($end_date$jscomp$6_p__71490$$, 1, null);
  return $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5708$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_error_logs$$, $end_date$jscomp$6_p__71490$$], null));
}, function($error_logs$jscomp$2$$) {
  return $APP.$cljs$core$first$$($APP.$cljs$core$peek$$($error_logs$jscomp$2$$));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5702$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_grouped_QMARK_$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$429$$) {
  return $cljs$cst$5702$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_grouped_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$($db$jscomp$429$$);
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5706$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_set_grouped$$, function($db$jscomp$430$$, $p__71501_value$jscomp$406$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71501_value$jscomp$406$$, 0, null);
  $p__71501_value$jscomp$406$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71501_value$jscomp$406$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$430$$, $cljs$cst$5702$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_grouped_QMARK_$$, $p__71501_value$jscomp$406$$);
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5703$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_end_date_str$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$431$$) {
  return $cljs$cst$5703$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_end_date_str$$.$cljs$core$IFn$_invoke$arity$1$($db$jscomp$431$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5704$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_end_date$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5703$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_end_date_str$$], null), function($date$jscomp$67_end_date_str$jscomp$1$$) {
  $date$jscomp$67_end_date_str$jscomp$1$$ = $APP.$tools$date$_LT__str$$($date$jscomp$67_end_date_str$jscomp$1$$);
  return $APP.$tools$date$date_QMARK_$$($date$jscomp$67_end_date_str$jscomp$1$$) ? $date$jscomp$67_end_date_str$jscomp$1$$ : null;
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5705$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_set_end_date_str$$, function($db$jscomp$432$$, $date$jscomp$68_p__71509$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($date$jscomp$68_p__71509$$, 0, null);
  $date$jscomp$68_p__71509$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($date$jscomp$68_p__71509$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$432$$, $cljs$cst$5703$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_end_date_str$$, $date$jscomp$68_p__71509$$);
});
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5714$user_errors$$, function() {
  var $grouped_QMARK_$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5702$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_grouped_QMARK_$$], null))), $end_date_str$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5703$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_end_date_str$$], null))), $end_date$jscomp$3$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5704$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_end_date$$], null))), $events$jscomp$13$$ = $APP.$tools$date$date_QMARK_$$($end_date$jscomp$3$$) ? $APP.$cljs$core$truth_$$($grouped_QMARK_$$) ? 
  $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5707$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_grouped_error_logs$$, $end_date$jscomp$3$$], null))) : $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5708$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_error_logs$$, $end_date$jscomp$3$$], null))) : null, $start_date$jscomp$3$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5709$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_start_date$$, $end_date$jscomp$3$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 8, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5710$main_DOT_my_container_DOT_my_wrapper$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3366$h1$$, "User errors"], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5711$div_DOT_my_form_row$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$836$label$$, "Group errors?"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1531$span$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$sensei$frontend$widget$form$checkbox$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  2, [$APP.$cljs$cst$172$value$$, $grouped_QMARK_$$, $APP.$cljs$cst$933$on_change$$, function($value$jscomp$405$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5706$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_set_grouped$$, $value$jscomp$405$$], null));
  }], null)], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5711$div_DOT_my_form_row$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$836$label$$, "End date"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1531$span$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$sensei$frontend$widget$form$input$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$68$class$$, $cljs$cst$5712$admin_date_str$$, $APP.$cljs$cst$172$value$$, $end_date_str$$, $APP.$cljs$cst$933$on_change$$, function($value$jscomp$404$$) {
    return $APP.$re_frame$router$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5705$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_set_end_date_str$$, $value$jscomp$404$$], null));
  }], null)], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$logs_table$show_logs$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Date", "Event", "user id"], null), $events$jscomp$13$$], null), $APP.$cljs$core$truth_$$($start_date$jscomp$3$$) ? 
  new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5713$button_DOT_my_btn$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$821$on_click$$, function() {
    return $APP.$re_frame$core$dispatch$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5705$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_set_end_date_str$$, $APP.$tools$date$__GT_str$$($start_date$jscomp$3$$)], null));
  }], null), "Load Next"], null) : null], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/user-errors", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "User Errors", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5705$sensei_DOT_frontend_DOT_admin_DOT_user_errors_SLASH_set_end_date_str$$, $APP.$tools$date$__GT_str$$($APP.$tools$date$now$$())], null);
}], null)], null));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5718$create_voucher_success$$, function($db$jscomp$433$$, $data$jscomp$306_p__71564$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$306_p__71564$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$306_p__71564$$, 1, null);
  $data$jscomp$306_p__71564$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$306_p__71564$$, 2, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$433$$, $cljs$cst$5719$sensei_DOT_frontend_DOT_admin_DOT_voucher_SLASH_new_vouchers$$, $cljs$cst$5720$codes$$.$cljs$core$IFn$_invoke$arity$1$($data$jscomp$306_p__71564$$));
});
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$5721$create_voucher$$, function($map__71571__$1_p__71569$$, $p__71570_params$jscomp$129$$) {
  $map__71571__$1_p__71569$$ = $APP.$cljs$core$__destructure_map$$($map__71571__$1_p__71569$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71571__$1_p__71569$$, $APP.$cljs$cst$152$db$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71570_params$jscomp$129$$, 0, null);
  $p__71570_params$jscomp$129$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71570_params$jscomp$129$$, 1, null);
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$2650$call_server$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$770$method$$, $APP.$cljs$cst$1674$POST$$, $APP.$cljs$cst$83$path$$, "/voucher", $APP.$cljs$cst$602$params$$, $p__71570_params$jscomp$129$$, $APP.$cljs$cst$783$on_success$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5718$create_voucher_success$$, $p__71570_params$jscomp$129$$], 
  null)], null)], null);
});
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$5722$delete_voucher$$, function($_$jscomp$1896_code$jscomp$35$$, $p__71575$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71575$$, 0, null);
  $_$jscomp$1896_code$jscomp$35$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71575$$, 1, null);
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$2650$call_server$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$770$method$$, $APP.$cljs$cst$2658$DELETE$$, $APP.$cljs$cst$83$path$$, "/voucher", $APP.$cljs$cst$602$params$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$351$code$$, $_$jscomp$1896_code$jscomp$35$$], null)], null)], null);
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5719$sensei_DOT_frontend_DOT_admin_DOT_voucher_SLASH_new_vouchers$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$435$$) {
  return $cljs$cst$5719$sensei_DOT_frontend_DOT_admin_DOT_voucher_SLASH_new_vouchers$$.$cljs$core$IFn$_invoke$arity$1$($db$jscomp$435$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5729$valid_vouchers$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5730$sensei_DOT_frontend_DOT_admin_DOT_voucher_SLASH_vouchers$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[$cljs$cst$5731$vouchers$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $cljs$cst$5732$created_at$$, $APP.$cljs$cst$2055$desc$$], null)], null)], null)], null), function($vouchers$$) {
  return $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$, 0, null);
    $JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$, 1, null);
    var $and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$), $expires_at$jscomp$inline_4692$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$, $APP.$cljs$cst$4991$expires_at$$);
    $JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$, $cljs$cst$5715$redeemed$$);
    var $multi_user_QMARK_$jscomp$inline_4694$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$, $cljs$cst$5716$multi_user_QMARK_$$), $user_limit$jscomp$inline_4695$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$, $cljs$cst$5717$user_limit$$);
    $APP.$cljs$core$truth_$$($and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$) ? $APP.$cljs$core$truth_$$($expires_at$jscomp$inline_4692$$) ? ($and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$ = $APP.$tools$date$before_QMARK_$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$tools$date$now$$(), $expires_at$jscomp$inline_4692$$])), $JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$ = 
    $APP.$cljs$core$truth_$$($and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$) ? $APP.$cljs$core$truth_$$($multi_user_QMARK_$jscomp$inline_4694$$) ? $APP.$cljs$core$not$$($user_limit$jscomp$inline_4695$$) || $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$) < $user_limit$jscomp$inline_4695$$ : $APP.$cljs$core$empty_QMARK_$$($JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$) : 
    $and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$) : $JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$ = $expires_at$jscomp$inline_4692$$ : $JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$ = $and__5140__auto____$2$jscomp$inline_4696_map__210271__$1$jscomp$inline_4691$$;
    return $JSCompiler_inline_result$jscomp$1005_p__71619_redeemed$jscomp$inline_4693_voucher$jscomp$4$$;
  }, $vouchers$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5751$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_tab$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$436$$) {
  return $cljs$cst$5751$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_tab$$.$cljs$core$IFn$_invoke$arity$2$($db$jscomp$436$$, $cljs$cst$5741$by_voucher_code$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5743$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_input_text$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$437$$) {
  return $cljs$cst$5743$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_input_text$$.$cljs$core$IFn$_invoke$arity$2$($db$jscomp$437$$, "");
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5752$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_voucher_filter$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$438$$) {
  return $cljs$cst$5752$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_voucher_filter$$.$cljs$core$IFn$_invoke$arity$1$($db$jscomp$438$$);
}]));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5753$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_selected_vouchers$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $temp__5823__auto__$jscomp$511_text$jscomp$109$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5752$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_voucher_filter$$], null)));
    if ($APP.$cljs$core$truth_$$($temp__5823__auto__$jscomp$511_text$jscomp$109$$)) {
      var $G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($temp__5823__auto__$jscomp$511_text$jscomp$109$$, 0, null);
      $temp__5823__auto__$jscomp$511_text$jscomp$109$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($temp__5823__auto__$jscomp$511_text$jscomp$109$$, 1, null);
      $G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$ = $G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$.$fqn$ : null;
      switch($G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$) {
        case "by-voucher-code":
          return $G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2104$firestore_SLASH_doc$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5731$vouchers$$, $temp__5823__auto__$jscomp$511_text$jscomp$109$$], null)], 
          null))), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$], null);
        case "by-voucher-comment":
          return $G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5754$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_vouchers_by_comment$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
          [$cljs$cst$5731$vouchers$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$142$comment$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $temp__5823__auto__$jscomp$511_text$jscomp$109$$], null)], null)], null)], null))), $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$second$$, $G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$);
        default:
          throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__71563__$1_type$jscomp$288_voucher$jscomp$5_vouchers$jscomp$5$$));
      }
    } else {
      return null;
    }
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5755$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_selected_users$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5753$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_selected_vouchers$$], null), function($vouchers$jscomp$6$$) {
  return $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5715$redeemed$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$vouchers$jscomp$6$$]));
}]));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5756$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_funnel_data$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $users$jscomp$9$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5755$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_selected_users$$], null)));
    return $APP.$cljs$core$vec$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$some_QMARK_$$, $APP.$cljs$core$second$$), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__71579_redeem_date$$) {
      var $uid$jscomp$250$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71579_redeem_date$$, 0, null);
      $p__71579_redeem_date$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71579_redeem_date$$, 1, null);
      return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$uid$jscomp$250$$, $p__71579_redeem_date$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2104$firestore_SLASH_doc$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5548$funnel$$, 
      $APP.$cljs$cst$28$data$$, $APP.$cljs$cst$2051$users$$, $uid$jscomp$250$$], null)], null)))], null);
    }, $users$jscomp$9$$)));
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5747$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_stats$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5753$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_selected_vouchers$$], null), $APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 
1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5755$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_selected_users$$], null), $APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5756$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_funnel_data$$], null), function($data$jscomp$308_p__71601_sub_count$$) {
  var $voucher_count_vouchers$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$308_p__71601_sub_count$$, 0, null), $user_count$jscomp$3_users$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$308_p__71601_sub_count$$, 1, null);
  $data$jscomp$308_p__71601_sub_count$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($data$jscomp$308_p__71601_sub_count$$, 2, null);
  return $APP.$cljs$core$seq$$($voucher_count_vouchers$jscomp$7$$) ? ($voucher_count_vouchers$jscomp$7$$ = $APP.$cljs$core$count$$($voucher_count_vouchers$jscomp$7$$), $user_count$jscomp$3_users$jscomp$10$$ = $APP.$cljs$core$count$$($user_count$jscomp$3_users$jscomp$10$$), $data$jscomp$308_p__71601_sub_count$$ = $sensei$frontend$admin$voucher_funnel$count_subs$$($data$jscomp$308_p__71601_sub_count$$), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$5731$vouchers$$, $voucher_count_vouchers$jscomp$7$$, 
  $APP.$cljs$cst$2051$users$$, $user_count$jscomp$3_users$jscomp$10$$, $cljs$cst$5748$subs$$, $data$jscomp$308_p__71601_sub_count$$, $cljs$cst$5749$sub_rate$$, Math.round($data$jscomp$308_p__71601_sub_count$$ * 100 / $user_count$jscomp$3_users$jscomp$10$$)], null)) : null;
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5739$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_tab$$, function($db$jscomp$439$$, $p__71605_tab$jscomp$8$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71605_tab$jscomp$8$$, 0, null);
  $p__71605_tab$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71605_tab$jscomp$8$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$439$$, $cljs$cst$5751$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_tab$$, $p__71605_tab$jscomp$8$$);
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5744$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_input_text$$, function($db$jscomp$440$$, $p__71609_text$jscomp$110$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71609_text$jscomp$110$$, 0, null);
  $p__71609_text$jscomp$110$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71609_text$jscomp$110$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$440$$, $cljs$cst$5743$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_input_text$$, $p__71609_text$jscomp$110$$);
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5746$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_set_voucher_filter$$, function($db$jscomp$441$$, $p__71613_text$jscomp$111$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71613_text$jscomp$111$$, 0, null);
  var $type$jscomp$289$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71613_text$jscomp$111$$, 1, null);
  $p__71613_text$jscomp$111$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71613_text$jscomp$111$$, 2, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$441$$, $cljs$cst$5752$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_voucher_filter$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$type$jscomp$289$$, $p__71613_text$jscomp$111$$], null));
});
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5757$voucher_funnel$$, function() {
  var $current_tab$jscomp$7$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5751$sensei_DOT_frontend_DOT_admin_DOT_voucher_funnel_SLASH_tab$$], null)));
  return new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3224$div_DOT_container$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3107$h2$$, "Voucher Funnel"], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$sensei$frontend$admin$voucher_funnel$tabs$$, $current_tab$jscomp$7$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$voucher_funnel$voucher_search$$, $current_tab$jscomp$7$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$voucher_funnel$result_table$$], 
  null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/voucher-funnel", new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3616$admin$$, $APP.$cljs$cst$840$title$$, "Voucher Funnel"], null)], null));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5758$worker_queues$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5759$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_worker_queues$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $cljs$cst$5642$worker$$], null)], null), function($worker_docs$$) {
  return $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__80240_worker_doc$$) {
    var $worker_name$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80240_worker_doc$$, 0, null);
    $p__80240_worker_doc$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80240_worker_doc$$, 1, null);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$worker_name$$, $cljs$cst$5761$jobs$$.$cljs$core$IFn$_invoke$arity$2$($p__80240_worker_doc$$, $APP.$cljs$core$PersistentArrayMap$EMPTY$$)], null);
  }, $worker_docs$$));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5762$non_worker_queues$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function() {
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$2343$fast$$, $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5763$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_fast_queue$$, 
  new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $APP.$cljs$cst$2343$fast$$], null)], null)))), $APP.$cljs$cst$2341$slow$$, $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5764$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_slow_queue$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $APP.$cljs$cst$2341$slow$$], null)], null)))), $cljs$cst$5765$failures$$, $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 
  3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5766$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_failures_queue$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $cljs$cst$5765$failures$$], null)], null))))], null);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5767$all_queues$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5758$worker_queues$$], null), $APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5762$non_worker_queues$$], null), 
function($non_worker_queues_p__80244$$) {
  var $worker_queues$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($non_worker_queues_p__80244$$, 0, null);
  $non_worker_queues_p__80244$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($non_worker_queues_p__80244$$, 1, null);
  return $APP.$cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$worker_queues$$, $non_worker_queues_p__80244$$]));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5768$worker_queue_names$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5767$all_queues$$], null), function($queues$jscomp$5$$) {
  return $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$some_QMARK_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__80248_SHARP_$$) {
    return $APP.$cljs$core$seq$$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($queues$jscomp$5$$, $p1__80248_SHARP_$$)) ? $p1__80248_SHARP_$$ : null;
  }, $APP.$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2343$fast$$, $APP.$cljs$cst$2341$slow$$, $cljs$cst$5765$failures$$], null), $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$string_QMARK_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$first$$, $queues$jscomp$5$$)))));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5769$worker_queues_by_game$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$170$_LT__$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5767$all_queues$$], null), function($all_queues$$) {
  return $APP.$tools$misc$map_vals$$(function($jobs$jscomp$7$$) {
    return $APP.$cljs$core$group_by$$($APP.$cljs$cst$149$queue$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($job$jscomp$4_p__80249$$) {
      var $queue_name$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($job$jscomp$4_p__80249$$, 0, null);
      $job$jscomp$4_p__80249$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($job$jscomp$4_p__80249$$, 1, null);
      return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($job$jscomp$4_p__80249$$, $APP.$cljs$cst$149$queue$$, $queue_name$jscomp$1$$);
    }, $jobs$jscomp$7$$));
  }, $APP.$cljs$core$group_by$$(function($job$jscomp$5_p__80253$$) {
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($job$jscomp$5_p__80253$$, 0, null);
    $job$jscomp$5_p__80253$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($job$jscomp$5_p__80253$$, 1, null);
    return $APP.$cljs$cst$3017$upload_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$5_p__80253$$);
  }, $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function($jobs$jscomp$8_p__80257$$) {
    var $queue_name$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($jobs$jscomp$8_p__80257$$, 0, null);
    $jobs$jscomp$8_p__80257$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($jobs$jscomp$8_p__80257$$, 1, null);
    return $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($job$jscomp$6_p__80261$$) {
      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($job$jscomp$6_p__80261$$, 0, null);
      $job$jscomp$6_p__80261$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($job$jscomp$6_p__80261$$, 1, null);
      return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$queue_name$jscomp$3$$, $job$jscomp$6_p__80261$$], null);
    }, $jobs$jscomp$8_p__80257$$);
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$all_queues$$]))));
}]));
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5770$available_instances$$, function() {
  return $APP.$reagent$ratom$make_reaction$$(function() {
    return $APP.$cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$first$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($healthy_QMARK__map__80270_p__80266$$) {
      var $worker$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($healthy_QMARK__map__80270_p__80266$$, 0, null);
      $healthy_QMARK__map__80270_p__80266$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($healthy_QMARK__map__80270_p__80266$$, 1, null);
      var $last_heartbeat_map__80270__$1$$ = $APP.$cljs$core$__destructure_map$$($healthy_QMARK__map__80270_p__80266$$);
      $healthy_QMARK__map__80270_p__80266$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($last_heartbeat_map__80270__$1$$, $cljs$cst$5771$healthy_QMARK_$$);
      $last_heartbeat_map__80270__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($last_heartbeat_map__80270__$1$$, $cljs$cst$5772$last_heartbeat$$);
      return $APP.$cljs$core$truth_$$($healthy_QMARK__map__80270_p__80266$$) ? $APP.$cljs$core$truth_$$($last_heartbeat_map__80270__$1$$) ? ($APP.$cljs$core$truth_$$($last_heartbeat_map__80270__$1$$) ? $APP.$tools$date$ms_between$$($last_heartbeat_map__80270__$1$$, $APP.$tools$date$now$$()) / 1000 : 0) < 60 && !$APP.$goog$string$internal$contains$$($worker$jscomp$3$$, "live") : $last_heartbeat_map__80270__$1$$ : $healthy_QMARK__map__80270_p__80266$$;
    }, $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, $cljs$cst$5773$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_aw$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5774$worker_status$$], null)], null))))));
  });
});
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$5775$move_job$$, function($_$jscomp$1915$$, $p__80271$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80271$$, 0, null);
  var $job$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80271$$, 1, null), $from_queue$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80271$$, 2, null), $to_queue$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80271$$, 3, null), $from_is_worker_QMARK_$$ = typeof $from_queue$$ === "string", $to_is_worker_QMARK_$$ = typeof $to_queue$$ === "string";
  $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["move-job", $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$7$$), $from_queue$$, $to_queue$$]));
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$3793$firestore_SLASH_batched$$, function($G__80281_p__80276_write_doc$jscomp$9$$) {
    var $G__80283_map__80277__$1_update_doc$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($G__80281_p__80276_write_doc$jscomp$9$$), $G__80278_80395_G__80282_delete_doc$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__80283_map__80277__$1_update_doc$jscomp$1$$, $APP.$cljs$cst$712$delete_doc$$);
    $G__80281_p__80276_write_doc$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__80283_map__80277__$1_update_doc$jscomp$1$$, $APP.$cljs$cst$709$write_doc$$);
    $G__80283_map__80277__$1_update_doc$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__80283_map__80277__$1_update_doc$jscomp$1$$, $APP.$cljs$cst$710$update_doc$$);
    if ($from_is_worker_QMARK_$$) {
      $G__80278_80395_G__80282_delete_doc$jscomp$3$$ = new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $cljs$cst$5642$worker$$, $from_queue$$], null);
      var $G__80279_80396_G__80280_80397$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$5761$jobs$$, $APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$7$$), $APP.$tools$json$raw$$($APP.$module$node_modules$firebase$firestore$dist$index_cjs$$.deleteField())])], null);
      $G__80283_map__80277__$1_update_doc$jscomp$1$$.$cljs$core$IFn$_invoke$arity$2$ ? $G__80283_map__80277__$1_update_doc$jscomp$1$$.$cljs$core$IFn$_invoke$arity$2$($G__80278_80395_G__80282_delete_doc$jscomp$3$$, $G__80279_80396_G__80280_80397$$) : $G__80283_map__80277__$1_update_doc$jscomp$1$$.call(null, $G__80278_80395_G__80282_delete_doc$jscomp$3$$, $G__80279_80396_G__80280_80397$$);
    } else {
      $G__80279_80396_G__80280_80397$$ = new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $from_queue$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$7$$)], null), $G__80278_80395_G__80282_delete_doc$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__80278_80395_G__80282_delete_doc$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($G__80279_80396_G__80280_80397$$) : $G__80278_80395_G__80282_delete_doc$jscomp$3$$.call(null, 
      $G__80279_80396_G__80280_80397$$);
    }
    if ($to_is_worker_QMARK_$$) {
      return $G__80281_p__80276_write_doc$jscomp$9$$ = new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $cljs$cst$5642$worker$$, $to_queue$$], null), $G__80278_80395_G__80282_delete_doc$jscomp$3$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$5761$jobs$$, $APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$7$$), 
      $job$jscomp$7$$])], null), $G__80283_map__80277__$1_update_doc$jscomp$1$$.$cljs$core$IFn$_invoke$arity$2$ ? $G__80283_map__80277__$1_update_doc$jscomp$1$$.$cljs$core$IFn$_invoke$arity$2$($G__80281_p__80276_write_doc$jscomp$9$$, $G__80278_80395_G__80282_delete_doc$jscomp$3$$) : $G__80283_map__80277__$1_update_doc$jscomp$1$$.call(null, $G__80281_p__80276_write_doc$jscomp$9$$, $G__80278_80395_G__80282_delete_doc$jscomp$3$$);
    }
    $G__80283_map__80277__$1_update_doc$jscomp$1$$ = new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $to_queue$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$7$$)], null);
    return $G__80281_p__80276_write_doc$jscomp$9$$.$cljs$core$IFn$_invoke$arity$2$ ? $G__80281_p__80276_write_doc$jscomp$9$$.$cljs$core$IFn$_invoke$arity$2$($G__80283_map__80277__$1_update_doc$jscomp$1$$, $job$jscomp$7$$) : $G__80281_p__80276_write_doc$jscomp$9$$.call(null, $G__80283_map__80277__$1_update_doc$jscomp$1$$, $job$jscomp$7$$);
  }], null);
});
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$5776$reset_error_count$$, function($_$jscomp$1916_job$jscomp$8$$, $p__80285_queue$jscomp$10$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80285_queue$jscomp$10$$, 0, null);
  $_$jscomp$1916_job$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80285_queue$jscomp$10$$, 1, null);
  $p__80285_queue$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80285_queue$jscomp$10$$, 2, null);
  var $is_worker_QMARK_$$ = typeof $p__80285_queue$jscomp$10$$ === "string", $updated_job$$ = $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($_$jscomp$1916_job$jscomp$8$$, $cljs$cst$5777$error_count$$, 0);
  return $is_worker_QMARK_$$ ? new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$2328$firestore_SLASH_update_doc$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $cljs$cst$5642$worker$$, $p__80285_queue$jscomp$10$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$5761$jobs$$, 
  $APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($_$jscomp$1916_job$jscomp$8$$), $updated_job$$])], null)], null)], null) : new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$2328$firestore_SLASH_update_doc$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, 
  $cljs$cst$5618$queues$$, $p__80285_queue$jscomp$10$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($_$jscomp$1916_job$jscomp$8$$)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$5777$error_count$$, 0], null)], null)], null);
});
$APP.$re_frame$core$reg_event_fx$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$5778$mark_done$$, function($_$jscomp$1917$$, $p__80289$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80289$$, 0, null);
  var $job$jscomp$9$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80289$$, 1, null), $queue$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80289$$, 2, null), $is_worker_QMARK_$jscomp$1$$ = typeof $queue$jscomp$11$$ === "string";
  $APP.$cljs$core$prn$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mark-done", $job$jscomp$9$$, $queue$jscomp$11$$]));
  return new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$3793$firestore_SLASH_batched$$, function($G__80296_delete_doc$jscomp$4_p__80294$$) {
    var $G__80298_map__80295__$1_update_doc$jscomp$2$$ = $APP.$cljs$core$__destructure_map$$($G__80296_delete_doc$jscomp$4_p__80294$$);
    $G__80296_delete_doc$jscomp$4_p__80294$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__80298_map__80295__$1_update_doc$jscomp$2$$, $APP.$cljs$cst$712$delete_doc$$);
    $G__80298_map__80295__$1_update_doc$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__80298_map__80295__$1_update_doc$jscomp$2$$, $APP.$cljs$cst$710$update_doc$$);
    if ($is_worker_QMARK_$jscomp$1$$) {
      $G__80296_delete_doc$jscomp$4_p__80294$$ = new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $cljs$cst$5642$worker$$, $queue$jscomp$11$$], null);
      var $G__80297$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$5761$jobs$$, $APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$9$$), $APP.$tools$json$raw$$($APP.$module$node_modules$firebase$firestore$dist$index_cjs$$.deleteField())])], null);
      return $G__80298_map__80295__$1_update_doc$jscomp$2$$.$cljs$core$IFn$_invoke$arity$2$ ? $G__80298_map__80295__$1_update_doc$jscomp$2$$.$cljs$core$IFn$_invoke$arity$2$($G__80296_delete_doc$jscomp$4_p__80294$$, $G__80297$$) : $G__80298_map__80295__$1_update_doc$jscomp$2$$.call(null, $G__80296_delete_doc$jscomp$4_p__80294$$, $G__80297$$);
    }
    $G__80298_map__80295__$1_update_doc$jscomp$2$$ = new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5760$scheduler$$, $cljs$cst$5618$queues$$, $queue$jscomp$11$$, $APP.$cljs$cst$2505$job_id$$.$cljs$core$IFn$_invoke$arity$1$($job$jscomp$9$$)], null);
    return $G__80296_delete_doc$jscomp$4_p__80294$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__80296_delete_doc$jscomp$4_p__80294$$.$cljs$core$IFn$_invoke$arity$1$($G__80298_map__80295__$1_update_doc$jscomp$2$$) : $G__80296_delete_doc$jscomp$4_p__80294$$.call(null, $G__80298_map__80295__$1_update_doc$jscomp$2$$);
  }], null);
});
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5779$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_set_selected_queue$$, function($db$jscomp$442$$, $p__80299_worker$jscomp$4$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80299_worker$jscomp$4$$, 0, null);
  $p__80299_worker$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__80299_worker$jscomp$4$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$442$$, $cljs$cst$5780$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_admin_selected_queue$$, $p__80299_worker$jscomp$4$$);
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5781$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_selected_queue$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$443$$) {
  return $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($db$jscomp$443$$, $cljs$cst$5780$sensei_DOT_frontend_DOT_admin_DOT_workers_SLASH_admin_selected_queue$$, "");
}]));
var $sensei$frontend$admin$worker_errors$initial_start_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), -6))), $sensei$frontend$admin$worker_errors$initial_end_date$$ = $APP.$tools$date$_LT__str$$($APP.$tools$date$__GT_day_str$$($APP.$tools$date$add_days$$($APP.$tools$date$now$$(), 1))), $sensei$frontend$admin$worker_errors$chart_size$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$1047$height$$, 200], 
null), $sensei$frontend$admin$worker_errors$colors$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, ["preemption-detected", "#b76105", "worker-timed-out", "#e00"], null);
$APP.$re_frame$core$reg_sub_raw$$($cljs$cst$5802$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_worker_events$$, function($_$jscomp$1920$$, $p__71677$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71677$$, 0, null);
  var $event$jscomp$121$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71677$$, 1, null);
  return $APP.$reagent$ratom$make_reaction$$(function() {
    var $to_date$jscomp$14_vec__71685$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5494$date_range$$, $cljs$cst$5791$worker_errors$$], null))), $data$jscomp$312_from_date$jscomp$14$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$14_vec__71685$$, 0, null);
    $to_date$jscomp$14_vec__71685$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($to_date$jscomp$14_vec__71685$$, 1, null);
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($data$jscomp$312_from_date$jscomp$14$$) ? $to_date$jscomp$14_vec__71685$$ : $data$jscomp$312_from_date$jscomp$14$$) ? ($data$jscomp$312_from_date$jscomp$14$$ = $APP.$cljs$core$deref$$($APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1507$firestore_SLASH_collection$$, new $APP.$cljs$core$PersistentVector$$(null, 
    2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5802$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_worker_events$$, $event$jscomp$121$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2040$logs$$, $cljs$cst$5642$worker$$, $APP.$cljs$cst$2041$log_entries$$, new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 
    3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$693$order_by$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2149$asc$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$132$event$$, $APP.$cljs$cst$2130$_EQ__EQ_$$, $event$jscomp$121$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, 
    $APP.$cljs$cst$2053$_LT__EQ_$$, $to_date$jscomp$14_vec__71685$$], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$694$where$$, $APP.$cljs$cst$1017$timestamp$$, $APP.$cljs$cst$2687$_GT__EQ_$$, $data$jscomp$312_from_date$jscomp$14$$], null)], null)], null)], null))), $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($map__71694_p__71689_timestamp$jscomp$20$$) {
      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($map__71694_p__71689_timestamp$jscomp$20$$, 0, null);
      $map__71694_p__71689_timestamp$jscomp$20$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($map__71694_p__71689_timestamp$jscomp$20$$, 1, null);
      var $map__71694__$1_vm_name$jscomp$8$$ = $APP.$cljs$core$__destructure_map$$($map__71694_p__71689_timestamp$jscomp$20$$);
      $map__71694_p__71689_timestamp$jscomp$20$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71694__$1_vm_name$jscomp$8$$, $APP.$cljs$cst$1017$timestamp$$);
      $map__71694__$1_vm_name$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71694__$1_vm_name$jscomp$8$$, $cljs$cst$5643$vm_name$$);
      return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$tools$date$__GT_day_str$$($map__71694_p__71689_timestamp$jscomp$20$$), $map__71694__$1_vm_name$jscomp$8$$], null);
    }, $data$jscomp$312_from_date$jscomp$14$$)) : null;
  });
});
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5803$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filtered_worker_events$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($event$jscomp$122_p__71699$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event$jscomp$122_p__71699$$, 0, null);
  $event$jscomp$122_p__71699$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event$jscomp$122_p__71699$$, 1, null);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5792$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filter_vm$$], null)), $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5802$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_worker_events$$, $event$jscomp$122_p__71699$$], null))], null);
}, function($events$jscomp$14_p__71707$$) {
  var $filter_vm$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($events$jscomp$14_p__71707$$, 0, null);
  $events$jscomp$14_p__71707$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($events$jscomp$14_p__71707$$, 1, null);
  return $APP.$cljs$core$filterv$$(function($p1__71697_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$second$$($p1__71697_SHARP_$$), $filter_vm$$);
  }, $events$jscomp$14_p__71707$$);
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5796$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_total_count_by_vm$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($event$jscomp$123_p__71712$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event$jscomp$123_p__71712$$, 0, null);
  $event$jscomp$123_p__71712$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event$jscomp$123_p__71712$$, 1, null);
  return $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5803$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filtered_worker_events$$, $event$jscomp$123_p__71712$$], null));
}, function($events$jscomp$15$$) {
  return $APP.$cljs$core$take$cljs$0core$0IFn$0_invoke$0arity$02$$(10, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$second$$, $APP.$cljs$core$_GT_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($events__$1$jscomp$1_p__71720$$) {
    var $vm$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($events__$1$jscomp$1_p__71720$$, 0, null);
    $events__$1$jscomp$1_p__71720$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($events__$1$jscomp$1_p__71720$$, 1, null);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$vm$jscomp$5$$, $APP.$cljs$core$count$$($events__$1$jscomp$1_p__71720$$)], null);
  }, $APP.$cljs$core$group_by$$($APP.$cljs$core$second$$, $events$jscomp$15$$))));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5795$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_event_chart_data$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($event$jscomp$124_p__71724$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event$jscomp$124_p__71724$$, 0, null);
  $event$jscomp$124_p__71724$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event$jscomp$124_p__71724$$, 1, null);
  return $APP.$re_frame$core$subscribe$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5803$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filtered_worker_events$$, $event$jscomp$124_p__71724$$], null));
}, function($events$jscomp$16$$, $event$jscomp$125_p__71732$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event$jscomp$125_p__71732$$, 0, null);
  $event$jscomp$125_p__71732$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($event$jscomp$125_p__71732$$, 1, null);
  return $APP.$sensei$frontend$widget$chart$format_data_for_chart$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$event$jscomp$125_p__71732$$], null), $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$first$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($events__$1$jscomp$2_p__71736$$) {
    var $day$jscomp$33$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($events__$1$jscomp$2_p__71736$$, 0, null);
    $events__$1$jscomp$2_p__71736$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($events__$1$jscomp$2_p__71736$$, 1, null);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$day$jscomp$33$$, $APP.$cljs$core$count$$($events__$1$jscomp$2_p__71736$$)], null);
  }, $APP.$cljs$core$group_by$$($APP.$cljs$core$first$$, $events$jscomp$16$$))));
}]));
$APP.$re_frame$core$reg_sub$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$cst$5792$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filter_vm$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([function($db$jscomp$444$$) {
  return $cljs$cst$5792$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filter_vm$$.$cljs$core$IFn$_invoke$arity$1$($db$jscomp$444$$);
}]));
$APP.$re_frame$core$reg_event_db$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$5794$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_set_filter_vm$$, function($db$jscomp$445$$, $p__71745_vm$jscomp$6$$) {
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71745_vm$jscomp$6$$, 0, null);
  $p__71745_vm$jscomp$6$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71745_vm$jscomp$6$$, 1, null);
  return $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($db$jscomp$445$$, $cljs$cst$5792$sensei_DOT_frontend_DOT_admin_DOT_worker_errors_SLASH_filter_vm$$, $p__71745_vm$jscomp$6$$);
});
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5791$worker_errors$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2101$h4$$, "Worker errors"], null), new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1777$div_DOT_row$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$2746$div_DOT_col_12$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$widget$date_range$date_range_select$$, $cljs$cst$5791$worker_errors$$], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$377$hr$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2746$div_DOT_col_12$$, 
  new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_errors$active_filter$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5517$h5$$, "Preemptions"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_errors$event_graph$$, $cljs$cst$5797$preemption_detected$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4550$div_DOT_col_xl_6$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, 
  new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Worker timed out"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_errors$event_graph$$, $cljs$cst$5798$worker_timed_out$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5799$div_DOT_col_xl_6_DOT_mt_3$$, 
  new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Worker starts"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_errors$event_graph$$, $cljs$cst$5800$starting_vm$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5799$div_DOT_col_xl_6_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Worker stops"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_errors$event_graph$$, 
  $cljs$cst$5801$stopping_vm$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5799$div_DOT_col_xl_6_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5517$h5$$, "Preemptions by VM"], null), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_errors$vm_events_table$$, $cljs$cst$5797$preemption_detected$$], null)], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5799$div_DOT_col_xl_6_DOT_mt_3$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$cst$5517$h5$$, "Timeouts by VM"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_errors$vm_events_table$$, $cljs$cst$5798$worker_timed_out$$], null)], null)], null)], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/worker-errors", new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3617$analyst$$, $APP.$cljs$cst$840$title$$, "Worker Errors", $APP.$cljs$cst$139$start$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5505$set_initial_date_range$$, $cljs$cst$5791$worker_errors$$, $sensei$frontend$admin$worker_errors$initial_start_date$$, $sensei$frontend$admin$worker_errors$initial_end_date$$], null);
}], null)], null));
var $sensei$frontend$admin$view$non_admin_pages$$ = new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3681$statistics$$, $cljs$cst$5630$paypal_statistics$$, $cljs$cst$5521$domain_visits$$, $cljs$cst$5548$funnel$$, $cljs$cst$5757$voucher_funnel$$, $cljs$cst$5547$user_trace$$, $cljs$cst$5714$user_errors$$, $cljs$cst$5585$life_time_value$$, $APP.$cljs$cst$3019$game_analysis$$, $cljs$cst$5600$live_workers$$, $APP.$cljs$cst$2175$problem_stats$$, 
$cljs$cst$5660$play_ai_stats$$, $cljs$cst$5701$upload_stats$$, $cljs$cst$5791$worker_errors$$, $cljs$cst$5666$rank_statistics$$], null), $sensei$frontend$admin$view$admin_pages$$ = new $APP.$cljs$core$PersistentVector$$(null, 8, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4046$feedback$$, $APP.$cljs$cst$2040$logs$$, $APP.$cljs$cst$2043$paypal_events$$, $APP.$cljs$cst$3622$roles$$, $APP.$cljs$cst$2051$users$$, $cljs$cst$5731$vouchers$$, $cljs$cst$5804$workers$$, $cljs$cst$5805$live_worker_queues$$], 
null), $sensei$frontend$admin$view$admin_pages_start_stop$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$5805$live_worker_queues$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$139$start$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5613$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_start$$], null), $APP.$cljs$cst$3288$stop$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[$cljs$cst$5616$sensei_DOT_frontend_DOT_admin_DOT_live_worker_queues_SLASH_stop$$], null)], null)], null), $sensei$frontend$admin$view$admin_page$$, $method_table__5747__auto__$jscomp$inline_6809$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $prefer_table__5748__auto__$jscomp$inline_6810$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $method_cache__5749__auto__$jscomp$inline_6811$$ = 
$APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $cached_hierarchy__5750__auto__$jscomp$inline_6812$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $hierarchy__5751__auto__$jscomp$inline_6813$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$cst$297$hierarchy$$, $APP.$cljs$core$get_global_hierarchy$$.$cljs$core$IFn$_invoke$arity$0$ ? 
$APP.$cljs$core$get_global_hierarchy$$.$cljs$core$IFn$_invoke$arity$0$() : $APP.$cljs$core$get_global_hierarchy$$.call(null));
$sensei$frontend$admin$view$admin_page$$ = new $APP.$cljs$core$MultiFn$$($APP.$cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$("sensei.frontend.admin.view", "admin-page"), $APP.$cljs$core$identity$$, $hierarchy__5751__auto__$jscomp$inline_6813$$, $method_table__5747__auto__$jscomp$inline_6809$$, $prefer_table__5748__auto__$jscomp$inline_6810$$, $method_cache__5749__auto__$jscomp$inline_6811$$, $cached_hierarchy__5750__auto__$jscomp$inline_6812$$);
$sensei$frontend$admin$view$admin_page$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$298$default$$, function($page$jscomp$20$$) {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1616$h6$$, "Admin page not found: ", $APP.$cljs$core$name$$($page$jscomp$20$$)], null);
});
$sensei$frontend$admin$view$admin_page$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$3681$statistics$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$statistics$page$$], null);
});
$sensei$frontend$admin$view$admin_page$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $cljs$cst$5731$vouchers$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4936$div_DOT_mb_5$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$voucher$create_voucher_dialog$$], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 
  4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$409$div$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$voucher$new_voucher_links$$], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3107$h2$$, "Vouchers:"], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$voucher$admin_voucher$$], 
  null)], null)], null);
});
$sensei$frontend$admin$view$admin_page$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$4046$feedback$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$feedback$admin_feedback$$], null);
});
$sensei$frontend$admin$view$admin_page$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$2040$logs$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$worker_logs$worker_logs$$], null);
});
$sensei$frontend$admin$view$admin_page$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $cljs$cst$5804$workers$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$workers$main$$], null);
});
$sensei$frontend$admin$view$admin_page$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $cljs$cst$5805$live_worker_queues$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$live_worker_queues$main$$], null);
});
$sensei$frontend$admin$view$admin_page$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$2051$users$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$manage_users$main$$], null);
});
$sensei$frontend$admin$view$admin_page$$.$cljs$core$IMultiFn$_add_method$arity$3$(null, $APP.$cljs$cst$3622$roles$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5809$div_DOT_card_DOT_m_4$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$roles$role_editor$$], null)], null);
});
$APP.$sensei$frontend$router$core$reg_page$$($APP.$cljs$cst$3616$admin$$, function() {
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$4376$div_DOT_card_GT_div_DOT_card_body$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$2903$div_DOT_d_flex_DOT_flex_wrap$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5807$div_DOT_mx_5$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$APP.$cljs$cst$1773$h3$$, "Analyst Pages"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$364$ul$$, function() {
    return function $sensei$frontend$admin$view$admin_overview_$_iter__80406$$($s__80407$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__80407__$2_temp__5823__auto__$jscomp$545$$ = $APP.$cljs$core$seq$$($s__80407$$);
          if ($s__80407__$2_temp__5823__auto__$jscomp$545$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80407__$2_temp__5823__auto__$jscomp$545$$)) {
              var $JSCompiler_inline_result$jscomp$1010_c__5626__auto__$jscomp$243$$ = $APP.$cljs$core$_chunked_first$$($s__80407__$2_temp__5823__auto__$jscomp$545$$), $size__5627__auto__$jscomp$243$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$1010_c__5626__auto__$jscomp$243$$), $b__80409_key$jscomp$362$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$243$$);
              a: {
                for (var $i__80408$jscomp$inline_4709$$ = 0;;) {
                  if ($i__80408$jscomp$inline_4709$$ < $size__5627__auto__$jscomp$243$$) {
                    var $key$jscomp$inline_4710_x$jscomp$inline_6816$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$1010_c__5626__auto__$jscomp$243$$, $i__80408$jscomp$inline_4709$$), $b$jscomp$inline_6815$$ = $b__80409_key$jscomp$362$$;
                    $key$jscomp$inline_4710_x$jscomp$inline_6816$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1325$li$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$view$admin_page_link$$, $key$jscomp$inline_4710_x$jscomp$inline_6816$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, 
                    $key$jscomp$inline_4710_x$jscomp$inline_6816$$], null));
                    $b$jscomp$inline_6815$$.add($key$jscomp$inline_4710_x$jscomp$inline_6816$$);
                    $i__80408$jscomp$inline_4709$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$1010_c__5626__auto__$jscomp$243$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$1010_c__5626__auto__$jscomp$243$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$1010_c__5626__auto__$jscomp$243$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80409_key$jscomp$362$$), $sensei$frontend$admin$view$admin_overview_$_iter__80406$$($APP.$cljs$core$_chunked_rest$$($s__80407__$2_temp__5823__auto__$jscomp$545$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80409_key$jscomp$362$$), null);
            }
            $b__80409_key$jscomp$362$$ = $APP.$cljs$core$first$$($s__80407__$2_temp__5823__auto__$jscomp$545$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1325$li$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$view$admin_page_link$$, $b__80409_key$jscomp$362$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__80409_key$jscomp$362$$], null)), $sensei$frontend$admin$view$admin_overview_$_iter__80406$$($APP.$cljs$core$rest$$($s__80407__$2_temp__5823__auto__$jscomp$545$$)));
          }
          return null;
        }
      }, null, null);
    }($sensei$frontend$admin$view$non_admin_pages$$);
  }()], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5807$div_DOT_mx_5$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1773$h3$$, "Admin pages"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$364$ul$$, function() {
    return function $sensei$frontend$admin$view$admin_overview_$_iter__80411$$($s__80412$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (;;) {
          var $s__80412__$2_temp__5823__auto__$jscomp$546$$ = $APP.$cljs$core$seq$$($s__80412$$);
          if ($s__80412__$2_temp__5823__auto__$jscomp$546$$) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__80412__$2_temp__5823__auto__$jscomp$546$$)) {
              var $JSCompiler_inline_result$jscomp$1011_c__5626__auto__$jscomp$244$$ = $APP.$cljs$core$_chunked_first$$($s__80412__$2_temp__5823__auto__$jscomp$546$$), $size__5627__auto__$jscomp$244$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$1011_c__5626__auto__$jscomp$244$$), $b__80414_key$jscomp$364$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$244$$);
              a: {
                for (var $i__80413$jscomp$inline_4712$$ = 0;;) {
                  if ($i__80413$jscomp$inline_4712$$ < $size__5627__auto__$jscomp$244$$) {
                    var $key$jscomp$inline_4713_x$jscomp$inline_6819$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$1011_c__5626__auto__$jscomp$244$$, $i__80413$jscomp$inline_4712$$), $b$jscomp$inline_6818$$ = $b__80414_key$jscomp$364$$;
                    $key$jscomp$inline_4713_x$jscomp$inline_6819$$ = $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1325$li$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$view$admin_page_link$$, $key$jscomp$inline_4713_x$jscomp$inline_6819$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, 
                    $key$jscomp$inline_4713_x$jscomp$inline_6819$$], null));
                    $b$jscomp$inline_6818$$.add($key$jscomp$inline_4713_x$jscomp$inline_6819$$);
                    $i__80413$jscomp$inline_4712$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$1011_c__5626__auto__$jscomp$244$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$1011_c__5626__auto__$jscomp$244$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$1011_c__5626__auto__$jscomp$244$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80414_key$jscomp$364$$), $sensei$frontend$admin$view$admin_overview_$_iter__80411$$($APP.$cljs$core$_chunked_rest$$($s__80412__$2_temp__5823__auto__$jscomp$546$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__80414_key$jscomp$364$$), null);
            }
            $b__80414_key$jscomp$364$$ = $APP.$cljs$core$first$$($s__80412__$2_temp__5823__auto__$jscomp$546$$);
            return $APP.$cljs$core$cons$$($APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$1325$li$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$view$admin_page_link$$, $b__80414_key$jscomp$364$$], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$70$key$$, $b__80414_key$jscomp$364$$], null)), $sensei$frontend$admin$view$admin_overview_$_iter__80411$$($APP.$cljs$core$rest$$($s__80412__$2_temp__5823__auto__$jscomp$546$$)));
          }
          return null;
        }
      }, null, null);
    }($sensei$frontend$admin$view$admin_pages$$);
  }()], null)], null)], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin", new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3616$admin$$, $APP.$cljs$cst$840$title$$, "Admin"], null)], null));
$APP.$sensei$frontend$router$core$reg_page$$($cljs$cst$5810$admin_page$$, function($map__80417__$1_p__80416_page$jscomp$21_params$jscomp$130$$) {
  $map__80417__$1_p__80416_page$jscomp$21_params$jscomp$130$$ = $APP.$cljs$core$__destructure_map$$($map__80417__$1_p__80416_page$jscomp$21_params$jscomp$130$$);
  $map__80417__$1_p__80416_page$jscomp$21_params$jscomp$130$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80417__$1_p__80416_page$jscomp$21_params$jscomp$130$$, $APP.$cljs$cst$602$params$$);
  $map__80417__$1_p__80416_page$jscomp$21_params$jscomp$130$$ = $APP.$cljs$cst$1169$page$$.$cljs$core$IFn$_invoke$arity$1$($map__80417__$1_p__80416_page$jscomp$21_params$jscomp$130$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$5808$div_DOT_admin_layout$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$view$back_link$$], null), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$3366$h1$$, "Admin: ", $map__80417__$1_p__80416_page$jscomp$21_params$jscomp$130$$], null), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$view$admin_page$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($map__80417__$1_p__80416_page$jscomp$21_params$jscomp$130$$)], null), new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$sensei$frontend$admin$view$back_link$$], null)], null);
}, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["/admin/:page", new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$818$role$$, $APP.$cljs$cst$3616$admin$$, $APP.$cljs$cst$840$title$$, function($map__80419__$1_p__80418_page$jscomp$22$$) {
  $map__80419__$1_p__80418_page$jscomp$22$$ = $APP.$cljs$core$__destructure_map$$($map__80419__$1_p__80418_page$jscomp$22$$);
  $map__80419__$1_p__80418_page$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80419__$1_p__80418_page$jscomp$22$$, $APP.$cljs$cst$1169$page$$);
  return "Admin - " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$clojure$string$join$cljs$0core$0IFn$0_invoke$0arity$02$$(" ", $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($APP.$clojure$string$capitalize$$, $APP.$clojure$string$split$cljs$0core$0IFn$0_invoke$0arity$02$$($map__80419__$1_p__80418_page$jscomp$22$$, "-"))));
}, $APP.$cljs$cst$139$start$$, function($p1__80422_SHARP_$$) {
  return $sensei$frontend$admin$view$start_stop$$($p1__80422_SHARP_$$, $APP.$cljs$cst$139$start$$);
}, $APP.$cljs$cst$3288$stop$$, function($p1__80423_SHARP_$$) {
  return $sensei$frontend$admin$view$start_stop$$($p1__80423_SHARP_$$, $APP.$cljs$cst$3288$stop$$);
}], null)], null));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);