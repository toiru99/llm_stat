---
type: Model
title: Qwen3.5 Omni Flash
creator: Alibaba
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: None
output_speed_tps: 247.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.7, z: -0.4, r: 44.0, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.26, r: 46.2, estimated: false }  # 추론
  coding: { s: 31.8, z: -0.63, r: 40.6, estimated: false }  # 코딩
  agentic: { s: 49.0, z: 0.49, r: 57.3, estimated: false }  # 에이전트
  trust: { s: 5.7, z: -1.05, r: 34.2, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: -0.0, r: 49.9, estimated: false }  # 멀티모달
  long_context: { s: 57.9, z: 0.25, r: 53.8, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.68, r: 39.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Qwen3.5 Omni Flash

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.8 · 혼합 $None/1M · 247.0 t/s · TTFT 1.85s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.0 | -0.4 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 46.2 | -0.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 40.6 | -0.63 | 실측 | [[scicode]] 25.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 57.3 | +0.49 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 34.2 | -1.05 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | 49.9 | +-0.0 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 53.8 | +0.25 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 39.8 | -0.68 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
