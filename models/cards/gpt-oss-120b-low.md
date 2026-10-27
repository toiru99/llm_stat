---
type: Model
title: gpt-oss-120b (low)
creator: OpenAI
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.172
output_speed_tps: 271.0
context_window: 131000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.6, z: -0.39, r: 44.1, estimated: false }  # 전문 지식
  reasoning: { s: 24.9, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 7.6, z: -1.03, r: 34.6, estimated: false }  # 코딩
  agentic: { s: 7.5, z: -0.94, r: 35.9, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.91, r: 36.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.7, z: -0.04, r: 49.4, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.44, r: 56.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# gpt-oss-120b (low)

OpenAI · Open · Medium · 컨텍스트 131k · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.13 · 출력 $0.59 · 혼합 $0.172/1M · 271.0 t/s · TTFT 0.77s · 131k ctx` · 가성비 58.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.1 | -0.39 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 34.6 | -1.03 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.9 | -0.94 | 실측 | [[gdpval]] 171.0%×1.0, [[tau3-banking]] 3.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 36.4 | -0.91 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.4 | -0.04 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 56.6 | +0.44 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
