---
type: Model
title: Qwen3 VL 8B
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.232
output_speed_tps: 117.0
context_window: 256000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.2, z: -0.68, r: 39.7, estimated: false }  # 전문 지식
  reasoning: { s: 13.9, z: -1.02, r: 34.7, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.11, r: 33.4, estimated: false }  # 코딩
  agentic: { s: 16.2, z: -0.83, r: 37.6, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: 43.8, z: -1.33, r: 30.0, estimated: false }  # 멀티모달
  long_context: { s: 19.1, z: -0.96, r: 35.6, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.05, r: 34.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Qwen3 VL 8B

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.18 · 출력 $0.7 · 혼합 $0.232/1M · 117.0 t/s · TTFT 2.27s · 256k ctx` · 가성비 30.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.7 | -0.68 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 34.7 | -1.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 33.4 | -1.11 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 37.6 | -0.83 | 실측 | [[tau2-bench]] 29.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 30.0 | -1.33 | 실측 | [[mmmu-pro]] 47.0%×1.0 |
| 긴문맥 | 35.6 | -0.96 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 34.3 | -1.05 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
