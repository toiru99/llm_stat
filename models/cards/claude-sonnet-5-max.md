---
type: Model
title: Claude Sonnet 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 99.5464855050644
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.3, z: 1.48, r: 72.2, estimated: false }  # 전문 지식
  reasoning: { s: 65.4, z: 1.5, r: 72.5, estimated: false }  # 추론
  coding: { s: 77.9, z: 1.24, r: 68.6, estimated: false }  # 코딩
  agentic: { s: 77.5, z: 1.07, r: 66.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.7, z: 0.63, r: 59.4, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude Sonnet 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 99.5464855050644 t/s · TTFT 126.171341176517s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.2 | +1.48 | 실측 | [[gpqa-diamond]] 91.1111%×0.4, [[humanitys-last-exam]] 41.2882%×0.3 |
| 추론 | 72.5 | +1.5 | 실측 | [[critpt]] 16.8571%×1.0, [[gpqa-diamond]] 91.1111%×1.0, [[humanitys-last-exam]] 41.2882%×1.0 |
| 코딩 | 68.6 | +1.24 | 실측 | [[scicode]] 54.2824%×1.0 |
| 에이전트 | 66.1 | +1.07 | 실측 | [[gdpval]] 1469.64 Elo×1.0, [[tau3-banking]] 37.3196%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.4 | +0.63 | 실측 | [[mmmu-pro]] 77.2832%×1.0 |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 82%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
