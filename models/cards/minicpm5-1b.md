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
size_class: Tiny
params_b: 1
is_reasoning: false
radar:
  knowledge: { s: 7.5, z: -1.6, r: 26.0, estimated: false }  # 전문 지식
  reasoning: { s: 10.1, z: -1.23, r: 31.5, estimated: false }  # 추론
  coding: { s: 4.4, z: -1.79, r: 23.1, estimated: false }  # 코딩
  agentic: { s: 40.9, z: 0.17, r: 52.5, estimated: false }  # 에이전트
  trust: { s: 94.2, z: 2.98, r: 94.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.0, z: -1.34, r: 29.9, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.09, r: 48.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM5-1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# MiniCPM5-1B

OpenBMB · Open · Tiny(1B) · 컨텍스트 128k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.0 | -1.6 | 실측 | [[aa-omniscience]] 2.0%×1.0, [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 31.5 | -1.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 23.1 | -1.79 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 52.5 | +0.17 | 실측 | [[tau2-bench]] 81.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 94.7 | +2.98 | 실측 | [[aa-omniscience]] 83.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.9 | -1.34 | 실측 | [[aa-lcr]] 5.0%×1.0 |
| 지시 따르기 | 48.7 | -0.09 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
