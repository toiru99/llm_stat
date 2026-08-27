---
type: Model
title: Tri-21B-think Preview
creator: Trillion Labs
license: Open
intelligence_index: 14.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 22.1, z: -0.92, r: 36.2, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.75, r: 38.7, estimated: false }  # 추론
  coding: { s: 21.0, z: -1.13, r: 33.0, estimated: false }  # 코딩
  agentic: { s: 48.5, z: 0.43, r: 56.5, estimated: false }  # 에이전트
  trust: { s: 19.8, z: -0.38, r: 44.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.5, z: -0.73, r: 39.0, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.21, r: 46.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tri-21B-think Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Tri-21B-think Preview

Trillion Labs · Open · Small(21B) · 컨텍스트 32k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.2 | -0.92 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 38.7 | -0.75 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 33.0 | -1.13 | 실측 | [[scicode]] 18.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 56.5 | +0.43 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.0 | -0.73 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 46.9 | -0.21 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
