---
type: Model
title: DeepSeek V3.2 Exp
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.119
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 56.0, z: 0.29, r: 54.4, estimated: false }  # 전문 지식
  reasoning: { s: 51.8, z: 0.29, r: 54.3, estimated: false }  # 추론
  coding: { s: 47.2, z: 0.33, r: 54.9, estimated: false }  # 코딩
  agentic: { s: 47.2, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.5, z: 0.86, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: 59.0, z: 0.26, r: 53.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Exp
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# DeepSeek V3.2 Exp

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.119/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.4 | +0.29 | 실측 | [[gpqa-diamond]] 79.7%×0.4, [[humanitys-last-exam]] 14.9%×0.3 |
| 추론 | 54.3 | +0.29 | 실측 | [[gpqa-diamond]] 79.7%×1.0, [[humanitys-last-exam]] 14.9%×1.0 |
| 코딩 | 54.9 | +0.33 | 실측 | [[terminal-bench]] 31.1%×0.5 |
| 에이전트 | 56.6 | +0.44 | 실측 | [[terminal-bench]] 31.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.0 | +0.86 | 실측 | [[aa-lcr]] 72.3%×1.0 |
| 지시 따르기 | 53.8 | +0.26 | 실측 | [[ifbench]] 54.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
