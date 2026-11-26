---
type: Model
title: Gemini 3.8 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 30.695296844214
price_blended_usd_1m: 0.5775
output_speed_tps: 99.8276593188053
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.8, z: 1.8, r: 77.0, estimated: false }  # 전문 지식
  reasoning: { s: 71.3, z: 1.8, r: 76.9, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.37, r: 70.6, estimated: false }  # 코딩
  agentic: { s: 84.4, z: 1.32, r: 69.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.8, z: 1.2, r: 67.9, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Gemini 3.8 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.695296844214** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 99.8276593188053 t/s · TTFT 21.9963912845944s · 1M ctx` · 가성비 53.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 77.0 | +1.8 | 실측 | [[gpqa-diamond]] 95.2525%×0.4, [[humanitys-last-exam]] 47.8221%×0.3 |
| 추론 | 76.9 | +1.8 | 실측 | [[critpt]] 18.2857%×1.0, [[gpqa-diamond]] 95.2525%×1.0, [[humanitys-last-exam]] 47.8221%×1.0 |
| 코딩 | 70.6 | +1.37 | 실측 | [[scicode]] 56.5972%×1.0 |
| 에이전트 | 69.7 | +1.32 | 실측 | [[gdpval]] 1442.78 Elo×1.0, [[tau3-banking]] 44.9485%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.9 | +1.2 | 실측 | [[mmmu-pro]] 85.6069%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 81.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
