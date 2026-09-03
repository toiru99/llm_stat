---
type: Model
title: Qwen3 VL 235B A22B (Reasoning)
creator: Alibaba
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.76
output_speed_tps: 53.0
context_window: 262000
status: past
size_class: Large
params_b: 235
is_reasoning: true
radar:
  knowledge: { s: 40.3, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 32.6, z: -0.11, r: 48.4, estimated: false }  # 추론
  coding: { s: 48.6, z: 0.06, r: 51.0, estimated: false }  # 코딩
  agentic: { s: 35.6, z: -0.07, r: 48.9, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.53, r: 42.0, estimated: false }  # 신뢰성
  multimodal: { s: 76.1, z: 0.27, r: 54.1, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.78, r: 61.7, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.38, r: 55.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B (Reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3 VL 235B A22B (Reasoning)

Alibaba · Open · Large(235B) · 컨텍스트 262k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.4 · 출력 $4.0 · 혼합 $0.76/1M · 53.0 t/s · TTFT 2.84s · 262k ctx` · 가성비 27.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.4 | -0.11 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 51.0 | +0.06 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 48.9 | -0.07 | 실측 | [[tau2-bench]] 54.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 54.1 | +0.27 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 61.7 | +0.78 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 55.6 | +0.38 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
