---
type: Model
title: DeepSeek V3.1
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.47
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 52.7, z: 0.27, r: 54.1, estimated: false }  # 전문 지식
  reasoning: { s: 48.4, z: 0.25, r: 53.7, estimated: false }  # 추론
  coding: { s: 37.9, z: 0.0, r: 50.0, estimated: false }  # 코딩
  agentic: { s: 37.9, z: 0.1, r: 51.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 63.9, z: 0.32, r: 54.8, estimated: false }  # 긴문맥
  instruction: { s: 41.3, z: -0.5, r: 42.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# DeepSeek V3.1

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.42 · 출력 $1.34 · 혼합 $0.47/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.1 | +0.27 | 실측 | [[gpqa-diamond]] 77.9%×0.4, [[humanitys-last-exam]] 14.3%×0.3 |
| 추론 | 53.7 | +0.25 | 실측 | [[gpqa-diamond]] 77.9%×1.0, [[humanitys-last-exam]] 14.3%×1.0 |
| 코딩 | 50.0 | +0.0 | 실측 | [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 51.5 | +0.1 | 실측 | [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.8 | +0.32 | 실측 | [[aa-lcr]] 56.7%×1.0 |
| 지시 따르기 | 42.5 | -0.5 | 실측 | [[ifbench]] 41.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
