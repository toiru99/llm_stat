---
type: Model
title: Qwen3.5 Omni Flash
creator: Alibaba
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 0.17
output_speed_tps: 219.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.7, z: -0.44, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.7, z: -0.34, r: 44.8, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.82, r: 37.8, estimated: false }  # 코딩
  agentic: { s: 49.0, z: 0.41, r: 56.1, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.99, r: 35.2, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.12, r: 48.2, estimated: false }  # 멀티모달
  long_context: { s: 58.4, z: 0.22, r: 53.2, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.72, r: 39.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Qwen3.5 Omni Flash

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.8 · 혼합 $0.17/1M · 219.0 t/s · TTFT 1.84s · 256k ctx` · 가성비 70.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.44 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 44.8 | -0.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 37.8 | -0.82 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 56.1 | +0.41 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 35.2 | -0.99 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 48.2 | -0.12 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 53.2 | +0.22 | 실측 | [[aa-lcr]] 52.0%×1.0 |
| 지시 따르기 | 39.3 | -0.72 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
