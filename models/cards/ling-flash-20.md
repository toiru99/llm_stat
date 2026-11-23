---
type: Model
title: Ling-flash-2.0
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.183
output_speed_tps: 39.0502999099895
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.9, z: -0.36, r: 44.6, estimated: false }  # 전문 지식
  reasoning: { s: 23.9, z: -0.58, r: 41.3, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.81, r: 37.8, estimated: false }  # 코딩
  agentic: { s: 18.5, z: -0.91, r: 36.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 19.9, z: -1.0, r: 35.0, estimated: false }  # 긴문맥
  instruction: { s: 31.2, z: -0.95, r: 35.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-flash-2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Ling-flash-2.0

InclusionAI · Open · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.14 · 출력 $0.57 · 혼합 $0.183/1M · 39.0502999099895 t/s · TTFT 3.76840537796998s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.6 | -0.36 | 실측 | [[gpqa-diamond]] 65.6565656565657%×0.4, [[humanitys-last-exam]] 6.209453197405%×0.3 |
| 추론 | 41.3 | -0.58 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.6565656565657%×1.0, [[humanitys-last-exam]] 6.209453197405%×1.0 |
| 코딩 | 37.8 | -0.81 | 실측 | [[terminal-bench]] 10.6060606060606%×0.5 |
| 에이전트 | 36.3 | -0.91 | 실측 | [[tau2-bench]] 20.7602339181287%×1.0, [[terminal-bench]] 10.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.0 | -1.0 | 실측 | [[aa-lcr]] 17.6666666666667%×1.0 |
| 지시 따르기 | 35.8 | -0.95 | 실측 | [[ifbench]] 34.3537414965986%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
