---
type: Model
title: Gemini 3.5 Flash (high)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.305
output_speed_tps: 211.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 84.5, z: 1.54, r: 73.1, estimated: false }  # 전문 지식
  reasoning: { s: 82.7, z: 1.66, r: 74.9, estimated: false }  # 추론
  coding: { s: 72.9, z: 1.2, r: 68.0, estimated: false }  # 코딩
  agentic: { s: 72.1, z: 1.3, r: 69.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.5, z: 1.12, r: 66.7, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.57, r: 73.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Gemini 3.5 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 211.0 t/s · TTFT 14.58s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.1 | +1.54 | 실측 | [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 74.9 | +1.66 | 실측 | [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 68.0 | +1.2 | 실측 | [[scicode]] 54.0%×1.0, [[terminal-bench]] 41.0%×0.5 |
| 에이전트 | 69.5 | +1.3 | 실측 | [[apex-agents]] 47.0%×1.0, [[gdpval]] 1212.0%×1.0, [[itbench]] 40.0%×1.0, [[tau3-banking]] 32.0%×1.0, [[terminal-bench]] 41.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.7 | +1.12 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 73.5 | +1.57 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
