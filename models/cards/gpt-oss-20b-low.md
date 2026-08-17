---
type: Model
title: gpt-oss-20b (low)
creator: OpenAI
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.083
output_speed_tps: 152.0
context_window: 131000
status: current
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 28.3, z: -0.61, r: 40.8, estimated: false }  # 전문 지식
  reasoning: { s: 22.5, z: -0.63, r: 40.5, estimated: false }  # 추론
  coding: { s: 40.3, z: -0.32, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 29.0, z: -0.3, r: 45.5, estimated: false }  # 에이전트
  trust: { s: 12.8, z: -0.63, r: 40.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 37.3, z: -0.39, r: 44.1, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.43, r: 56.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# gpt-oss-20b (low)

OpenAI · Open · Small(21B) · 컨텍스트 131k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.07 · 출력 $0.2 · 혼합 $0.083/1M · 152.0 t/s · TTFT 1.07s · 131k ctx` · 가성비 168.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.8 | -0.61 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.5 | -0.63 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 45.1 | -0.32 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 45.5 | -0.3 | 실측 | [[tau2-bench]] 50.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 40.5 | -0.63 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.1 | -0.39 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 56.4 | +0.43 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
