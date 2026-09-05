---
type: Model
title: Claude Opus 4.7 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 3.85
output_speed_tps: 52.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.7, z: 1.77, r: 76.6, estimated: false }  # 전문 지식
  reasoning: { s: 67.5, z: 1.56, r: 73.4, estimated: false }  # 추론
  coding: { s: 78.8, z: 1.64, r: 74.6, estimated: false }  # 코딩
  agentic: { s: 78.2, z: 1.56, r: 73.4, estimated: false }  # 에이전트
  trust: { s: 57.7, z: 1.57, r: 73.6, estimated: false }  # 신뢰성
  multimodal: { s: 88.9, z: 0.93, r: 63.9, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.57, r: 58.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude Opus 4.7 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 52.0 t/s · TTFT 24.39s · 1M ctx` · 가성비 11.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.6 | +1.77 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 73.4 | +1.56 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 74.6 | +1.64 | 실측 | [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 73.4 | +1.56 | 실측 | [[gdpval]] 45.0%×1.0, [[itbench]] 47.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 35.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 73.6 | +1.57 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 63.9 | +0.93 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 58.6 | +0.57 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
