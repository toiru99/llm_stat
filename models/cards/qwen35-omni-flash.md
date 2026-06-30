---
type: Model
title: Qwen3.5 Omni Flash
creator: Alibaba
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 0.17
output_speed_tps: 242.0
context_window: 256000
radar:
  knowledge: { s: 32.6, z: -0.83, r: 37.5, estimated: false }  # 전문 지식
  reasoning: { s: 29.1, z: -0.71, r: 39.3, estimated: false }  # 추론
  coding: { s: 32.0, z: -1.19, r: 32.2, estimated: false }  # 코딩
  agentic: { s: 49.3, z: -0.05, r: 49.2, estimated: false }  # 에이전트
  trust: { s: 2.5, z: -1.08, r: 33.7, estimated: false }  # 신뢰성
  multimodal: { s: 67.2, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 59.5, z: -0.38, r: 44.3, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -1.27, r: 30.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# Qwen3.5 Omni Flash

Alibaba · Proprietary · 컨텍스트 256k · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.8 · 혼합 $0.17/1M · 242.0 t/s · TTFT 1.91s · 256k ctx` · 가성비 111.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 39.3 | -0.71 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 32.2 | -1.19 | 실측 | [[scicode]] 25.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 49.2 | -0.05 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 33.7 | -1.08 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 44.3 | -0.38 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 30.9 | -1.27 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
