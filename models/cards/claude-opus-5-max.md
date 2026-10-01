---
type: Model
title: Claude Opus 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 3.85
output_speed_tps: 51.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.1, z: 2.29, r: 84.4, estimated: false }  # 전문 지식
  reasoning: { s: 92.4, z: 2.54, r: 88.1, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 86.0, z: 1.81, r: 77.1, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.53, r: 58.0, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.22, r: 68.4, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 76.0, z: 0.9, r: 63.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Claude Opus 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 51.0 t/s · TTFT 68.35s · 1M ctx` · 가성비 13.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.4 | +2.29 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 88.1 | +2.54 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 77.1 | +1.81 | 실측 | [[gdpval]] 60.0%×1.0, [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | 58.0 | +0.53 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 68.4 | +1.22 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 63.6 | +0.9 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
