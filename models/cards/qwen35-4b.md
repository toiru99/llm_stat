---
type: Model
title: Qwen3.5 4B
creator: Alibaba
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.04
output_speed_tps: 24.0
context_window: 262000
radar:
  knowledge: { s: 32.9, z: -0.89, r: 36.7, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.69, r: 39.7, estimated: false }  # 추론
  coding: { s: 27.3, z: -1.47, r: 27.9, estimated: false }  # 코딩
  agentic: { s: 43.2, z: -0.31, r: 45.3, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.52, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: 67.2, z: -0.45, r: 43.2, estimated: false }  # 멀티모달
  long_context: { s: 75.7, z: 0.16, r: 52.5, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: -0.53, r: 42.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# Qwen3.5 4B

Alibaba · Open · 컨텍스트 262k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $0.03 · 출력 $0.15 · 혼합 $0.04/1M · 24.0 t/s · TTFT 0.83s · 262k ctx` · 가성비 500.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.7 | -0.89 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 39.7 | -0.69 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 27.9 | -1.47 | 실측 | [[scicode]] 16.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 45.3 | -0.31 | 실측 | [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 42.1 | -0.52 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 43.2 | -0.45 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 52.5 | +0.16 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 42.1 | -0.53 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
