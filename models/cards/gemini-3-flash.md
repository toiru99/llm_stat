---
type: Model
title: Gemini 3 Flash
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.435
output_speed_tps: 216.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.9, z: 1.3, r: 69.5, estimated: false }  # 전문 지식
  reasoning: { s: 76.5, z: 1.39, r: 70.8, estimated: false }  # 추론
  coding: { s: 59.1, z: 0.74, r: 61.1, estimated: false }  # 코딩
  agentic: { s: 53.0, z: 0.65, r: 59.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.84, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.68, r: 75.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Gemini 3 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 216.0 t/s · TTFT 5.91s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.5 | +1.3 | 실측 | [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 70.8 | +1.39 | 실측 | [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 61.1 | +0.74 | 실측 | [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 59.7 | +0.65 | 실측 | [[apex-agents]] 28.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.7 | +0.84 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 75.2 | +1.68 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
