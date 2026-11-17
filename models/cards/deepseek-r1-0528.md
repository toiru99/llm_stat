---
type: Model
title: DeepSeek R1 0528
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 1.8175
output_speed_tps: 32.98328538683056
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.9, z: 0.43, r: 56.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.6, z: 0.01, r: 50.2, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.53, r: 42.1, estimated: false }  # 코딩
  agentic: { s: 30.5, z: -0.49, r: 42.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 62.8, z: 0.28, r: 54.2, estimated: false }  # 긴문맥
  instruction: { s: 38.6, z: -0.63, r: 40.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 0528
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# DeepSeek R1 0528

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $1.85 · 출력 $2.75 · 혼합 $1.8175/1M · 32.98328538683056 t/s · TTFT 3.4694217076359744s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.4 | +0.43 | 실측 | [[gpqa-diamond]] 81.31313131313131%×0.4, [[humanitys-last-exam]] 15.8480074142725%×0.3 |
| 추론 | 50.2 | +0.01 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[gpqa-diamond]] 81.31313131313131%×1.0, [[humanitys-last-exam]] 15.8480074142725%×1.0 |
| 코딩 | 42.1 | -0.53 | 실측 | [[terminal-bench]] 15.909090909090901%×0.5 |
| 에이전트 | 42.7 | -0.49 | 실측 | [[tau2-bench]] 36.5497076023392%×1.0, [[terminal-bench]] 15.909090909090901%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.2 | +0.28 | 실측 | [[aa-lcr]] 55.6666666666667%×1.0 |
| 지시 따르기 | 40.5 | -0.63 | 실측 | [[ifbench]] 39.5918367346939%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
