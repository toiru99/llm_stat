---
type: Model
title: Nova 2.0 Lite (medium)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: 164.28512134423315
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.9, z: 0.09, r: 51.3, estimated: false }  # 전문 지식
  reasoning: { s: 29.4, z: -0.29, r: 45.6, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.45, r: 43.2, estimated: false }  # 코딩
  agentic: { s: 51.4, z: 0.24, r: 53.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.3, z: -0.36, r: 44.6, estimated: false }  # 멀티모달
  long_context: { s: 67.7, z: 0.43, r: 56.4, estimated: false }  # 긴문맥
  instruction: { s: 79.2, z: 1.07, r: 66.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Nova 2.0 Lite (medium)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 164.28512134423315 t/s · TTFT 17.283141133425783s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.3 | +0.09 | 실측 | [[gpqa-diamond]] 76.76767676767679%×0.4, [[humanitys-last-exam]] 8.98980537534754%×0.3 |
| 추론 | 45.6 | -0.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.76767676767679%×1.0, [[humanitys-last-exam]] 8.98980537534754%×1.0 |
| 코딩 | 43.2 | -0.45 | 실측 | [[terminal-bench]] 17.4242424242424%×0.5 |
| 에이전트 | 53.6 | +0.24 | 실측 | [[tau2-bench]] 75.7309941520468%×1.0, [[terminal-bench]] 17.4242424242424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.6 | -0.36 | 실측 | [[mmmu-pro]] 62.5433526011561%×1.0 |
| 긴문맥 | 56.4 | +0.43 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 66.0 | +1.07 | 실측 | [[ifbench]] 68.5034013605442%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
