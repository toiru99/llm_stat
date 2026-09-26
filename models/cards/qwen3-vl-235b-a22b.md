---
type: Model
title: Qwen3 VL 235B A22B
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.52
output_speed_tps: 52.0
context_window: 262000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.0, z: -0.27, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.0, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.85, r: 37.3, estimated: false }  # 코딩
  agentic: { s: 23.0, z: -0.57, r: 41.5, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 72.6, z: 0.11, r: 51.7, estimated: false }  # 멀티모달
  long_context: { s: 37.1, z: -0.41, r: 43.8, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.41, r: 43.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3 VL 235B A22B

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.52/1M · 52.0 t/s · TTFT 2.71s · 262k ctx` · 가성비 19.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.27 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 37.3 | -0.85 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 41.5 | -0.57 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 51.7 | +0.11 | 실측 | [[mmmu-pro]] 68.0%×1.0 |
| 긴문맥 | 43.8 | -0.41 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 43.9 | -0.41 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
