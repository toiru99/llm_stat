---
type: Model
title: Claude Sonnet 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 2.31
output_speed_tps: 54.0
context_window: 1000000
radar:
  knowledge: { s: 69.6, z: 0.8, r: 62.0, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.34, r: 55.0, estimated: false }  # 추론
  coding: { s: 80.3, z: 0.87, r: 63.1, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.07, r: 66.1, estimated: false }  # 에이전트
  trust: { s: 62.5, z: 0.92, r: 63.7, estimated: false }  # 신뢰성
  multimodal: { s: 81.0, z: 0.26, r: 54.0, estimated: false }  # 멀티모달
  long_context: { s: 95.9, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: -0.21, r: 46.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Claude Sonnet 4.6 (max)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 54.0 t/s · TTFT 96.97s · 1M ctx` · 가성비 20.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.0 | +0.8 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 55.0 | +0.34 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 63.1 | +0.87 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 53.0%×0.5 |
| 에이전트 | 66.1 | +1.07 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 44.0%×1.0, [[itbench]] 40.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 31.0%×1.0, [[terminal-bench]] 53.0%×1.0 |
| 신뢰성 | 63.7 | +0.92 | 실측 | [[aa-omniscience]] 54.0%×1.0 |
| 멀티모달 | 54.0 | +0.26 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 46.9 | -0.21 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
