---
type: Model
title: GPT-5.6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 96.8705744114527
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.7, z: 0.63, r: 59.4, estimated: false }  # 전문 지식
  reasoning: { s: 39.4, z: 0.21, r: 53.1, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.79, r: 61.8, estimated: false }  # 코딩
  agentic: { s: 43.3, z: -0.14, r: 48.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.3, z: 0.41, r: 56.1, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.65, r: 59.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5.6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 96.8705744114527 t/s · TTFT 1.92353929764441s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 59.4 | +0.63 | 실측 | [[gpqa-diamond]] 83.5354%×0.4, [[humanitys-last-exam]] 19.8332%×0.3 |
| 추론 | 53.1 | +0.21 | 실측 | [[critpt]] 2.57143%×1.0, [[gpqa-diamond]] 83.5354%×1.0, [[humanitys-last-exam]] 19.8332%×1.0 |
| 코딩 | 61.8 | +0.79 | 실측 | [[scicode]] 46.0648%×1.0 |
| 에이전트 | 48.0 | -0.14 | 실측 | [[gdpval]] 1001.98 Elo×1.0, [[tau3-banking]] 12.7835%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.1 | +0.41 | 실측 | [[mmmu-pro]] 73.9884%×1.0 |
| 긴문맥 | 59.8 | +0.65 | 실측 | [[aa-lcr]] 70%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
