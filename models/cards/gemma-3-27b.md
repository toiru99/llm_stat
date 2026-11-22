---
type: Model
title: Gemma 3 27B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: 33.9821341206699
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.8, z: -1.14, r: 32.9, estimated: false }  # 전문 지식
  reasoning: { s: 14.3, z: -1.05, r: 34.2, estimated: false }  # 추론
  coding: { s: 19.8, z: -0.69, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 4.4, z: -1.4, r: 29.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 44.7, z: -1.36, r: 29.6, estimated: false }  # 멀티모달
  long_context: { s: 8.3, z: -1.35, r: 29.8, estimated: false }  # 긴문맥
  instruction: { s: 27.7, z: -1.1, r: 33.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Gemma 3 27B

Google · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 33.9821341206699 t/s · TTFT 3.25056560092497s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.9 | -1.14 | 실측 | [[gpqa-diamond]] 42.8282828282828%×0.4, [[humanitys-last-exam]] 4.3999999999999995%×0.3 |
| 추론 | 34.2 | -1.05 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 42.8282828282828%×1.0, [[humanitys-last-exam]] 4.3999999999999995%×1.0 |
| 코딩 | 39.7 | -0.69 | 실측 | [[scicode]] 23.2638888888889%×1.0, [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 29.0 | -1.4 | 실측 | [[gdpval]] -401.22%×1.0, [[tau2-bench]] 10.526315789473701%×1.0, [[tau3-banking]] 0.824742268041237%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.6 | -1.36 | 실측 | [[mmmu-pro]] 48.0346820809249%×1.0 |
| 긴문맥 | 29.8 | -1.35 | 실측 | [[aa-lcr]] 7.33333333333333%×1.0 |
| 지시 따르기 | 33.6 | -1.1 | 실측 | [[ifbench]] 31.8367346938776%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
