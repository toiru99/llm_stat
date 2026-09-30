---
type: Model
title: Qwen3 VL 235B A22B (Reasoning)
creator: Alibaba
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.76
output_speed_tps: 55.0
context_window: 262000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.0, z: -0.11, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 32.1, z: -0.19, r: 47.1, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.66, r: 40.1, estimated: false }  # 코딩
  agentic: { s: 35.6, z: -0.1, r: 48.4, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.6, r: 41.0, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.16, r: 52.3, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.33, r: 55.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B (Reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Qwen3 VL 235B A22B (Reasoning)

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $0.4 · 출력 $4.0 · 혼합 $0.76/1M · 55.0 t/s · TTFT 3.33s · 262k ctx` · 가성비 17.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.11 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 47.1 | -0.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 40.1 | -0.66 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 48.4 | -0.1 | 실측 | [[tau2-bench]] 54.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 41.0 | -0.6 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 52.3 | +0.16 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 55.0 | +0.33 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
