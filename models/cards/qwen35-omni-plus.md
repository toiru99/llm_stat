---
type: Model
title: Qwen3.5 Omni Plus
creator: Alibaba
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.84
output_speed_tps: 54.0
context_window: 256000
radar:
  knowledge: { s: 40.5, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 38.3, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 56.7, z: -0.18, r: 47.3, estimated: false }  # 코딩
  agentic: { s: 61.1, z: 0.37, r: 55.5, estimated: false }  # 에이전트
  trust: { s: 75.0, z: 1.34, r: 70.1, estimated: false }  # 신뢰성
  multimodal: { s: 77.6, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 71.6, z: 0.01, r: 50.2, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: -0.57, r: 41.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Qwen3.5 Omni Plus

Alibaba · Proprietary · 컨텍스트 256k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.4 · 출력 $4.8 · 혼합 $0.84/1M · 54.0 t/s · TTFT 2.42s · 256k ctx` · 가성비 36.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 47.3 | -0.18 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 55.5 | +0.37 | 실측 | [[tau2-bench]] 88.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 70.1 | +1.34 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 50.2 | +0.01 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 41.4 | -0.57 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
