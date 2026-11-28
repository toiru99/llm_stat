---
type: Model
title: Claude Fable 5.1 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 43.222102878789
price_blended_usd_1m: 7.175
output_speed_tps: 88.7295117602804
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.9, z: 1.76, r: 76.4, estimated: false }  # 전문 지식
  reasoning: { s: 81.6, z: 2.31, r: 84.6, estimated: false }  # 추론
  coding: { s: 81.3, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 83.0, z: 1.26, r: 68.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Fable 5.1 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.222102878789** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 88.7295117602804 t/s · TTFT 5.21667754746181s · 1M ctx` · 가성비 6.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 76.4 | +1.76 | 실측 | [[gpqa-diamond]] 88.5859%×0.4, [[humanitys-last-exam]] 53.7998%×0.3 |
| 추론 | 84.6 | +2.31 | 실측 | [[critpt]] 29.1429%×1.0, [[gpqa-diamond]] 88.5859%×1.0, [[humanitys-last-exam]] 53.7998%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 56.3657%×1.0 |
| 에이전트 | 68.9 | +1.26 | 실측 | [[gdpval]] 1554.13 Elo×1.0, [[tau3-banking]] 41.0309%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 84.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
