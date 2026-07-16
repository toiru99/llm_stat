---
type: Model
title: Llama 3.2 3B
creator: Meta
license: Open
intelligence_index: 4.0
price_blended_usd_1m: 0.15
output_speed_tps: 52.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.5, z: -1.31, r: 30.4, estimated: false }  # 전문 지식
  reasoning: { s: 12.8, z: -1.1, r: 33.5, estimated: false }  # 추론
  coding: { s: 8.3, z: -1.6, r: 26.0, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.58, r: 41.3, estimated: false }  # 에이전트
  trust: { s: 8.7, z: -0.9, r: 36.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.6, z: -1.36, r: 29.6, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.34, r: 29.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Llama 3.2 3B

Meta · Open · Unknown · 컨텍스트 128k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.15 · 출력 $0.15 · 혼합 $0.15/1M · 52.0 t/s · TTFT 1.06s · 128k ctx` · 가성비 26.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.4 | -1.31 | 실측 | [[gpqa-diamond]] 25.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.5 | -1.1 | 실측 | [[gpqa-diamond]] 25.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 26.0 | -1.6 | 실측 | [[scicode]] 5.0%×1.0 |
| 에이전트 | 41.3 | -0.58 | 실측 | [[tau2-bench]] 21.0%×1.0 |
| 신뢰성 | 36.5 | -0.9 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.6 | -1.36 | 실측 | [[aa-lcr]] 2.0%×1.0 |
| 지시 따르기 | 29.9 | -1.34 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
