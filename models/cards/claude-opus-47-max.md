---
type: Model
title: Claude Opus 4.7 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 3.85
output_speed_tps: 50.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.2, z: 1.89, r: 78.4, estimated: false }  # 전문 지식
  reasoning: { s: 70.0, z: 1.74, r: 76.1, estimated: false }  # 추론
  coding: { s: 87.4, z: 1.66, r: 74.9, estimated: false }  # 코딩
  agentic: { s: 79.1, z: 1.72, r: 75.9, estimated: false }  # 에이전트
  trust: { s: 65.1, z: 1.78, r: 76.7, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.95, r: 64.2, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.52, r: 57.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Claude Opus 4.7 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 신뢰성
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 50.0 t/s · TTFT 19.22s · 1M ctx` · 가성비 14.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.4 | +1.89 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 76.1 | +1.74 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 74.9 | +1.66 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 75.9 | +1.72 | 실측 | [[gdpval]] 50.0%×1.0, [[itbench]] 47.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 35.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 76.7 | +1.78 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 64.2 | +0.95 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 57.8 | +0.52 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
