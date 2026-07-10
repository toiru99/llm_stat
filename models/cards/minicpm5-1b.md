---
type: Model
title: MiniCPM5-1B
creator: OpenBMB
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 8.1, z: -1.56, r: 26.5, estimated: false }  # 전문 지식
  reasoning: { s: 11.0, z: -1.19, r: 32.2, estimated: false }  # 추론
  coding: { s: 4.4, z: -1.76, r: 23.6, estimated: false }  # 코딩
  agentic: { s: 40.9, z: 0.19, r: 52.9, estimated: false }  # 에이전트
  trust: { s: 94.1, z: 3.15, r: 97.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 5.3, z: -1.27, r: 30.9, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.0, r: 49.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM5-1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# MiniCPM5-1B

OpenBMB · Open · Unknown · 컨텍스트 128k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.5 | -1.56 | 실측 | [[aa-omniscience]] 2.0%×1.0, [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 32.2 | -1.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 23.6 | -1.76 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 52.9 | +0.19 | 실측 | [[tau2-bench]] 81.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 97.2 | +3.15 | 실측 | [[aa-omniscience]] 81.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.9 | -1.27 | 실측 | [[aa-lcr]] 4.0%×1.0 |
| 지시 따르기 | 49.9 | +-0.0 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
