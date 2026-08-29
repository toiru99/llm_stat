---
type: Model
title: Grok 4.3 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 0.64
output_speed_tps: 112.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.5, z: 0.49, r: 57.3, estimated: false }  # 전문 지식
  reasoning: { s: 40.6, z: 0.31, r: 54.6, estimated: false }  # 추론
  coding: { s: 60.3, z: 0.53, r: 58.0, estimated: false }  # 코딩
  agentic: { s: 65.4, z: 1.12, r: 66.8, estimated: false }  # 에이전트
  trust: { s: 83.5, z: 2.82, r: 92.3, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 1.0, r: 65.0, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.88, r: 78.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Grok 4.3 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 112.0 t/s · TTFT 6.42s · 1M ctx` · 가성비 56.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.3 | +0.49 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 54.6 | +0.31 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 58.0 | +0.53 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 66.8 | +1.12 | 실측 | [[tau2-bench]] 89.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 92.3 | +2.82 | 실측 | [[aa-omniscience]] 83.0%×1.0 |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 65.0 | +1.0 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 78.2 | +1.88 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
