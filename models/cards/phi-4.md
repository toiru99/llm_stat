---
type: Model
title: Phi-4
creator: Microsoft
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1625
output_speed_tps: 34.952137506360586
context_window: 16000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.1, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 19.6, z: -0.78, r: 38.3, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.16, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 2.9, z: -1.45, r: 28.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.58, r: 26.3, estimated: false }  # 긴문맥
  instruction: { s: 16.0, z: -1.57, r: 26.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Phi-4

Microsoft · Open · Small · 컨텍스트 16k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.125 · 출력 $0.5 · 혼합 $0.1625/1M · 34.952137506360586 t/s · TTFT 2.5879421106911455s · 16k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 57.4747474747475%×0.4, [[humanitys-last-exam]] 3.7600000000000002%×0.3 |
| 추론 | 38.3 | -0.78 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.4747474747475%×1.0, [[humanitys-last-exam]] 3.7600000000000002%×1.0 |
| 코딩 | 32.7 | -1.16 | 실측 | [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 28.3 | -1.45 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.3 | -1.58 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 26.4 | -1.57 | 실측 | [[ifbench]] 23.5374149659864%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
