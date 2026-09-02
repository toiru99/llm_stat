---
type: Model
title: Ministral 3 14B
creator: Mistral
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.2
output_speed_tps: 107.0
context_window: 256000
status: current
size_class: Small
params_b: 14
is_reasoning: false
radar:
  knowledge: { s: 26.5, z: -0.69, r: 39.7, estimated: false }  # 전문 지식
  reasoning: { s: 20.7, z: -0.69, r: 39.7, estimated: false }  # 추론
  coding: { s: 28.3, z: -0.78, r: 38.3, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -0.98, r: 35.4, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 50.0, z: -1.03, r: 34.5, estimated: false }  # 멀티모달
  long_context: { s: 30.1, z: -0.6, r: 41.0, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.03, r: 34.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Ministral 3 14B

Mistral · Open · Small(14B) · 컨텍스트 256k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $0.2 · 출력 $0.2 · 혼합 $0.2/1M · 107.0 t/s · TTFT 0.86s · 256k ctx` · 가성비 55.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.7 | -0.69 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 39.7 | -0.69 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 38.3 | -0.78 | 실측 | [[scicode]] 24.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.4 | -0.98 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 27.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 34.5 | -1.03 | 실측 | [[mmmu-pro]] 50.0%×1.0 |
| 긴문맥 | 41.0 | -0.6 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 34.5 | -1.03 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
