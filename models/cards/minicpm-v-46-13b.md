---
type: Model
title: MiniCPM-V 4.6 1.3B
creator: OpenBMB
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 1.3
is_reasoning: false
radar:
  knowledge: { s: 13.1, z: -1.34, r: 29.9, estimated: false }  # 전문 지식
  reasoning: { s: 10.4, z: -1.19, r: 32.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.12, r: 33.2, estimated: false }  # 코딩
  agentic: { s: 29.6, z: -0.3, r: 45.5, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.06, r: 34.1, estimated: false }  # 신뢰성
  multimodal: { s: 31.9, z: -1.89, r: 21.6, estimated: false }  # 멀티모달
  long_context: { s: 7.9, z: -1.27, r: 31.0, estimated: false }  # 긴문맥
  instruction: { s: 21.1, z: -1.32, r: 30.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM-V 4.6 1.3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# MiniCPM-V 4.6 1.3B

OpenBMB · Open · Tiny(1.3B) · 컨텍스트 262k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.9 | -1.34 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 31.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.2 | -1.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 31.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 45.5 | -0.3 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 88.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 34.1 | -1.06 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | 21.6 | -1.89 | 실측 | [[mmmu-pro]] 38.0%×1.0 |
| 긴문맥 | 31.0 | -1.27 | 실측 | [[aa-lcr]] 7.0%×1.0 |
| 지시 따르기 | 30.3 | -1.32 | 실측 | [[ifbench]] 27.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
