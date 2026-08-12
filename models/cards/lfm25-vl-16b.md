---
type: Model
title: LFM2.5-VL-1.6B
creator: Liquid AI
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0
output_speed_tps: 326.0
context_window: 32000
status: current
size_class: Tiny
params_b: 1.6
is_reasoning: false
radar:
  knowledge: { s: 11.2, z: -1.42, r: 28.7, estimated: false }  # 전문 지식
  reasoning: { s: 10.0, z: -1.24, r: 31.5, estimated: false }  # 추론
  coding: { s: 3.3, z: -1.83, r: 22.5, estimated: false }  # 코딩
  agentic: { s: 4.0, z: -1.27, r: 30.9, estimated: false }  # 에이전트
  trust: { s: 2.3, z: -1.1, r: 33.6, estimated: false }  # 신뢰성
  multimodal: { s: 17.1, z: -2.64, r: 10.4, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.5, r: 27.5, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.99, r: 35.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2.5-VL-1.6B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# LFM2.5-VL-1.6B

Liquid AI · Open · Tiny(1.6B) · 컨텍스트 32k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 326.0 t/s · TTFT 1.25s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.7 | -1.42 | 실측 | [[aa-omniscience]] 6.0%×1.0, [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.5 | -1.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 22.5 | -1.83 | 실측 | [[scicode]] 3.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 30.9 | -1.27 | 실측 | [[tau2-bench]] 8.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 33.6 | -1.1 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | 10.4 | -2.64 | 실측 | [[mmmu-pro]] 27.0%×1.0 |
| 긴문맥 | 27.5 | -1.5 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.1 | -0.99 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
