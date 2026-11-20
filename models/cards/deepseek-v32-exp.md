---
type: Model
title: DeepSeek V3.2 Exp
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1176
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.3, z: 0.34, r: 55.0, estimated: false }  # 전문 지식
  reasoning: { s: 34.6, z: -0.05, r: 49.2, estimated: false }  # 추론
  coding: { s: 47.1, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 40.7, z: -0.15, r: 47.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.83, r: 62.5, estimated: false }  # 긴문맥
  instruction: { s: 59.0, z: 0.22, r: 53.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Exp
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# DeepSeek V3.2 Exp

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.1176/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.0 | +0.34 | 실측 | [[gpqa-diamond]] 79.6969696969697%×0.4, [[humanitys-last-exam]] 14.874884151992601%×0.3 |
| 추론 | 49.2 | -0.05 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[gpqa-diamond]] 79.6969696969697%×1.0, [[humanitys-last-exam]] 14.874884151992601%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.060606060606098%×0.5 |
| 에이전트 | 47.8 | -0.15 | 실측 | [[tau2-bench]] 33.9181286549708%×1.0, [[terminal-bench]] 31.060606060606098%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.5 | +0.83 | 실측 | [[aa-lcr]] 72.3333333333333%×1.0 |
| 지시 따르기 | 53.2 | +0.22 | 실측 | [[ifbench]] 54.1496598639456%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
