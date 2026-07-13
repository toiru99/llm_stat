---
type: Model
title: MiniCPM-V 4.6 1.3B
creator: OpenBMB
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 12.1, z: -1.37, r: 29.5, estimated: false }  # 전문 지식
  reasoning: { s: 10.9, z: -1.19, r: 32.1, estimated: false }  # 추론
  coding: { s: 2.2, z: -1.86, r: 22.2, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.42, r: 43.6, estimated: false }  # 에이전트
  trust: { s: 2.4, z: -1.2, r: 32.0, estimated: false }  # 신뢰성
  multimodal: { s: 33.3, z: -1.82, r: 22.8, estimated: false }  # 멀티모달
  long_context: { s: 7.9, z: -1.2, r: 32.0, estimated: false }  # 긴문맥
  instruction: { s: 21.1, z: -1.29, r: 30.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM-V 4.6 1.3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# MiniCPM-V 4.6 1.3B

OpenBMB · Open · Unknown · 컨텍스트 262k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.5 | -1.37 | 실측 | [[aa-omniscience]] 6.0%×1.0, [[gpqa-diamond]] 31.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.1 | -1.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 31.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 22.2 | -1.86 | 실측 | [[scicode]] 2.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 43.6 | -0.42 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 88.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 32.0 | -1.2 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | 22.8 | -1.82 | 실측 | [[mmmu-pro]] 38.0%×1.0 |
| 긴문맥 | 32.0 | -1.2 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 30.7 | -1.29 | 실측 | [[ifbench]] 27.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
