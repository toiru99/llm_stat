---
type: Model
title: Qwen3 VL 235B A22B
creator: Alibaba
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.52
output_speed_tps: 52.0
context_window: 262000
status: past
size_class: Large
params_b: 235
is_reasoning: false
radar:
  knowledge: { s: 36.1, z: -0.23, r: 46.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.38, r: 44.3, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.75, r: 38.7, estimated: false }  # 코딩
  agentic: { s: 23.0, z: -0.55, r: 41.7, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 73.6, z: 0.17, r: 52.6, estimated: false }  # 멀티모달
  long_context: { s: 37.1, z: -0.37, r: 44.5, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3 VL 235B A22B

Alibaba · Open · Large(235B) · 컨텍스트 262k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.52/1M · 52.0 t/s · TTFT 2.64s · 262k ctx` · 가성비 15.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.5 | -0.23 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 44.3 | -0.38 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 38.7 | -0.75 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 41.7 | -0.55 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 52.6 | +0.17 | 실측 | [[mmmu-pro]] 68.0%×1.0 |
| 긴문맥 | 44.5 | -0.37 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
