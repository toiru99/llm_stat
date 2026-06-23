---
type: Model
title: Claude Opus 4.7 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 3.85
output_speed_tps: 50.0
context_window: 1000000
radar:
  knowledge: { s: 80.0, z: 1.29, r: 69.3, estimated: false }  # 전문 지식
  reasoning: { s: 70.0, z: 1.2, r: 68.0, estimated: false }  # 추론
  coding: { s: 88.6, z: 1.26, r: 68.9, estimated: false }  # 코딩
  agentic: { s: 88.4, z: 1.45, r: 71.7, estimated: false }  # 에이전트
  trust: { s: 75.0, z: 1.45, r: 71.8, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.83, r: 62.5, estimated: false }  # 멀티모달
  long_context: { s: 94.6, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: -0.03, r: 49.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-23
timestamp: 2026-06-23T00:00:00Z
---

# Claude Opus 4.7 (max)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 50.0 t/s · TTFT 14.05s · 1M ctx` · 가성비 14.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.3 | +1.29 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 68.0 | +1.2 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 68.9 | +1.26 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 71.7 | +1.45 | 실측 | [[gdpval]] 50.0%×1.0, [[itbench]] 47.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 29.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 71.8 | +1.45 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | 62.5 | +0.83 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 49.5 | -0.03 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
